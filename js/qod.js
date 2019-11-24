(function($) {
  let lastPage = '';

  $('#new-quote-button').on('click', function(event) {
    event.preventDefault();

    lastPage = document.URL;
    $.ajax({
      method: 'GET',
      url:
        qod_vars.rest_url +
        '/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
    })
      .done(function(data) {
        console.log(data);
        const post = data[0];
        history.pushState(null, null, qod_vars.home_url + '/' + post.slug);

        $('.entry-content').html(data[0].content.rendered);
        $('.entry-title').html(data[0].title.rendered);

        if (data[0]._qod_quote_source_url !== '') {
          $('.source').html(
            `,<a href="${data[0]._qod_quote_source_url}">${data[0]._qod_quote_source}</a>`
          );
          
        } else {
          $('.source').html(data[0]._qod_quote_source);
        }
      })
      .fail(function(error) {
        console.log('an error occurred', error);
      });
    $(window).on('popstate', function() {
      window.location.replace(lastPage);
    });
  });
})(jQuery);

//IIFE
(function( $ ) {

  $('#quote-submission-form').on('submit', function(event) {
     event.preventDefault();

    const subData = {
        title: $('#quote-author').val(),
        content: $('#quote').val(),
        _qod_quote_source_url: $('#quote-location').val(),
        _qod_quote_source: $('quote-url').val()


    };
console.log(subData);

   
     $.ajax({
        method: 'post',
        url: qod_vars.rest_url + 'wp/v2/posts/',
        data: subData,
        beforeSend: function(xhr) {
           xhr.setRequestHeader( 'X-WP-Nonce', qod_vars.nonce );
        }

     }).done( function() {
        //$('#quote-author').val(),
        //$('#quote').val(),
        //$('#quote-location').val(),
        //$('quote-url').val(),
        //alert('Success! Comments are closed for this post.');
        $('#content').append('Thanks, your quote submission was received.');
        $('#quote-submission-form').slideUp();



     }).fail(function(data){
        alert("Hey, it's not working. " + data);
        
        
     });
  });
})( jQuery );
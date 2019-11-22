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

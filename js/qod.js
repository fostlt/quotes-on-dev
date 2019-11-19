(function($){

    /// code goes here
    
    // get request to grab random and append to the DOM

    // add a click event for the "show men another" btn nd then run AJAX code below
    //run as event listener or put it in a button

    $.ajax({
        method: "GET",
        url: // qod_vars.rest_url + /wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1
    }).done(function(data){
        console.log(data);
        // append the quote to the DOM
    }).fail(function(error){
        console.log("an error occurred", error);
    });
    // post a new quote using hte post method
    // using a form to submit a quote so a .submit
    //

})(jQuery)

//IIFE 
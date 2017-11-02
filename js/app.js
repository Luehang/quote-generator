$(document).ready(function() {
  /* Get pictures from API */
  $('button').click(function() {
    $('button').removeClass('selected');
    $(this).addClass('selected');
    var flickerAPI = `https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?`;
    var quotes = $(this).text();
    var flickerOptions = {
      tags: quotes,
      format: "json"
    }; // end flickerOptions
    function displayPhotos(data) {
      var photoHTML = `<ul class="photo-grid">`;
      $.each(data.items, function (x, photo) {
        photoHTML += `<li>`;
        photoHTML += `<a href="${photo.link}" class="image">`;
        photoHTML += `<img src="${photo.media.m}"`
        photoHTML += ` alt="${photo.title}"></a></li>`;
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }; // function displayPhotos end
    $.getJSON(flickerAPI, flickerOptions, displayPhotos);
  }); // end button
}); // end ready

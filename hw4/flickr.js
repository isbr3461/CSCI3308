var new_id;


function makeAPICall(){
  var results = document.getElementById("number").value;
  var type = document.getElementById("textbox").value;


  var settings = {
    "async": true,
    "crossDomain": true,
    "url": 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2f3d9ece24d64164c107d6d3fe8bca71&tags='+type+'&per_page='+results+'&format=json&nojsoncallback=1',
    "method": "GET",
    "headers": {}
  }

  $.ajax(settings).done(function (data) {
  console.log(data);

  //  https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg


    for (var i=0;i<=results;i++) {
        var myCol = $('<div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 pb-4"></div>');
        var myPanel = $('\
        <div class="card" id="'+i+'Panel">\
          <div class="card-body">\
            <div class="h4 card-title">\
              <span> ' + data.photos.photo[i].title + ' </span>\
            </div>\
          <img class = "card-img-top" src="https://farm'+data.photos.photo[i].farm+'.staticflickr.com/'+data.photos.photo[i].server+'/'+data.photos.photo[i].id+'_'+data.photos.photo[i].secret+'.jpg+">\
          </div>\
        </div>');
        myPanel.appendTo(myCol);
        myCol.appendTo('#contentPanel');

      }
});

window.onscroll = function(ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        makeAPICall();
    }
};

}

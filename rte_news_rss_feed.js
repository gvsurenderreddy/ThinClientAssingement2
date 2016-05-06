//document.getElementById("feed").innerHTML="  ";
//  document.getElementById("feed").innerHTML="  ";
    
    

    google.load("feeds", "1");
   // window.onclick="initalize()";

    function initialize2() {
      //  document.getElementById("feed").innerHTML="  ";
      var feed = new google.feeds.Feed("http://www.rte.ie/news/rss/news-headlines.xml");
      
      feed.load(function(result) {
        if (!result.error) {
         var container = document.getElementById("feed");
         var span = document.createElement("span");
         span.appendChild(document.createTextNode("RTE news headlines"));
         container.appendChild(span);
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
           // var span = document.createElement("span");
            var div = document.createElement("div");
           //  span.appendChild(document.createTextNode("RTE news headlines"));
            div.appendChild(document.createTextNode(entry.title+" "));
            // container.appendChild(span);
            container.appendChild(div);
          }
        }
      });
    }
    google.setOnLoadCallback(initialize2);

    
  
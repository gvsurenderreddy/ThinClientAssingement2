/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//window.onclick=  document.getElementById("feed").innerHTML="  ";
    
  //  document.getElementById("feed").innerHTML="  ";

    google.load("feeds", "1");
  //  window.onclick="initalize()";

    function initialize3() {
        // document.getElementById("feed").innerHTML="  ";
      var feed = new google.feeds.Feed("http://www.independent.ie/breaking-news/rss");
      feed.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("feed");
           var span = document.createElement("span");
         span.appendChild(document.createTextNode("Irish Independent news headlines"));
         container.appendChild(span);
         
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
          
            var div = document.createElement("div");
            // span.appendChild(document.createTextNode("Irish Independent news headlines")
            div.appendChild(document.createTextNode(entry.title+" "));
          //  container.appendChild(span);
            container.appendChild(div);
          }
        }
      });
    }
    google.setOnLoadCallback(initialize3);

    
  



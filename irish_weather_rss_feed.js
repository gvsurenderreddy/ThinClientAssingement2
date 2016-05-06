/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    
    

    google.load("feeds", "1");

    function initialize() {
      var feed = new google.feeds.Feed("");
      feed.load(function(result) {
        if (!result.error) {
            var container = document.getElementById("weatherfeed");
           for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            var span = document.createElement("span");
            var div = document.createElement("div");
             span.appendChild(document.createTextNode("Dublin  weather"));
            div.appendChild(document.createTextNode(entry.title));
            container.appendChild(span);
            container.appendChild(div);
          }
        }
      });
    }
    google.setOnLoadCallback(initialize);

    
  






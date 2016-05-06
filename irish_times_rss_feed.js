/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    
 //window.onclick=  document.getElementById("feed").innerHTML="  ";

    google.load("feeds", "1");
  //  window.onclick="initalize()";

    function initialize1() {
         //document.getElementById("feed").innerHTML="  ";
      var feed = new google.feeds.Feed("https://www.irishtimes.com/cmlink/news-1.1319192");
      feed.load(function(result) {
        if (!result.error) {
        //  var container = document.getElementById("feed");
          var container = document.getElementById("feed");
           var span = document.createElement("span");
          
         span.appendChild(document.createTextNode("Irish Times news headlines"));
         container.appendChild(span);
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
           // var span = document.createElement("span");
            var div = document.createElement("div");
           // span.appendChild(document.createTextNode("Irish Times news headlines"));
            div.appendChild(document.createTextNode(entry.title+" "));
           // container.appendChild(span);
            container.appendChild(div);
          }
        }
      });
    }
    google.setOnLoadCallback(initialize1);

    
  



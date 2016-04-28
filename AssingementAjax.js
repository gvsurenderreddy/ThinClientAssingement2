<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script type="text/javascript">

//function getList (){
$(document).ready(function() {
	$("p").click(function(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            xmlDoc = xhr.responseXML;
            var team =
                xmlDoc.getElementsByTagName("fixtures");
            var html = "";
            for (i = 0; i < team.length; i++) {
                html += 
                    xmlDoc.getElementsByTagName("match")[i].childNodes[0].nodeValue + "<br>" +
                    xmlDoc.getElementsByTagName("location")[i] .childNodes[0].nodeValue + "<br>" + 
                    xmlDoc.getElementsByTagName("date")[i] .childNodes[0].nodeValue + "<br><br>"; 
			}
            document.getElementById("matchlist").innerHTML = html;
        }
    }
    xhr.open("GET", "fixtures.xml", true);
    xhr.send();
}});

</script>

</head>
<body>
<!--<h1>Ajax XML test</h1>-->
<!--<ul id="matchlist"></ul>-->
</body>
</html>
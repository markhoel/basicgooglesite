<script>
function setAges(data) {

  // get correct div from Index.html
  var a = document.getElementById("ages");
  
  var myHTML = "<table>";
  
  // loop through data from spreadsheet and add it to HTML variable
  for (i=0; i<data.length; i++) {
    myHTML = myHTML + "<tr><td>" + data[i] + "</td></tr>";
  }
  
  var myHTML = myHTML + "</table>";
  
  // set contents of myHTML var to div in Index.html
  a.innerHTML = myHTML;
}
</script>

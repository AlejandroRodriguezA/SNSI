const gif= document.getElementById('gif'); /* .getElementsByTagName("body"); */
console.log(gif);

function restartGIF(){
   gif.src=gif.getAttribute('src');

}

document.addEventListener("loadstart",restartGIF);

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
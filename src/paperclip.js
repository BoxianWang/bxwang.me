const button = document.querySelector("#b");
var click = 0;
button.addEventListener("click", function(){
    click += 1;
  document.querySelector("#paperclip").textContent = "Paperclips: " + click;
});
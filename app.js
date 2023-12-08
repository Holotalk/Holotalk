const fileInput = document.getElementById('fileInput');
const coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
 coll[i].addEventListener("click", function() {
 this.classList.toggle("active");
 let content = this.nextElementSibling;
 if (content.style.display === "block") {
 content.style.display = "none";
 } else {
 content.style.display = "block";
 }
 });
}

fileInput.addEventListener('change', function(e) {
 var file = e.target.files[0];
 if (!file) {
 return;
 }
 var reader = new FileReader();
 reader.onload = function(e) {
 var contents = e.target.result;
 console.log(contents);
 };
 reader.readAsText(file);
}, false);

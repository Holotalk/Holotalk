const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

let circles = [];

canvas.addEventListener('mousemove', function(e) {
 if(circles.length >= 6) {
 circles.shift();
 }
 let circle = {
 x: e.clientX,
 y: e.clientY,
 radius: 20,
 color: ["#FF0000", "#E0FFFF", "#70E0E6", "#FFFF00", "#B0E0E6"][Math.floor(Math.random() * 5)],
 alpha: 1,
 };
 circles.push(circle);
});

canvas.addEventListener('click', function(e) {
 let buttonText = "Get Started";
 ctx.font = "30px Arial";
 ctx.textAlign = "center";
 ctx.fillText(buttonText, canvas.width / 2, canvas.height / 2);
 let metrics = ctx.measureText(buttonText);
 let rectWidth = metrics.width;
 let rectHeight = 30;
 let rectX = canvas.width / 2 - rectWidth / 2;
 let rectY = canvas.height / 2 - rectHeight / 2;
 if(e.clientX >= rectX && e.clientX <= rectX + rectWidth && e.clientY >= rectY && e.clientY <= rectY + rectHeight) {
 window.location.href = "app.html";
 }
});

function animate() {
 ctx.clearRect(0, 0, canvas.width, canvas.height);
 for(let i = 0; i < circles.length; i++) {
 let circle = circles[i];
 ctx.beginPath();
 ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
 ctx.strokeStyle = circle.color;
 ctx.globalAlpha = circle.alpha;
 ctx.stroke();
 circle.alpha -= 0.01;
 if(circle.alpha <= 0) {
 circles.splice(i, 1);
 }
 }

 // Draw "Get Started" button
 ctx.font = "30px Arial";
 ctx.fillStyle = "#ffffff";
 ctx.textAlign = "center";
 ctx.fillText("Click Here To Get Started", canvas.width / 2, canvas.height / 2);

 requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', function() {
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
});

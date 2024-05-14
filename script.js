document.getElementById('call-button').addEventListener('click', function() {
    window.location.href = 'tel:+989122680423'; // Replace '099537' with the desired phone number
});
document.addEventListener("DOMContentLoaded", function() {
  const mojavezbutton = document.querySelector(".mojavez-button");
  mojavezbutton.addEventListener("click", function() {
    window.open('https://qr.mojavez.ir/track/3033942', '_blank');
  });
});

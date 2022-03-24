const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  const left = parseInt(dodger.style.left);
  if (left > 0) dodger.style.left = `${left - 1}px`;
}

function moveDodgerRight() {
  const left = parseInt(dodger.style.left);
  if (left < 360) dodger.style.left = `${left + 1}px`;
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') moveDodgerLeft();
  if (e.key === 'ArrowRight') moveDodgerRight();
})
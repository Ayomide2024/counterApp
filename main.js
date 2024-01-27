let count = 0;
const countDisplay = document.getElementById('count');

function updateCount() {
  countDisplay.textContent = count;
}

function increment() {
  count++;
  updateCount();
}

function decrement() {
  count--;
  updateCount();
}

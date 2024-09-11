const rangeValue = document.getElementById('rangeValue');
rangeValue.textContent = 0;

function valueChanged(e) {
  let a = e.value;
  rangeValue.textContent = a;
  e.style.background = `linear-gradient(to right,#4BD663,#4BD663 ${a * 5}%,#eee ${a * 5}%)`;
}

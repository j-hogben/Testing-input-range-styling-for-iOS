const rangeValue = document.getElementById('rangeValue');
rangeValue.textContent = 0;
const passwordMax = 100 / parseFloat(document.getElementById('lengthSlider').getAttribute('max'));

function rangeSliderColors(e) {
  let a = e.value;
  rangeValue.textContent = a;
  e.style.background = `linear-gradient(to right,#4BD663,#4BD663 ${a * passwordMax}%,#eee ${a * passwordMax}%)`;
}

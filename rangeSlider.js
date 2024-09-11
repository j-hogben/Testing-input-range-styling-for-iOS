const rangeValue = document.getElementById('rangeValue');
const touchValue = document.getElementById('touchValue');
const lengthSlider = document.getElementById('lengthSlider');
// const passwordMax = 100 / parseFloat(document.getElementById('lengthSlider').getAttribute('max'));
const passwordMax = 100 / parseFloat(document.getElementById('lengthSlider').getAttribute('max'));

console.log(passwordMax);

rangeValue.textContent = 0;

function rangeSliderColors(e) {
  let a = e.value;
  rangeValue.textContent = a;
  e.style.background = `linear-gradient(to right,#4BD663,#4BD663 ${a * passwordMax}%,#eee ${a * passwordMax}%)`;
}

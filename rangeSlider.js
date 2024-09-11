const rangeValue = document.getElementById('rangeValue');
rangeValue.textContent = 0;
const passwordMax = 100 / parseFloat(document.getElementById('lengthSlider').getAttribute('max'));
const rootStyles = getComputedStyle(document.documentElement);
const sliderProgress = rootStyles.getPropertyValue('--clr-1').trim();
const sliderEmpty = rootStyles.getPropertyValue('--clr-2').trim();

function rangeSliderColors(e) {
  let a = e.value;
  rangeValue.textContent = a;
  e.style.background = `linear-gradient(to right,${sliderProgress},${sliderProgress} ${
    a * passwordMax
  }%,${sliderEmpty} ${a * passwordMax}%)`;
}

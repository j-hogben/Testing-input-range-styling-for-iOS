const rangeValue = document.getElementById('rangeValue');
const touchValue = document.getElementById('touchValue');
const lengthSlider = document.getElementById('lengthSlider');
// const passwordMax = 100 / parseFloat(document.getElementById('lengthSlider').getAttribute('max'));
const passwordMax = 100 / parseFloat(document.getElementById('lengthSlider').getAttribute('max'));
const rootStyles = getComputedStyle(document.documentElement);
const sliderProgress = rootStyles.getPropertyValue('--clr-1');
const sliderEmpty = rootStyles.getPropertyValue('--clr-2');

console.log(passwordMax);

rangeValue.textContent = 0;

function rangeSliderColors(e) {
  let a = e.value;
  rangeValue.textContent = a;
  // e.style.background = `linear-gradient(to right,#4BD663,#4BD663 ${a * passwordMax}%,#eee ${a * passwordMax}%)`;
  e.style.background = `linear-gradient(to right,${sliderProgress},${sliderProgress} ${
    a * passwordMax
  }%,${sliderEmpty} ${a * passwordMax}%)`;
}

function updateSliderOnTouch(event) {
  // const touch = event.touches[0];
  const touch = event.touches[0].clientX;

  touchValue.textContent = touch.value;

  const sliderRect = lengthSlider.getBoundingClientRect();
  const newValue = Math.round(
    ((touch.clientX - sliderRect.left) / sliderRect.width) * lengthSlider.max
  );
  lengthSlider.value = Math.max(lengthSlider.min, Math.min(newValue, lengthSlider.max));
  rangeSliderColors();
}

lengthSlider.addEventListener('touchstart', updateSliderOnTouch);
lengthSlider.addEventListener('touchmove', updateSliderOnTouch);

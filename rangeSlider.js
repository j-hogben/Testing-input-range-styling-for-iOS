function valueChanged(e) {
  let a = e.value;
  e.style.background = `linear-gradient(to right,#4BD663,#4BD663 ${a}%,#eee ${a}%)`;
}

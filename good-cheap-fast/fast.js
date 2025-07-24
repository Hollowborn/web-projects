const cb1 = document.getElementById(`cb1`);
const cb2 = document.getElementById(`cb2`);
const cb3 = document.getElementById(`cb3`);
const buttons = document.querySelectorAll("input");

buttons.forEach((button) => {
  button.addEventListener("change", () => checkSwitches());
});
function checkSwitches() {
  if (cb1.checked) {
    if (cb2.checked && cb3.checked) {
      cb1.checked = false;
    }
  }
  if (cb2.checked) {
    if (cb1.checked && cb3.checked) {
      cb2.checked = false;
    }
  }
  if (cb3.checked) {
    if (cb1.checked && cb2.checked) {
      cb3.checked = false;
    }
  }
}

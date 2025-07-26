const good = document.getElementById(`cb1`);
const cheap = document.getElementById(`cb2`);
const fast = document.getElementById(`cb3`);
const buttons = document.querySelectorAll("input");

buttons.forEach((button) =>
  button.addEventListener("change", (e) => checkSwitches(e.target))
);
function checkSwitches(target) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good == target) {
      fast.checked = false;
    }
    if (cheap == target) {
      good.checked = false;
    }
    if (fast == target) {
      cheap.checked = false;
    }
  }
}

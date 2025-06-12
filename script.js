function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  let display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    let display = document.getElementById('display');
    display.value = eval(display.value);
  } catch {
    alert('Invalid Expression');
  }
}

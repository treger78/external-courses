function debounce(target, debouncedElem, debounceInterval) {
  setTimeout(() => {
    // eslint-disable-next-line no-param-reassign
    debouncedElem.textContent = target;
  }, debounceInterval);
}

const debouncedInputElem = document.getElementById('debouncedContent');
const debouncedElem = document.getElementById('debounced');

debouncedInputElem.addEventListener('input', (event) => {
  debounce(event.target.value, debouncedElem, 1500);
});

function regular(target, regularElem, regularInterval) {
  return setTimeout(() => {
    // eslint-disable-next-line no-param-reassign
    regularElem.textContent = target;
  }, regularInterval);
}

const regularInputElem = document.getElementById('regularContent');
const regularElem = document.getElementById('regular');

regularInputElem.addEventListener('input', (event) => {
  regular(event.target.value, regularElem, 1);
});

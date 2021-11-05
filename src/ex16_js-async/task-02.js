function debounce(debouncedInputElem, debouncedElem, debounceInterval) {
  const refreshDebounce = setInterval(() => {
    // eslint-disable-next-line no-param-reassign
    debouncedElem.textContent = debouncedInputElem.value;
  }, debounceInterval);

  if (debounceInterval === -1) clearInterval(refreshDebounce);
}

const debouncedInputElem = document.getElementById('debouncedContent');
const debouncedElem = document.getElementById('debounced');

debouncedInputElem.addEventListener('focus', () => {
  debounce(debouncedInputElem, debouncedElem, 1500);
});

debouncedInputElem.addEventListener('blur', () => {
  debounce(debouncedInputElem, debouncedElem, -1);
});

function regular(regularInputElem, regularElem, regularInterval) {
  const refreshRegular = setInterval(() => {
    // eslint-disable-next-line no-param-reassign
    regularElem.textContent = regularInputElem.value;
  }, regularInterval);

  if (regularElem === -1) clearInterval(refreshRegular);
}

const regularInputElem = document.getElementById('regularContent');
const regularElem = document.getElementById('regular');

regularInputElem.addEventListener('focus', () => {
  regular(regularInputElem, regularElem, 1);
});

regularInputElem.addEventListener('blur', () => {
  regular(regularInputElem, regularElem, -1);
});

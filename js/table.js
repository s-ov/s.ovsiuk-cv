const toggleButton = document.getElementById('toggleTableBtn');
const table = document.getElementById('myTable');

toggleButton.addEventListener('click', () => {
  if (table.classList.contains('hidden')) {
    table.classList.remove('hidden');
    toggleButton.textContent = 'Hide Resume';
  } else {
    table.classList.add('hidden');
    toggleButton.textContent = 'Show Resume';
  }
});
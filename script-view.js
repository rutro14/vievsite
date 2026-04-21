let clickCount = 0;

document.addEventListener('DOMContentLoaded', function() {
  loadNames();
  document.getElementById('refresh-btn').addEventListener('click', loadNames);
});

function loadNames() {
  fetch('https://rutro14.github.io/OZON/') // Замените на ваш API
    .then(response => response.json())
    .then(data => {
      const namesList = document.getElementById('names-list');
      namesList.innerHTML = '';
      data.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item.fullName;
        namesList.appendChild(div);
      });
    })
    .catch(error => console.error('Ошибка:', error));
}

// Счётчик нажатий
document.getElementById('refresh-btn').addEventListener('click', function() {
  clickCount++;
  document.getElementById('click-count').textContent = clickCount;
});

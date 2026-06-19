
// Модальное окно
let modal = document.querySelector('.modal-wrapper');
let openModalBtn = document.querySelector('.hotel-search__button');
let closeModalBtn = document.querySelector('.modal__close');

// Открытие модального окна
openModalBtn.addEventListener('click', function() {
  modal.classList.remove('modal-close');
});

// Закрытие модального окна
closeModalBtn.addEventListener('click', function() {
  modal.classList.add('modal-close');
});

modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.classList.add('modal-close');
  }
});

// Кнопки увеличения и уменьшения количества гостей
let modalNumBase = document.querySelectorAll('.modal__num-base');
modalNumBase.forEach(function(item) {

  let modalInputDecrease = item.querySelector('.modal__num-btn_decrease');
  modalInputDecrease.addEventListener('click', function() {
    let input = item.querySelector('.modal__input_num');
    if (input.value > 0) {
      input.value = parseInt(input.value) - 1;
    }
  });

  let modalInputIncrease = item.querySelector('.modal__num-btn_increase');
  modalInputIncrease.addEventListener('click', function() {
    let input = item.querySelector('.modal__input_num');
    input.value = parseInt(input.value) + 1;
  });

});

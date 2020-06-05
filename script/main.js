const buttonOpenModalWindow = document.querySelector('#buttonOpen'), // Open button
      buttonCloseModalWindow = document.querySelector('#buttonClose'), // CLose Button
      modalWindow = document.querySelector('.content__modal-window'); // Modal window

buttonOpenModalWindow.addEventListener('click', function() { // Click event for Open button
    modalWindow.classList.add('window-active');
})

buttonCloseModalWindow.addEventListener('click', function() { // Click event for Close button
    modalWindow.classList.remove('window-active');
})
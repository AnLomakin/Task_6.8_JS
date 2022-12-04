const consoleLog= document.querySelector('#consoleLog');

consoleLog.addEventListener('click',()=>{
    console.log('Служит для вывода информации в консоль');
    alert('Служит для вывода информации в консоль');
})

document.querySelector('#alert').addEventListener('click', 
  () => {
    alert('Выводит диалоговое окно для пользователя');
})

document.querySelector('#prompt').addEventListener('click', 
  () => {
    prompt('Введите любой текст');
})
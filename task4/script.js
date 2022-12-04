const link= document.querySelector('#link');
let inputText;

link.addEventListener('click', (Event)=>{
    Event.preventDefault();
    inputText= prompt('Введите текст, для изменения ссылки');
    link.textContent= inputText;
})
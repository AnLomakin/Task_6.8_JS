let input = document.querySelector('input');
let button = document.querySelector('#send');

input.addEventListener('input', function duplicate (){
    duplicateField.textContent = input.value;
})


document.querySelector('form').addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(input.value);
    input.value = '';
    duplicateField.textContent = '';
    event.target.reset();
})


/*
    button.addEventListener('click',()=>{
    console.log(input.value);
    input.value = '';
    duplicateField.textContent = '';
})*/
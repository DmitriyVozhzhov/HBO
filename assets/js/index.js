let checkbox = document.querySelector('.custom-checkbox');
let input = document.querySelector("[name='firstname']")
let input1 = document.querySelector("[name='lastname']")
let input2 = document.querySelector("[name='email']")

checkbox.addEventListener('click', function() {
    if (checkbox.classList.contains('checked')){
        checkbox.classList.remove('checked') 
    } else {
        checkbox.classList.add('checked') 
    }
})
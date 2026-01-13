
// TODO: a variables to refer to input, button, and list elements
const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');

button.addEventListener('click', function () {
    if (input.value === '') {
        alert('Please enter a Book and Chapter.');
    } else {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        input.value = '';
        input.focus();
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
        });
    }
});
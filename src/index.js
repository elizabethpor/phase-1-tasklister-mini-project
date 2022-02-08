document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildTodo(e.target['new-task-description'].value);
    form.reset();
  })
});

function buildTodo(todo) {
  let p = document.createElement('p');
  p.textContent = `${todo} `
  let deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'x';
  deleteBtn.addEventListener('click', handleDelete);
  p.appendChild(deleteBtn);
  document.querySelector('#tasks').appendChild(p);
}

function handleDelete(e) {
  e.target.parentNode.remove();
};

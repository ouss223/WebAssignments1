const todos = document.getElementById('todos');
const title = document.getElementById('name');
const content = document.getElementById('content');
const adding = document.getElementById('adding');

adding.addEventListener('click', () => {
    const todo = document.createElement('li');
    todo.style.padding = '10px';
    todo.style.listStyle = 'none';
todo.style.border = '2px solid black';
todo.style.borderRadius = '10px';
todo.style.marginBottom = '35px';

    todo.innerHTML = `<h2>⇒  ${title.value}</h2>
    <div style ="display:flex; align-items:center;">
    <input type="checkbox" id="done" style="height: 30px; width: 30px;">
    <p>${content.value}</p>
    
    </div>`;
    todos.appendChild(todo);
});

document.addEventListener("DOMContentLoaded", () => {
  const taskArray = [];
  const addTask = (task) => taskArray.push(task);
  const removeTask = (task) => taskArray.splice;

  document
    .getElementById("create-task-form")
    .addEventListener("submit", (e) => {
      const li = document.createElement("li");
      li.innerText = document.getElementById("new-task-description").value;
      document.getElementById("tasks").appendChild(li);
      const btn = document.createElement("button");
      btn.innerHTML = "X";
      li.append(btn);
      btn.addEventListener("click", (e) => {
        li.remove();
      });
      e.preventDefault();
    });
});

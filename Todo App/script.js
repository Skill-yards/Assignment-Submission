  var input = document.querySelector("input");
  var addButton = document.querySelector("button");
  var todoList = document.querySelector(".todo-list");

  addButton.disabled = false;

  addButton.addEventListener("click", function() {
    var task = input.value.trim();

    if (task === "") {
      alert("please enter in this field");
      return;
    }

    var li = document.createElement("li");
    var span = document.createElement("span");
    span.textContent = task;

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";

    deleteBtn.addEventListener("click", function() {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    input.value = "";
  });


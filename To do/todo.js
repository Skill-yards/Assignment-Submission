// let todoList=[];
// displayItems()


// function addTodo(){
// let inputTodo = document.getElementById("todo");
// let inputItem = inputTodo.value

// todoList.push(inputItem);
// inputTodo.value="";
// displayItems()

// }

// function displayItems(){
//     let storeItem=document.getElementById("taskStored")
// storeItem.innerText='';
// for(let i=0;i<todoList.length;i++){

// storeItem.innerText+="\n"+todoList[i]
 
// }}
// function deleteBtn(){
// todoList.splice(`$[i]`,1)



// displayItems()

// }

let todoList = [];
displayItems();

function addTodo() {
  let inputTodo = document.getElementById("todo");
  let inputItem = inputTodo.value.trim();

  if (inputItem !== "") {
    todoList.push(inputItem);
    inputTodo.value = "";
    displayItems();
  }
}

function displayItems() {
  let storeItem = document.getElementById("taskStored");
  storeItem.innerHTML = ""; // Clear current items

  todoList.forEach((item, index) => {
    // Create a container div for each item
    let itemDiv = document.createElement("div");
    itemDiv.style.display = "flex";
    itemDiv.style.justifyContent = "space-between";
    itemDiv.style.marginBottom = "7px";

   
    let itemText = document.createElement("span");
   setTimeout(()=>{ itemText.textContent = item;

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.style.background = "#d63031";
    delBtn.style.color = "#fff";
    delBtn.style.border = "none";
    delBtn.style.borderRadius = "4px";
    delBtn.style.cursor = "pointer";
    delBtn.style.marginLeft = "8px";
    delBtn.onclick = function() {
      deleteBtn(index);
    };

    itemDiv.appendChild(itemText);
    itemDiv.appendChild(delBtn);

    storeItem.appendChild(itemDiv);},2000)
  });
}

function deleteBtn(index) {
  todoList.splice(index, 1);
  displayItems();
}
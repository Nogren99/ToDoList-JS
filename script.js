let addButton = document.getElementById("add-button")

addButton.addEventListener("click",addToDoItem)

let inputBox = document.getElementById("todo-entry-box")

function addToDoItem(){

    let itemText = inputBox.value
    newToDoItem(itemText)

    inputBox.value="" //para formatear el cuadro
}

let toDoList = document.getElementById("todo-list")

function newToDoItem(text){  //creamos elemento de la lista 
    let toDoItem = document.createElement("li")
    toDoItem.innerText = text

    toDoList.append(toDoItem)
    toDoItem.addEventListener("click",toggleItemState) //le agregamos para que se quede esperando un click que eecute toggle
}

//Cambiar tarea a completada y viceversa:

function toggleItemState(){
    if(this.classList.contains("completed")){
        this.classList.remove("completed")
    }else{
        this.classList.add("completed")  // el elemento de la li pasa a tener class="completed"
    }
}



//Eliminar tareas completadas:

let clearButton = document.getElementById("clear-button")

clearButton.addEventListener("click",clearCompleted)

function clearCompleted(){
    let completedItems =toDoList.getElementsByClassName("completed") //completedItems tiene una referencia a los iteemms que tienen la clase "completed"
    while(completedItems.length>0){
        completedItems[0].remove();
    }
}

//Eliminar Lista

let emptyButton = document.getElementById("empty-button")

emptyButton.addEventListener("click",emptyList)

function emptyList(){
    toDoList.innerHTML=""
}
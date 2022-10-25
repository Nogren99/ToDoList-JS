let items = []
let addButton = document.getElementById("add-button")

addButton.addEventListener("click",addToDoItem)

let inputBox = document.getElementById("todo-entry-box")

function addToDoItem(){

    let itemText = inputBox.value
    newToDoItem(itemText,false)

    inputBox.value="" //para formatear el cuadro
}

let toDoList = document.getElementById("todo-list")

function newToDoItem(text,completed){  //creamos elemento de la lista 
    let toDoItem = document.createElement("li")
    toDoItem.innerText = text

    //carga storage
    if(completed){
        toDoItem.classList.add("completed")
        
    }
    //guarda storage
    let itemInfo = {
        task: toDoItem.innerText,
        completed: toDoItem.classList.contains("completed")
    }
    items.push(itemInfo)
    localStorage.setItem("list",JSON.stringify(items))


    


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
    saveList();
}



//Eliminar tareas completadas:

let clearButton = document.getElementById("clear-button")

clearButton.addEventListener("click",clearCompleted)

function clearCompleted(){
    let completedItems =toDoList.getElementsByClassName("completed") //completedItems tiene una referencia a los iteemms que tienen la clase "completed"
    while(completedItems.length>0){
        completedItems[0].remove();
    }
    saveList();
}

//Eliminar Lista

let emptyButton = document.getElementById("empty-button")
emptyButton.addEventListener("click",emptyList)

function emptyList(){
    toDoList.innerHTML=""
    saveList();
}


//Guardar lsita en storage

/*
<button id="save-button" class="pretty-button">Guardar</button>
let saveButton = document.getElementById("save-button")
saveButton.addEventListener("click",saveList)
*/
function saveList(){
    let items = []

    for(let i=0;i<toDoList.children.length;i++) { //una vez por cada hijo
        let item=toDoList.children[i]
        
        let itemInfo = {
            task: item.innerText,
            completed: item.classList.contains("completed")
        }

        items.push(itemInfo)
    }

    localStorage.setItem("list",JSON.stringify(items))
}

//Cargar lista del storage


function loadList(){
    let list = JSON.parse(localStorage.getItem("list")) // traigo un array de objetos

    for(let i=0 ;i<list.length;i++){
        newToDoItem(list[i].task,list[i].completed)
    }

}

loadList()
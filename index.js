let todoId = (id)=>{
  const value =  document.getElementById(id);
  return value;
}

document.getElementById("todo-text").addEventListener("",function(){
    console.log('chamok barmon')
})

let todoControl =()=>{
  const todos = JSON.parse(localStorage.getItem("TODOS"))
  const inputTodo = todoId('todo-text').value;
  const id = Math.random().toString(36).slice(2);
 if(!todos){
    const todolist = [
        {
           id,
           title : inputTodo,
           completed :false,
       
        }
         ]
         
         localStorage.setItem("TODOS",JSON.stringify(todolist))
         
 }
 else{
    const todolist = [
      ...todos,
        {
           id,
           title : inputTodo,
           completed :false
       
        },
         ]
         
         localStorage.setItem("TODOS",JSON.stringify(todolist))
         
 }
 renderItem()

 
}

const renderItem =()=>{
    const ui = todoId('todo-list');
    ui.innerHTML="";
    const todo = JSON.parse(localStorage.getItem("TODOS"))
    
    if(todo){
        todo.forEach((todoItem) => {
            console.log(todoItem)
            const li =document.createElement('li')
            
            li.classList.add("py-2","flex","justify-between")
          
            li.innerHTML = `<p>${todoItem.title}</p> 
            <button onclick="handelDelete('${todoItem.id}')" class="bg-red-400 px-2 py-1 rounded-md">Delete</button>
            `
    
        
            ui.appendChild(li)
            
         });
        
    }
    else {
        const li = document.createElement("li");
        li.classList.add("py-2");
    
        li.innerText = "No todo found";
    
        ul.appendChild(li);
      }
    
    const textTodo = todoId('todo-text')
    textTodo.value = "";
 
}
renderItem()

const removeItem = ()=>{
   localStorage.removeItem("TODOS")
   renderItem()
}

const handelDelete = (id)=>{
   console.log(id)

const tod = JSON.parse(localStorage.getItem("TODOS"))
 
const remainingTodo = tod.filter((item)=>item.id != id)
console.log(remainingTodo)
if(remainingTodo.length){
    localStorage.setItem("TODOS",JSON.stringify(remainingTodo))
}
else{
    localStorage.removeItem("TODOS")
}
renderItem()
}
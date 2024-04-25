let inputs = document.getElementById("input_box");
let btn = document.getElementById("add_btn");
let list = document.getElementById("list")
btn.addEventListener('click',()=>{
    if(inputs.value == ""){
        alert("please enter something")
    }
    else{
        
        let task = document.createElement('li');
        
        task.innerHTML = `<p class="task_input id="edittext">${inputs.value}</p> <i class="fa-solid fa-check"></i>  <i class="fa-solid fa-pen-to-square edit"></i> <i class="fa-regular fa-trash-can delete_task"></i>`;
        list.appendChild(task);
       
      }
    inputs.value = ""
})

list.addEventListener('click',(e)=>{
   
    if(e.target.classList.contains('delete_task')){
          e.target.parentElement.remove();
    }
    else if(e.target.classList.contains('fa-check')){
        e.target.parentElement.querySelector('.task_input').style.textDecoration = "line-through";
    }
 else if (e.target.classList.contains('edit')) {
    let n=prompt("Enter value to b eddited")
     e.target.parentElement.querySelector('.task_input').innerText = n
    
}
  
})






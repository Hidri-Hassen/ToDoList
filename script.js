
let addBtn=document.querySelector('.add')
let newList=document.querySelector('.list')
let completeBtn=document.querySelector('.complete')
let undoBtn=document.querySelector('.undo')
let deleteBtn=document.querySelector('.delete')
let listInput=document.querySelector('.toDoList')
let divTask=document.querySelector('.listTask')
let divUndo=document.querySelector('.undoShow')
let divList=document.querySelector('.container')

//Add Function


addBtn.addEventListener('click', ()=>{
   let list = document.createElement("li");
//Button Complete
   let btncomplete=document.createElement("button")
   btncomplete.innerText= "Complete"
   btncomplete.setAttribute("class", "complete")


   btncomplete.addEventListener('click', ()=>{
      btncomplete.style.display="none"
      btnundo.style.display="block"
 btncomplete.parentElement.lastChild.className += " line-through"   
   })
   
   list.appendChild(btncomplete)
   
//Button Undo
   let btnundo=document.createElement("button")
   btnundo.innerText= "Undo"
   btnundo.setAttribute("class", "undo")

   btnundo.addEventListener('click', ()=>{
   btnundo.style.display="none"
   btncomplete.style.display="block"
   btnundo.parentElement.lastChild.className += "not-line-through"


   })
   list.appendChild(btnundo)

//Button Delete
   let btndelete=document.createElement("button")
   btndelete.innerText= "delete"
   btndelete.setAttribute("class", "delete")
   btndelete.addEventListener('click',()=>{
   btndelete.parentElement.remove()
   })
   list.appendChild(btndelete)
   

   //To Do Liste
   let inputList=document.createElement("p")
   inputList.innerText= ""
   inputList.setAttribute("class", "toDoList")
   list.appendChild(inputList)
  inputList.innerText= document.querySelector('.list').value
   
   divList.appendChild(list)
   newList.value=""



})






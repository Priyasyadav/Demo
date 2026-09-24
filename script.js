//Select DOM Elements

const input = document.getElementById('todo-input');
const Addbtn = document.getElementById('todo-btn');
const list = document.getElementById('todo-list');

function AddTask(){
    if(input.value===''){
        alert("You must write something");
    }else{
        let li = document.createElement("li")
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        // list.appendChild(li);
        
    }
    input.value="";
    SaveData();// data Enter kiye rahoge refrence hone ke bad bi show hoga
    
}

list.addEventListener("click",function(e){//list pr click hoga tagName -->value h toh check kro  fir check.png lagega or through line
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("check");
        SaveData(); //check rahega reference hone ke bad bi
    
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();// list pe tag name Span --> value pr span hai toh remove kro 
      SaveData();//data show hoga delete krne ke bad ap referece krte ho toh delete kiya hua data show hoga 
    }
},false );

function SaveData(){
    localStorage.setItem("data",list.innerHTML);// same hai ye dono
}
function ShowTask(){
    list.innerHTML = localStorage.getItem('data')||"";
}
ShowTask();//sab data list me hota h show krta h
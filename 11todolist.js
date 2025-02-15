let todolist=[{
}];

rendertodo();

function rendertodo(){
    let todolistHTML='';

    for(let i=0;i<todolist.length;i++){
        let todoObject=todolist[i];

        let name=todoObject.name;
        let dueDate=todoObject.dueDate;

        let html=`
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
        todolist.splice(${i},1);
        rendertodo();
        " class="delbutton">Delete</button>
        
        `;

        todolistHTML+=html;
    }
    document.querySelector('.jsdiv').innerHTML=todolistHTML;
}




function clickenter(event){
    if(event.key==='Enter'){
        addtodo();
    }
}

function addtodo(){
    let enterele=document.querySelector('.jsinput');
    let name=enterele.value;

    let dateele=document.querySelector('.jsdate');
    let dueDate=dateele.value;

    todolist.push({name:name,
        dueDate: dueDate});
    
    enterele.value='';
    
    rendertodo();
}


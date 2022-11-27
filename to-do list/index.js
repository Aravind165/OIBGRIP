var del = document.querySelector('#todo-list ul');
var comp=document.querySelector('#todo-list1 ul');
comp.addEventListener('click',function(e){
    if(e.target.className=="delete"){
        const em=e.target.parentElement;
        comp.removeChild(em);
    }
})
del.addEventListener("click",function(ee){
 if(ee.target.className=="delete"){
   const ele=ee.target.parentElement;
   
   del.removeChild(ele);
}

if(ee.target.className=="edit"){
    const ele=ee.target.parentElement;
    var mm = ele.childNodes;
    var x = mm[0].textContent.toLowerCase();
    var namee="";
    var dess="";
        y=x.charAt(0);
        if(y.match(/[a-z]/i)){
            namee=mm[0];
            dess=mm[1];
        }
        else{
            namee=mm[1];
            dess=mm[3];
        }

        namee.contentEditable = true;
        dess.contentEditable=true;
        namee.style.backgroundColor = "#FFF";
        dess.style.backgroundColor = "#FFF";

}
if(ee.target.className=="save"){
    const ele=ee.target.parentElement;
    var mm = ele.childNodes;
    var x = mm[0].textContent.toLowerCase();
    var namee="";
    var dess="";
        y=x.charAt(0);
        if(y.match(/[a-z]/i)){
            namee=mm[0];
            dess=mm[1];
        }
        else{
            namee=mm[1];
            dess=mm[3];
        }

        namee.contentEditable = false;
        dess.contentEditable=false;
        namee.style.backgroundColor = "#FFE4C4";
        dess.style.backgroundColor = "#FFE4C4";
}

if(ee.target.className=="complete"){

        const ele=ee.target.parentElement;

        var mm = ele.childNodes;

        const li= document.createElement('li');
        li.classList.add('task');
        const name= document.createElement('span');
        const dess= document.createElement('span');
        const edit= document.createElement('span');
        const complete= document.createElement('span');
        const deletebtn= document.createElement('span');
        const save= document.createElement('span');

        li.appendChild(name);
        li.appendChild(dess);
        li.appendChild(edit);
        li.appendChild(complete);
        li.appendChild(deletebtn);
        li.appendChild(save);


        var x = mm[0].textContent.toLowerCase();
        y=x.charAt(0);
        if(y.match(/[a-z]/i)){
            name.textContent=mm[0].textContent;
            dess.textContent=mm[1].textContent;
        }
        else{
            name.textContent=mm[1].textContent;
            dess.textContent=mm[3].textContent;
        }

        
        edit.textContent='edit';
        complete.textContent='Finished';
        deletebtn.textContent='delete';
        save.textContent='save';

        name.classList.add('name');
        dess.classList.add('dess');
        edit.classList.add('edit');
        complete.classList.add('complete');
        deletebtn.classList.add('delete');
        save.classList.add('save');

        comp.append(li);

        del.removeChild(ele);

        
    }
});

var Add= document.forms['input-info'];
 
Add.addEventListener('submit',function(e){
    e.preventDefault();
    var names = Add.querySelector('.names').value;
    var des = Add.querySelector('.des').value;
    

    if(names && des){
        
    }
    else{
        alert('Enter the valid Information');
        return;
    }
    
    const li= document.createElement('li');
    li.classList.add('task');
    const name= document.createElement('span');
    const dess= document.createElement('span');
    const edit= document.createElement('span');
    const complete= document.createElement('span');
    const deletebtn= document.createElement('span');
    const save= document.createElement('span');

    li.appendChild(name);
    li.appendChild(dess);
    li.appendChild(edit);
    li.appendChild(complete);
    li.appendChild(deletebtn);
    li.appendChild(save);

    name.textContent=names;
    dess.textContent=des;
    edit.textContent='edit';
    complete.textContent='complete';
    deletebtn.textContent='delete';
    save.textContent='save';

    name.classList.add('name');
    dess.classList.add('dess');
    edit.classList.add('edit');
    complete.classList.add('complete');
    deletebtn.classList.add('delete');
    save.classList.add('save');

    del.append(li);
 
})






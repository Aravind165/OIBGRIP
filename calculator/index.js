let string = "";
let buttons = document.querySelectorAll('.calculator div');
var ans=document.querySelector('#result');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      try{
        string = eval(string);
        ans.value = string;
      }
      catch(e){
        alert('Please enter valid expresion ');
        return;
      }
      
    }
    else if(e.target.innerHTML == 'CLEAR'){
      string = ""
    ans.value = string;
    }
    else if(e.target.innerHTML == 'DEL'){
      ans.value = ans.value.slice(0,-1);
    }
    else{ 
    console.log(e.target);
    string = string + e.target.innerHTML;
ans.value = string;
    }
    })
})
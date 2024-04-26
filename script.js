let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ol = document.querySelector('ol');
let div = document.getElementById('mini-container');


btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(inp.value===""){
alert('hato');
    }else{
        let li = document.createElement('li');
 
        // ul.textContent=ul
        li.textContent=inp.value;
        const check = document.createElement('input');
    check.type = 'checkbox';
    check.onchange = () => toggleTodoStatus(li, check);
    li.appendChild(check);
ol.appendChild(li);
let span = document.createElement('span');
span.innerHTML= '\u00d7';
li.appendChild(span);

    }
    inp.value='';
});

ol.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
});

function toggleTodoStatus(li, check) {
    if (check.checked) {
        li.style.textDecoration = 'line-through';
    } else {
        li.style.textDecoration = 'none';
    }
}



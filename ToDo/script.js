const inp = document.getElementsByTagName('input');
const button = document.getElementsByClassName('btn-submit');
function addtask(){
    if(document.querySelector('input').value == "")
    {
        alert("enter some task !!!!!");
    }
    else{
    document.querySelector('.task').innerHTML += `
    
        <div class="new-task">
            <div class="text-task">
            
            ${document.querySelector('input').value}
            
            </div>

            <button class="btn-delete"  >
                <i class="fa fa-trash-o" style="font-size:36px"></i>
            </button>
            <button class="btn-tick" >
                <i class="fa fa-check" style="font-size:36px"></i>
            </button>
    </div>
    `;
    }

    const dels = document.querySelectorAll('.btn-delete')
    var sz = dels.length;
    for(let i=0;i<sz;i++)
    {
        dels[i].addEventListener('click',()=>{
            dels[i].parentNode.remove();
        });
    }

    const grn = document.querySelectorAll('.btn-tick');
    const tsk = document.querySelectorAll('.text-task');
    var tk = tsk.length;
    var st = grn.length;
    for(let i=0;i<st;i++)
    {
        grn[i].addEventListener('click',()=>{
        tsk[i].style = "background-color: green; text-decoration-line: line-through;"; 
    });
    }


}




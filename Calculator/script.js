const btns = document.getElementsByClassName('btn')
const inp = document.querySelector('input')
const bttn = document.querySelectorAll('.btn')
let str = "";
console.log(inp);
bttn.forEach((e) => {
    
    e.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '=')
        {
            str = eval(str);
           
            inp.value = str;
        }
        else if(e.target.innerHTML == "del")
        {
            str = str.substring(0,str.length-1);
            inp.value = str;
        }
        else if(e.target.innerHTML == "clear")
        {
            str = "";
            inp.value = str;
        }
        else{
        str = str+ e.target.innerHTML;
        console.log(e.target.innerHTML);
        inp.value = str;
        }
    });
});

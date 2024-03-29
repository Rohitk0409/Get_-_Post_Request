const btns=document.querySelectorAll("button");
for(let btn of btns){
    btn.addEventListener("click",()=>{
        alert("Are you sure!");
    });
}
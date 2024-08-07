// const backColor=document.getElementById("color-change")
const btn=document.querySelector("button")

btn.addEventListener("click",function(){
    
    colors()   
});


function colors(){
    let color1=(Math.floor(Math.random()*256));
    let color2=(Math.floor(Math.random()*256));
    let color3=(Math.floor(Math.random()*256));

    let newcolor=(`rgb(${color1}, ${color2}, ${color3})`)
    document.body.style.backgroundColor=newcolor
    // console.log(newcolor)
}


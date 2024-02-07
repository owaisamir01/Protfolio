
document.querySelector('.cross').style.display='none';
document.querySelector('.ham');
document.querySelector('.hamburger').addEventListener("click",()=>{
    console.log('click')
    let slidebar=document.querySelector('.slidebar');
    slidebar.classList.toggle("slidebargo");
    if( document.querySelector('.slidebar').classList.contains('slidebargo')){
    
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.cross').style.display='none';  
}
    else{
        document.querySelector('.cross').style.display='inline';
        document.querySelector('.ham').style.display='none';
    }
})

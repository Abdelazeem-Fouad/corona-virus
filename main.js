const upBtn = document.getElementById("upBtn");
window.onscroll = function(){
  if(document.documentElement.scrollTop > 800){
      upBtn.style.display = "block";
  }   else{
    upBtn.style.display = "none";
  }
}
upBtn.addEventListener('click', function(){
    window.scroll({
        top :0,
        left :0,
        behavior : 'smooth'
    })
})
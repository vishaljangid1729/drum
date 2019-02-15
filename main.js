window.addEventListener('keypress',function(event){
    const a= document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key=document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(a===null){
        return;
    }
     a.currentTime=0;
     a.play();
    key.classList.add('playlist');
    
    
});
const keys=document.querySelectorAll('.key');
function removetranstion(e){
    if(e.propertyName!=='transform'){
        return;
    }
   
        this.classList.remove('playlist');
    
}

keys.forEach(key=> key.addEventListener('transitionend',removetranstion));


heading=document.getElementsByClassName('heading');
for( let i=0; i<heading.length; i++){
    heading[i].style.cssText+="text-align:center;background:black;padding:5px 10px;margin:5px;color:white;"
}
var sticky=document.getElementById('sticky');
var child=document.getElementsByTagName('a')
window.addEventListener('scroll',()=>{
    if(window.pageYOffset>200){
        sticky.classList.add('document')
    }
    else if(window.pageYOffset<200){
        sticky.classList.remove('document'); 
    }

})
var span=document.getElementById('fone');
window.addEventListener('wheel',(event)=>{
    if(event.deltaY>0){
       span.classList.add('span1')
       span.style.display="inline-block";
    }
    else if(event.deltaY<0){
        span.classList.remove('span1');
        span.style.display="none";
    }
})
var form=document.getElementById('reg');

window.addEventListener('wheel',(event)=>{
    if(event.deltaY>0){
        form.classList.add('RegisteraionForm');
    }
    else if(event.deltaY<0){
        form.classList.remove('RegisteraionForm');
    }
})
var name1=document.getElementById('FName');

name1.addEventListener('focus',()=>{
    name1.style.cssText+="background:cream;color:black;"
})
    name1.addEventListener('blur',()=>{
        name1.style.cssText+="background:white;border:none;color:black;"
    })
var home=document.getElementById('load');
window.addEventListener('scroll',function (){
    if(window.pageYOffset<1000){
            document.bgColor="lightblue"   
    }
    else if (window.pageYOffset>2000){
        document.bgColor="lightblue"
    }
  
   else if(window.pageYOffset>1600){
        document.bgColor="white"
        }  
    })
 function a2(typetext){
    var number=/^[0-9]+$/;
    if(typetext.value.match(number)){
        alert('Correct Filling')
        return true;
    }
    else{
        alert('Please Enter The Number');
        return false;
    }
 }

 





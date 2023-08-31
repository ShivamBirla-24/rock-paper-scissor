
const rulebutton=document.getElementById('rules-btn');
const ruleSection=document.querySelector('.ruleSection');
const crossbutton=document.getElementById('closebutton');

var count=0;

rulebutton.addEventListener('click',()=>{
    if(count===0){
        setTimeout(()=>{
            ruleSection.style.display="block";
            count=1;
        },300)
    }
})

crossbutton.addEventListener('click',()=>{
    if(count==1){
        ruleSection.style.display="none";
        count=0;
    }
})
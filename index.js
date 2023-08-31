const rulebutton=document.getElementById('rules-btn');
const ruleSection=document.querySelector('.ruleSection');
const crossbutton=document.getElementById('closebutton');
const button=document.querySelectorAll('.choose_btn');
const playagain=document.getElementById("playagain-btn");
const displayUserScore=document.querySelector("#userScore h1");
const displayCompScore=document.querySelector("#compScore h1");
let count = 0;
let userPick="";
let compPick="";
let array=['paper','scissor','stone'];
if(!window.localStorage.getItem("user")){
    window.localStorage.setItem("user","0");
}
if(!window.localStorage.getItem("comp")){
    window.localStorage.setItem("comp","0");
}

displayCompScore.innerHTML=window.localStorage.getItem("comp");
displayUserScore.innerHTML=window.localStorage.getItem("user");

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

playagain.addEventListener('click',()=>{
    let playarea=document.getElementById('playArea');
    playarea.style.display="flex";
    let resultarea=document.getElementById("resultArea");
    resultarea.style.display="none";
    const nextbutton=document.getElementById('next-btn');
    nextbutton.style.display="none";
})

button.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        //hide the playarea on click
        userPick=item.id;
        compPick=compChoose();
        let playarea=document.querySelector("#playArea");
        playarea.style.display="none";
        //showing result area
        let resultarea=document.querySelector("#resultArea")
        resultarea.style.display="flex";
        //displaying what you choosed 
        let youChoose=document.getElementById('us');
        if(userPick=='paper'){
            youChoose.innerHTML= "<img src=\"images/paper.png \" alt=\"paper\"></img>";
            youChoose.style.borderColor="#FFA943";
        }
        else if(userPick=='stone'){
            youChoose.innerHTML= "<img src=\"images/stone.png \" alt=\"stone\"></img>";
            youChoose.style.borderColor="#0074B6";
        }
        else {
            youChoose.innerHTML= "<img src=\"images/scissor.png \" alt=\"scissor\"></img>";
            youChoose.style.borderColor="#BD00FF";
        }  
        //displaying what pc choosed
        let pcChoose=document.getElementById('pc');
        if(compPick=='paper'){
            pcChoose.innerHTML= "<img src=\"images/paper.png \" alt=\"paper\"></img>";
            pcChoose.style.borderColor="#FFA943";
        }
        else if(compPick=='stone'){
            pcChoose.innerHTML= "<img src=\"images/stone.png \" alt=\"stone\"></img>";
            pcChoose.style.borderColor="#0074B6";
        }
        else {
            pcChoose.innerHTML= "<img src=\"images/scissor.png \" alt=\"scissor\"></img>";
            pcChoose.style.borderColor="#BD00FF";
        }  
        result(userPick,compPick);   
    })
})

function compChoose(){
    let x = Math.floor(Math.random()*3);
    return array[x];
}

function result(userPick,compPick){
    const firstline=document.getElementById('firstline')
    const secondline=document.getElementById('secondline');
    const nextbutton=document.getElementById('next-btn');
    const WinnerShadow=document.getElementById('us');
    const LooserShadow=document.getElementById('pc');
    if(userPick===compPick){
        firstline.textContent="TIE UP";
        secondline.textContent="";
        WinnerShadow.style.boxShadow="none";
        LooserShadow.style.boxShadow="none";
    }
    
    else if(userPick=='stone'){
        if(compPick=='paper'){
            firstline.textContent="YOU LOST";
            secondline.textContent="AGAINST PC";
            WinnerShadow.style.boxShadow="none";
            LooserShadow.style.boxShadow="0 0 0 40px #289B26 , 0 0 0 80px #32A72E , 0 0 0 120px #66B349";
            let x=""+((+(window.localStorage.getItem("comp")))+1);
            window.localStorage.setItem("comp",x);
            displayCompScore.innerHTML=window.localStorage.getItem("comp");
        }else{
            firstline.textContent="YOU WIN";
            secondline.textContent="AGAINST PC";
            nextbutton.style.display="inline";
            LooserShadow.style.boxShadow="none";
            WinnerShadow.style.boxShadow="0 0 0 40px #289B26 , 0 0 0 80px #32A72E , 0 0 0 120px #66B349";
            let x=""+((+(window.localStorage.getItem("user")))+1);
            window.localStorage.setItem("user",x);
            displayUserScore.innerHTML=window.localStorage.getItem("user");
        }
    }

    else if(userPick=='paper'){
        if(compPick=='scissor'){
            firstline.textContent="YOU LOST";
            secondline.textContent="AGAINST PC";
            WinnerShadow.style.boxShadow="none";
            LooserShadow.style.boxShadow="0 0 0 40px #289B26 , 0 0 0 80px #32A72E , 0 0 0 120px #66B349";
            let x=""+((+(window.localStorage.getItem("comp")))+1);
            window.localStorage.setItem("comp",x);
            displayCompScore.innerHTML=window.localStorage.getItem("comp");
        }else{
            firstline.textContent="YOU WIN";
            secondline.textContent="AGAINST PC";
            nextbutton.style.display="inline";
            LooserShadow.style.boxShadow="none";
            WinnerShadow.style.boxShadow="0 0 0 40px #289B26 , 0 0 0 80px #32A72E , 0 0 0 120px #66B349";
            let x=""+((+(window.localStorage.getItem("user")))+1);
            window.localStorage.setItem("user",x);
            displayUserScore.innerHTML=window.localStorage.getItem("user");
        }
    }
    else if(userPick=='scissor'){
        if(compPick=='stone'){
            firstline.textContent="YOU LOST";
            secondline.textContent="AGAINST PC";
            WinnerShadow.style.boxShadow="none";
            LooserShadow.style.boxShadow="0 0 0 40px #289B26 , 0 0 0 80px #32A72E , 0 0 0 120px #66B349";
            let x=""+((+(window.localStorage.getItem("comp")))+1);
            window.localStorage.setItem("comp",x);
            displayCompScore.innerHTML=window.localStorage.getItem("comp");
        }else{
            firstline.textContent="YOU WIN";
            secondline.textContent="AGAINST PC";
            nextbutton.style.display="inline";
            LooserShadow.style.boxShadow="none";
            WinnerShadow.style.boxShadow="0 0 0 40px #289B26 , 0 0 0 80px #32A72E , 0 0 0 120px #66B349";
            let x=""+((+(window.localStorage.getItem("user")))+1);
            window.localStorage.setItem("user",x);
            displayUserScore.innerHTML=window.localStorage.getItem("user");
        }
    }
}





// Angle page code

const angle1= document.getElementById("angle1");

const angle2= document.getElementById("angle2");

const angle3= document.getElementById("angle3");

const asubmit= document.getElementById("asubmit");

const aoutput= document.getElementById("aoutput");

asubmit.addEventListener("click",(e)=>{
    e.preventDefault();
    
    if(angle1.value&&angle2.value&&angle3.value){
    if(Number(angle1.value)+ Number(angle2.value)+Number(angle3.value)==180)
    {
        aoutput.innerText="Yuhu! these angles can make a triangle";
        console.log("success naa")
    }
    else{
        aoutput.innerText="Oops! these angles cannot make a triangle"
    }
}
    
})

// Hypotenuse page code

// $('testForm').validator('update');




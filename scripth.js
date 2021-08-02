const hinput1= document.getElementById("hinput1");
const hinput2= document.getElementById("hinput2");

const hsubmit= document.getElementById("hsubmit");
const houtput= document.getElementById("houtput");

hsubmit.addEventListener("click",(e)=>{
    e.preventDefault();
    if(hinput1.value>0.001&&hinput2.value>0.001)
    {
        let a = Number(hinput1.value);
        let b= Number(hinput2.value);

        let output= Math.sqrt(Number(a*a+ b*b));
        houtput.innerText= output;
        console.log(output);

    }
})
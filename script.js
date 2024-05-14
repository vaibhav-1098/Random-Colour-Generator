const changeBtn=document.getElementById("changeBtn");
const display=document.querySelector(".display");
const copyBtn=document.getElementById("copyBtn");

// function  
function changeColour( ){
    let R=Math.floor(Math.random( )*256);
    let G=Math.floor(Math.random( )*256);
    let B=Math.floor(Math.random( )*256);

    document.body.style.backgroundColor=`rgb(${R}, ${G}, ${B})`;

    display.innerHTML=`rgb(${R}, ${G}, ${B})`;

}

// event listener 
changeBtn.addEventListener('click',changeColour);


// COPY 
copyBtn.addEventListener('click',( )=>{
    navigator.clipboard.writeText(display.innerHTML);

    copyBtn.innerHTML="Copied!"

    setTimeout(( )=>{
        copyBtn.innerHTML="Copy 🖨";
    },500)

});

console.log("SCRIPT START");

let timeout;

const searchinput = document.getElementById("searchInput");

searchinput.addEventListener("input",(event)=>{
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
        console.log("INPUT WORD: ",event.target.value)

    },2000);
})


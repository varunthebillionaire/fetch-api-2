const wrd_btn = document.getElementById("wrd_btn");
const wrd_results = document.getElementById("wrd_result");
//let input_box=document.getElementById("userinput")

wrd_btn.addEventListener('click',getword);
async function getword() {
    let userinput = document.getElementById('userinput').value;
    console.log(userinput);
    await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userinput}`)
    .then((response) => response.json())
    .then((data)=>{
        console.log(data[0].meanings);
        wrd_results.innerHTML = `${data[0].word}   Meaning:  ${data[0].meanings[2].definitions[0].definition}` ;
        
        
    })
}

 
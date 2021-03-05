import fetch from "node-fetch";

function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    analyzeText(formText);
}

function analyzeText(formText){
    fetch('/userData',{
        method:'POST',
        credentials:'same-origin',
        mode:'cors',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({input:formText})
    })
    .then(res=>res.json())
    .then(function(res){
        let element=document.getElementById('results');
        Client.updateUI(element,res);
    })
}

function updateUI(element,content){
    if(content.confidence==undefined){
        element.innerHTML='This text cannot be analyzed'
    }
    else{
        element.innerHTML='Confidence:${content.confidence}'
    }
}


export {updateUI}
export {handleSubmit}
export {analyzeText}

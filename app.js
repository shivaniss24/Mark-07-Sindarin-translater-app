var input=document.querySelector("#input-ctn");
var btn=document.querySelector("#btn-translate");
var output=document.querySelector("#output-ctn");
var serverURL="https://api.funtranslations.com/translate/sindarin.json"

function getTranslation(text)
{
    return serverURL +"? "+"text= "+text;
}

function errorHandler(error)
{
  console.log("error occured",error);
  alert("something went wrong with server!.Try again")  
}
function convertText()
{
    var inputtext=input.value;
    if(inputtext==""){
        alert("Please enter some text");
        return;
    }

    // const url=`${serverURL}?text=${inputtext}`;
    //taking input value
    
    //calling server for processing 
    fetch(getTranslation(inputtext))
    .then(response=>response.json())
    .then(json=>{
        var outputText=json.contents.translated;
        output.innerText=outputText;
    })
    .catch(errorHandler)
};
btn.addEventListener("click",convertText);


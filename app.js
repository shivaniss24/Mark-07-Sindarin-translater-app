var txtInput=document.querySelector("#input");
var btntranslate=document.querySelector("#btn-translate");
var outputtxt=document.querySelector("#output");
var serrverURL="https://api.funtranslations.com/translate/sindarin.json";

function getTranslation(text)
{
    return serrverURL +"? "+"text= "+text;
}

function errorHandler(error)
{
         
}



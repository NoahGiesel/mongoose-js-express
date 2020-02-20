

const form = document.querySelector("form");
const API_URL = "http://localhost:5500/labelsMain"




form.addEventListener("submit" ,   event => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name")
    const content = formData.get("content")


    const informations = {
        name,
        content
    }

    //mando al URL con post
 fetch(API_URL, {
            method:'POST',
            mode: 'cors',
            body: JSON.stringify(informations),
            headers:{
            'Access-Control-Allow-Origin':'*',
            "content-type":"application/json"
        }
        }) 
     


 })
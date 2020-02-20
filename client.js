

const form = document.querySelector("form");
const API_URL = "http://localhost:3000/labelsMain"




form.addEventListener("submit" ,    event => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name")
    const content = formData.get("content")
 
    const informations = {
        name,
        content
    }

     

        //mando al URL con post
        fetch(API_URL,    {
            method:'POST', 
            body: JSON.stringify(informations),
            headers: { 
                'content-type': 'application/json'
              },
        }) 
        .then(  response => response.json())
        .then(createLabel => {
            console.log(createLabel)
        })
     


 })
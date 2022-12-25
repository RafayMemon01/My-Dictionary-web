// searchinput
// Searchbtn


const dictionary = (word)=>{
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'b41ef6a7c7msh2afbf371a91d5cdp14bd3bjsn3c54f21d88e1',
          'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
      };
fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' +word, options)
.then(response => response.json())
.then(response =>


     {
        console.log(response)
        wordheading.innerHTML = "Meaning of  "+ response.word;
        definition.innerHTML = response.definition.replace("2.","<br>2.").replace("3.","<br>3.").replace("4.","<br>4.")

    
    
    })
.catch(err => console.error(err));
}


Searchbtn.addEventListener("click", (e)=>{

e.preventDefault()
dictionary(searchinput.value)

})
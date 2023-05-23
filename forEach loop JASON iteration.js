let player = {
    
    'name':'dhoni',
    'sport':'cricket',
    'age':42,
    'position':['batting','captainze','wicket keeping']

}
 // iterating inside JASON using forEach loop  

Object.entries(player).forEach(([key, value]) => {  
    console.log(`${key}: ${value}`)
  })


////// iterate forEach inside given Api

function printData() {
        let countries = JSON.parse(this.responseText);
        //console.log(JSON.parse(this.responseText))
        countries.forEach((c) => console.log(c.subregion))
          
        }
        
        var request = new XMLHttpRequest();
        request.addEventListener("load", printData);
        request.open("GET",'https://restcountries.com/v3.1/all');
        request.send(); 
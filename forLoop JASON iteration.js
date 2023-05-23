let player = {
    
    'name':'dhoni',
    'sport':'cricket',
    'age':42,
    'position':['batting','captainze','wicket keeping']

}
 // iterating inside JASON using for in loop  
for(i in player){
    console.log(i +' : '+player[i]);
}

/// for in loop inside an given API

function printData() {
    let countries = JSON.parse(this.responseText);
    //console.log(JSON.parse(this.responseText))
    countries.forEach((c) => console.log(c.region))
      for(let i in countries){
        console.log(countries[i].region);
      }
    }
    
    var request = new XMLHttpRequest();
    request.addEventListener("load", printData);
    request.open("GET",'https://restcountries.com/v3.1/all');
    request.send(); 
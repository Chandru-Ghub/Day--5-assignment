///..............................................

let player = {
    
    'name':'dhoni',
    'sport':'cricket',
    'age':42,
    'position':['batting','captainze','wicket keeping']

}
    let key = (Object.keys(player));
    let value = (Object.values(player));

for(i=0;i<key.length;i++){
    console.log(`${key[i]} : ${value[i]}`);
}


//Iterating JASON using normal for loop

function printData() {
    let countries = JSON.parse(this.responseText);
    //console.log(JSON.parse(this.responseText))
    //countries.forEach((c) => console.log(c.currencies))
      for(i=0;i<countries.length;i++){
        console.log(countries[i].currencies);
      }
    }
    
    var request = new XMLHttpRequest();
    request.addEventListener("load", printData);
    request.open("GET",'https://restcountries.com/v3.1/all');
    request.send(); 



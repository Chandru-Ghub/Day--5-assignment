let player = {
    
    'name':'dhoni',
    'sport':'cricket',
    'age':42,
    'position':['batting','captainze','wicket keeping']

}
let k = Object.entries(player);
//console.log(k);

for(let [key, value] of k){
    console.log(key +': '+ value);
}
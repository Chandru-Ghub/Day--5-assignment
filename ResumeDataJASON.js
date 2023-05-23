let myResume = {
   
    'personal info':{
        'name':'chandru M',
        'D.O.B':'25/09/1999',
        'age':23
    },
        
    'skill':[
        'teamplayer',
        'activelistener',
        'hardworking and determinant'
 ],
     'education':{
        'Qualification':'Bachelore of engineering',
        'department':'mechanical enginerring',
         'college':'Coimbatore institute of technology',
         'Percentage':77,
         'year of passing':2022,

         'secondary degree':{
            'qualification':'Diploma in mechanical engineering',
            'college':'nachimuthu polytechnic college',
            'percentage':91,
            'year of passing':2019

         }
        },
        
    'project':{

        'design':['automatic incence burner using using the CATIA V5','design of security brief case along with finger print access '],
        'development':'design and development of aircraft cockpit lighting control panels',
    },
    'experiance':{
        'role':'design engineer',
        'period of experiance':'10 months'
    },
    'programmingskills':['html', 'css', 'javascript', 'python'],
    
    'co-curriculam':{
        'sports':'cricket',
        'hobbies':'listening to music',
        'entertainment':'treeking'
    }
            
       
     

}

//console.log(player);


for(i in myResume){
    console.log(myResume);
}

///To get all countries flag
// function printData() {
//     let countries = JSON.parse(this.responseText);
//     //console.log(JSON.parse(this.responseText))
//     countries.forEach((c) => console.log(c.region))
      
//     }
    
//     var request = new XMLHttpRequest();
//     request.addEventListener("load", printData);
//     request.open("GET",'https://restcountries.com/v3.1/all');
//     request.send(); 
// console.log('hi')
const casualArray = [10,5,9,45,87,2,4,36,55]

console.log(casualArray)



    
    const nuovoArray =  casualArray.filter(function(element,index) {
        if(index >= 2 && index <= 6){
           return element
        }

    });

console.log(nuovoArray)
const casualArray = [10,5,9,45,87,2,4,36,55]

console.log(casualArray)


function subList(array, startIndex, endIndex){
    const result = []
    
    array.filter(function(element,index) {
        if(index >= startIndex && index <= endIndex){
            result.push(element);
        }

    });
    /* index >= startIndex && index <= endIndex); */
  return result
}

const nuovoArray = subList(casualArray, 2, 6)
console.log(nuovoArray)
//remove Duplicants in Array
function removeDuplicants(array){
    const uniqueArray=[]
    for(var i of array){
        if(!uniqueArray.includes(i)){
            uniqueArray.push(i)
        }
    }
    return uniqueArray
}
console.log(removeDuplicants[10,20,30,20,40,50])
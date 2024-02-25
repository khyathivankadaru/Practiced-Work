//remove Duplicants in Array
function removeDuplicants(arr)
{   
    const uniqueArray=[]
    for(var i of arr)
    {
        if(!uniqueArray.includes(i))
        {
            uniqueArray.push(i)
        }
    }
    return uniqueArray
}
console.log(removeDuplicants([10,20,30,20,40,50]))
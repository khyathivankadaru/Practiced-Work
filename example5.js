function findMaxElement(arr)
{
    
    let max=arr[0];
    for(var i=1;i<arr.length;i++);
    {
        if(arr[i]>max)
        {
            max = arr[i];
        }
    }
    return max;
}
A=findMaxElement([5,2,8,10,1]);
console.log(A)


// function caluculateAverage(arr){
//     var sum =0
//     for(var i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     let avg=sum/arr.length
//     return avg
// }
// A=caluculateAverage([1,2,3]);
// console.log(A)
// function reverseString(str)
// {
//     let rev="";
//     for(var i=str.length-1;i>=0;i--);
//     {
//         rev+=str[i];
//     };
//     return rev;
// }
// y=reverseString("Programing");
// console.log(y)
//FibonacciSum.js
function fibSum(n){
    let fibSum=0;
    let a=0,b=1;
    var temp=0
    for(i=0;i<=n;i++){
        fibSum+=a;
        let temp=a;
        a=b;
        b=temp+b;
    }
    return fibSum;
}
console.log(fibSum(5))
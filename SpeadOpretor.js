let data = [10,20,30,40]
function Sum(...args){
    {
        let Sum = 0;
        for(let i of args){
            Sum += i;
        }

        console.log(Sum);
    }
}
console.log(...data)
console.log(data)
Sum(...data)
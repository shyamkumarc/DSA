


function arrange(remCapacity,currentValue,index){
debugger;
    if(remCapacity < 0 || index > weights.length-1 ){
        return 0;
    }

    if(remCapacity == 0 ){
        return currentValue;
    }

    let take = arrange(remCapacity-weights[index],currentValue+values[index],index+1);

   let noTake =  arrange(remCapacity,currentValue,index+1);

   return Math.max(take, noTake);
}




let capacity = 5;

let weights = [1,2,4,7];
let values = [1,3,2,8];

console.log("max value:" , arrange(capacity,0,0)) ;
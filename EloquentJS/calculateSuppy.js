function calculateSupply(age, amount){
    const  maxAge = 100;
    let daysUntilEnd = (maxAge - age) * 365;
    let amountConsumed = daysUntilEnd * amount;
    let modulo = amountConsumed % 1;
    if (modulo >= 0.5) {
        amountConsumed += (1 - modulo); 
    } 
    else {
        amountConsumed -= modulo;
    }
        
    console.log(`You will need ${amountConsumed} to last you until the ripe old age of ${maxAge}`);
}
calculateSupply(34, 3.33);
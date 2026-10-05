function addOne(a,b){
    let sum = a + b + 1;
    return sum;
}

function addTwo(a,b){
        let sum = a + b + 2;
    return sum;
}

function add(a,b){
    let sum = addOne(a,b) + addTwo(a,b);
    return sum;
}

add(1,1);
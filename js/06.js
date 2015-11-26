function isPrimeNumber(a) {
    for(var i = 2; i < a; i++) {
        if(a % i === 0) {
            return false;
        }
    }
    return a > 1;
}


//i=2, i<value, i=i+1

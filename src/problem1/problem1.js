var sum_to_n_a = function(n) {
    sum = 0;
    for (i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

var sum_to_n_b = function(n) {
    if (n == 1) {
        return 1;
    }
    else{
    return sum_to_n_b(n - 1) + n;
    }
};

var sum_to_n_c = function(n) {
   return n * (n + 1) / 2;
};

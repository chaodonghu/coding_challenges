var isPalindrome = function(s) {
    if (s === "") {
        return true;
    }

    // 1. Remove non-alphanumeric chars from the string
    const alphanum = s.toLowerCase().replace(/[\W]/g, "");

    let front = 0;
    let back = alphanum.length - 1;

    while (front < back) {
        const frontChar = alphanum[front];
        const backChar = alphanum[back];
        if (frontChar != backChar) {
            return false;
        }
        front++;
        back--;
    }

    return true;
};

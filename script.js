function isPalindrome(input) {
    const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const length = cleanedInput.length;

    for (let i = 0; i < length / 2; i++) {
        if (cleanedInput[i] !== cleanedInput[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function arrayMaxMin(arr) {
    if (arr.length === 0) {
        return [null, null];
    }

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return [min, max];
}


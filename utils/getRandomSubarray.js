function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, min = i - size;
    while (i-- > min) {
        var index = Math.floor((i + 1) * Math.random());
        var temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

export default getRandomSubarray;
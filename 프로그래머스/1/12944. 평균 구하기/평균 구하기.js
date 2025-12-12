function solution(arr) {
    return arr.reduce((acc, index) => acc + index, 0) / arr.length;
}
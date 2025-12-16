function solution(people, limit) {
    // 1. 정렬 (가벼운 → 무거운)
    people.sort((a, b) => a - b);
    
    let left = 0;                    // 가장 가벼운 사람
    let right = people.length - 1;   // 가장 무거운 사람
    let boats = 0;                   // 보트 개수
    
    while (left <= right) {
        // 가장 가벼운 + 가장 무거운
        if (people[left] + people[right] <= limit) {
            left++;   // 둘 다 탑승
        }
        // 무거운 사람은 무조건 탑승
        right--;
        boats++;
    }
    
    return boats;
}
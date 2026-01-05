function solution(clothes) {
    // 조합 수 = (각 종류별 개수 + 1)의 곱 - 1
    const countMap = new Map();
    
    // countMap = { headgear: 2, eyewear: 1 }
    for (let [name, type] of clothes) {
        countMap.set(type, (countMap.get(type) || 0) + 1)
    }
    
    let result = 1;
    
    for (let [name, cnt] of countMap) {
        result *= (cnt + 1)
    }
    
    return result - 1;
}

/*
[
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"]
]

- headgear: yellow_hat / green_turban / 안 씀 → 3가지
- eyewear: blue_sunglasses / 안 씀 → 2가지

(3 * 2) - 1

[
  [ 'crow_mask', 'face' ],
  [ 'blue_sunglasses', 'face' ],
  [ 'smoky_makeup', 'face' ]
]

- face: crow_mask / blue_sunglasses / smoky_makeup / 안 씀 -> 4가지
4 - 1

(각 종류별 개수 + 1)의 곱 - 1
*/
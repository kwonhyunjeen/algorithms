function solution(brown, yellow) {
    /* 
    - 12의 약수, 가로 >= 세로 
    - 전체 크기 = 10 + 2
    - 규칙 찾기: 노란색 = (가로 - 2) * (세로 - 2)
    - 카펫의 최소 높이는 3
    */
    
    const total = brown + yellow;
    
    for (let height = 3; height <= total; height++) {
        // (12/1, 6/2, 4/3, 3/4, 2/6, 1/12)
        if (total % height === 0) {
            const width = total / height;
            if (width >= height) {
                const yellowArea = (width - 2) * (height - 2);
                if (yellowArea === yellow) {
                    return [width, height]
                }
            }
        }
    }
}

function solution(want, number, discount) {
    /*
      원하는 수량과 제품
      wantMap = {banana: 3, apple: 2, rice: 2, pork: 2, pot: 1}
    */
    const wantMap = new Map();
    for (let i = 0; i < want.length; i++) {
        wantMap.set(want[i], number[i])
    }
    
    /* 
      첫 윈도우 세팅 (0~9)
      windowMap = {chicken: 1, apple: 3, banana: 2, rice: 2, pork: 2}
    */
    const windowMap = new Map();
    for (let i = 0; i < 10; i++) {
        const item = discount[i];
        windowMap.set(item, (windowMap.get(item) || 0) + 1)
    }
    
    let count = isMatch(wantMap, windowMap) ? 1 : 0;
    
    /*
      윈도우 슬라이드 (0~9, 1~10, 2~11, 3~12, 4~13)
    */
    for (let i = 10; i < discount.length; i++) {
        const addItem = discount[i];
        windowMap.set(addItem, (windowMap.get(addItem) || 0) + 1);
        
        const removeItem = discount[i - 10];
        windowMap.set(removeItem, windowMap.get(removeItem)  -1)
      
        if (isMatch(wantMap, windowMap)) {
            count++;
        }
    }
    
    return count;
}

function isMatch(wantMap, windowMap) {
    for (let [item, cnt] of wantMap) {
        if (windowMap.get(item) !== cnt) { return false }
    }
    return true;
}



            
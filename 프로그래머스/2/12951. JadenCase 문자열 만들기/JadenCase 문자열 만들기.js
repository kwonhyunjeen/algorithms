function solution(s) {
    /*
    1. 공백으로 split
    2. 각 단어를:   
       - 빈 문자열이면 그대로
       - 아니면: 첫 글자 대문자 + 나머지 소문자
    3. 공백으로 join
    */
    
    return s.split(' ')
        .map(word => {
        if (word === '') return word;
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}
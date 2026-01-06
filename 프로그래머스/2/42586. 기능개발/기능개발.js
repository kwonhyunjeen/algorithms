function solution(progresses, speeds) {
    const days = progresses.map((progress, i) =>
        Math.ceil((100 - progress) / speeds[i])
    )
    
    const deploy = [];
    let maxDay = days[0];
    let count = 1;
    
    // [7, 3, 9] 
    for (let i = 1; i < days.length; i++) {
        if (days[i] <= maxDay) {
            count++;
        } else {
            deploy.push(count);
            maxDay = days[i];
            count = 1;
        }
    }
    
    deploy.push(count);
    
    return deploy;
}

/*
progresses = [93, 30, 55]
speeds = [1, 30, 5]
remains = [7, 70, 45] 
needs = remains / speeds = [7, 3, 9]

progresses = [95, 90, 99, 99, 80, 99]
speeds = [1, 1, 1, 1, 1, 1]
remains = [5, 10, 1, 1, 20, 1]
needs = remains / speeds = [5, 10, 1, 1, 20, 1]

3 < 7
queue = [];

*/


 
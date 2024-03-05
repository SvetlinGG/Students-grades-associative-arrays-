function grades(arr){
    
    let studentGrades = {};
    for ( let records of arr){
        let [ student, ...gradesArr] = records.split(' ');
        
        gradesArr = gradesArr.map(Number);
    
        if ( student in studentGrades){
            studentGrades[student].push(...gradesArr);
        }else {
            studentGrades[student] = gradesArr;
        }
    }
    let sortedStudents = Object.keys(studentGrades).sort();
    for ( let students of sortedStudents){
        let gradesSum = studentGrades[students].reduce((acc, curr) => acc + curr, 0);
        let avgGrade = gradesSum / studentGrades[students].length;
        console.log(`${students}: ${avgGrade.toFixed(2)}`);
    }
    
}
grades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);
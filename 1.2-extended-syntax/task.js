function getResult(a,b,c){
    "use strict"
    let D;
    let x = new Array();
    D = Math.pow(b,2) - 4*a*c;
    if ( D > 0 ) {
        let x1,
            x2;    
        x1 = (-b + Math.pow(D,0.5))/(2*a);
        x2 = (-b - Math.pow(D,0.5))/(2*a);
        x.push(x1);
        x.push(x2);   
    } else if ( D == 0 ) {
        let x1;
        x1 = (-b/(2*a));
        x.push(x1);
    } else {
        x = [];
    } 
    return x;

}

function getAverageMark(marks){
    "use strict"
     if (marks.length == 0) {
        return 0;
     } else if (marks.length > 5) {
         console.log("Количество оценок больше 5");
         marks.splice(5,marks.length-5);
         countSum(marks.length);
         
     } else if (marks.length <= 5) {
        countSum(marks.length);   
     }

    function countSum(l) {
        let result = 0;
        for ( let i = 0; i < l; i ++) {
            result = result + marks[i];
            }
        return result;
    }

    let sum = countSum(marks.length);
    let averageMark = sum / marks.length;

    return averageMark;

}

function askDrink(name,dateOfBirthday){
    let userName = name;
    let yearOfBirth = dateOfBirthday.getFullYear();
    let today = new Date();
    let thisYear = today.getFullYear();
    let age = thisYear - yearOfBirth;
    if (age >= 18) {
        result = "Не желаете ли олд-фэшн, " + userName + "?";
    } else if (age < 18) {
        result = "Сожалею, " + userName + ", но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!"
    }
    return result;
}
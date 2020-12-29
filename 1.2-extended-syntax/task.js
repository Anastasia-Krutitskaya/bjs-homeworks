"use strict"
function getResult(a,b,c){
    let D = Math.pow(b,2) - 4*a*c;
    let x = [];
    if ( D > 0 ) {    
        x.push((-b + Math.sqrt(D))/(2*a));
        x.push((-b - Math.pow(D,0.5))/(2*a));   
    } else if ( D == 0 ) {
        x.push(-b/(2*a));
    }    
    return x;

}

function getAverageMark(marks){
     if (marks.length == 0) {
        return 0;
     } else if (marks.length > 5) {
         console.log("Количество оценок больше 5");
         marks.splice(5);    
     }   
    
    let sum = 0;
    for ( let i = 0; i < marks.length; i ++) {
        sum += marks[i];
        }

    return sum / marks.length;

}

function askDrink(name,dateOfBirthday){
    if ( new Date().getFullYear() - dateOfBirthday.getFullYear() >= 18 ) {
       return "Не желаете ли олд-фэшн, " + name + "?";
    } else {
       return "Сожалею, " + name + ", но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!"
    }
}
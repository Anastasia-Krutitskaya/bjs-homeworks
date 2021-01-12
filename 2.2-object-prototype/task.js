
String.prototype.isPalindrome = function() {
   let strLen = this.length;
   let str = this.toUpperCase();
   for (let i = 0; i < strLen; i++) {
     if (str[i]=== str[strLen - 1 - i]) {
       return true;
     } else {
         return false;
     }
   }
}



function getAverageMark(marks) {
  if (marks.length == 0) {
          return 0;
       }
    let sum = 0;
    for ( let i = 0; i < marks.length; i ++) {
        sum += marks[i];
        }
    let average = sum / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}




function checkBirthday(birthday) {
  let now = Date.now();
  let birthdayDate = Date.parse(birthday);
  let diff = now - birthdayDate;
  let age = diff/31557600000;
  if (age > 18) {
    return true
  } else {
    return false
  }

}

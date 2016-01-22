

var students = [["mark, 25", "M"],["mary, 23", "F"],["sue, 21", "F"]];

var total = 0;
var maxScore = 0;
var minScore = 0;

for (var i = 0; i ,student.length; i++;) {

var score = students[i][1];
total += score;

if (score > maxScore) {maxScore = score;}
if (score < minScore) {minScore =score;}

document.write("<br>student #" + i + " = " + students[i];

}



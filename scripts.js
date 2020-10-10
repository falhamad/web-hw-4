function grades () {

var Quizes = parseInt (document.getElementById(`Quizes`).value);
var Midterm = parseInt (document.getElementById(`Midterm`).value);
var FinalTest = parseInt (document.getElementById(`FinalTest`).value);
var Oral = parseInt (document.getElementById(`Oral`).value);

var total_grades = Quizes + Midterm + FinalTest + Oral;
document.getElementById('total_grades').innerHTML = total_grades;

if (total_grades>=90 && total_grades<=100){
    document.getElementById(`final_grade`).innerHTML = "A";
}

 else if (total_grades>=80 && total_grades<=89){
    document.getElementById('final_grade').innerHTML = "B";
}

 else if (total_grades>=70 && total_grades<=79){
    document.getElementById('final_grade').innerHTML = "C";
}

else if (total_grades>=60 && total_grades<=69){
    document.getElementById('final_grade').innerHTML = "D";
}

 else {
    document.getElementById('final_grade').innerHTML = "F";
 }

 }






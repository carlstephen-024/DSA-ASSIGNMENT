//Carl Stephen M. Quilopras

let s = parseInt("GRADE: ");                                              //initializing the score/grade to s and prompting the user to enter their grade

if (s >= 97) {                                                          //if, else if, and else statement for the evaluation of the grade input by the user
    console.log("Your equivalent Grade is “1.00” Excellent");
    console.log("Final Remark: HIGH PASS, Candidate for Cum Laude");
} else if (s < 97 && s >= 94) {
    console.log("Your equivalent Grade is “1.25” Excellent");
    console.log("Final Remark: HIGH PASS, Candidate for Cum Laude");
} else if ( s < 94 && s >= 90) {
    console.log("Your equivalent Grade is “1.75” Above Average");
    console.log("Final Remark: HIGH PASS, Candidate for Cum Laude");
} else if ( s < 90 && s >= 88){
    console.log("Your equivalent Grade is “1.75” Above Average");
    console.log("Final Remark: AVERAGE PASS");
} else if ( s < 88 && s >= 85){
    console.log("Your equivalent Grade is “2.00” Average");
    console.log("Final Remark: AVERAGE PASS");
} else if (s < 85 && s >= 82){
    console.log("Your equivalent Grade is “2.25” Average");
    console.log("Final Remark: AVERAGE PASS");
} else if ( s < 82 && s >= 79){
    console.log("Your equivalent Grade is “2.50” Below Average");
    console.log("Final Remark: LOW PASS");
} else if (s < 79 && s >= 76){
    console.log("Your equivalent Grade is “2.75” Below Average");
    console.log("Final Remark: LOW PASS");
} else if ( s < 76 && s == 75 ) {
    console.log("Your equivalent Grade is “3.00” Below Average");
    console.log("Final Remark: LOW PASS");
} else if (s < 75 && s >= 72) {
    console.log("Your equivalent Grade is “4.00” Poor");
    console.log("Final Remark: FAILED, Needs Improvement");
} else {
    console.log("Your equivalent Grade is “5.00” Poor");
    console.log("Final Remark: FAILED, Needs Improvement");
}
/*
let s = parseInt(prompt("GRADE: "), 10);                                                                         //initializing the score/grade to s and prompting the user to enter their grade

console.log(                                                                                                     //print statement with ternary condition statements
    s >= 97
        ? 'Your equivalent Grade is "1.00" Excellent\nFinal Remark: HIGH PASS, Candidate for Cum Laude'
        : s >= 94
        ? 'Your equivalent Grade is "1.25" Excellent\nFinal Remark: HIGH PASS, Candidate for Cum Laude'
        : s >= 90
        ? 'Your equivalent Grade is "1.75" Above Average\nFinal Remark: HIGH PASS, Candidate for Cum Laude'
        : s >= 88
        ? 'Your equivalent Grade is "1.75" Above Average\nFinal Remark: AVERAGE PASS'
        : s >= 85
        ? 'Your equivalent Grade is "2.00" Average\nFinal Remark: AVERAGE PASS'
        : s >= 82
        ? 'Your equivalent Grade is "2.25" Average\nFinal Remark: AVERAGE PASS'
        : s >= 79
        ? 'Your equivalent Grade is "2.50" Below Average\nFinal Remark: LOW PASS'
        : s >= 76
        ? 'Your equivalent Grade is "2.75" Below Average\nFinal Remark: LOW PASS'
        : s === 75
        ? 'Your equivalent Grade is "3.00" Below Average\nFinal Remark: LOW PASS'
        : s >= 72
        ? 'Your equivalent Grade is "4.00" Poor\nFinal Remark: FAILED, Needs Improvement'
        : 'Your equivalent Grade is "5.00" Poor\nFinal Remark: FAILED, Needs Improvement'
);
*/

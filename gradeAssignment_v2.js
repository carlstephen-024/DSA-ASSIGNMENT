let s = prompt("GRADE: ");

if (s >= 97) {
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
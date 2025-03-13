//Carl Stephen M. Quilopras
//initializing and promt for the mast limit of the loop
let max_lim_loop = parseInt(prompt("Enter the Limit of the Double Loop: "), 10);

if (!isNaN(max_lim_loop) && max_lim_loop > 0) {         //this checks if the initialized max limit of the loop
                                                        // is a number.
    console.log("Result:");
    for (let x = 0; x <= max_lim_loop; x++) { // Outer loop
//initiates  x=0, and x is less/equal to the max_lim_loop, and x++ for incrementation
        for (let y = 0; y <= max_lim_loop; y++) { // Inner loop
//same also to the outer loop, it initiates that y=0, andy less/equal to the max_lim_loop, and y++ for incrementation
            let added_val = x + y; // this calculates the added value
            //the added_val is assigned to calculate the sum of x and y
            console.log(`[${x}] [${y}] Added value is ${added_val}`);
        }
    }
} else {
    console.log("Invalid input! Please enter a positive integer."); //this will be executed if the users input is either not a number, negative or zero.
}

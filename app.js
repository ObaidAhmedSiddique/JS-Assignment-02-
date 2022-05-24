// ||||||||||||||||||||||||||||||||||||| VARIABLES FOR NUMBERS (Ch # 3) |||||||||||||||||||||||||||||||||||||||||||

// ***************************************** Question # 01 *****************************************

// var age = 23;
// alert("I am " + age + " years old");

// ***************************************** Question # 02 *****************************************

// var visits = 14;
// alert("You have visited this site " + visits + " times");

// ***************************************** Question # 03 *****************************************

// var birthYear = 1998;
// document.write("My birth year is " + birthYear + "<br>" + "Data type of my declared variable is number");

// ***************************************** Question # 04 *****************************************

// var visitorName = prompt("Name:"), productTitle = prompt("Product Title"), quantity = prompt("Quantity");
// document.write(visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store");



// ||||||||||||||||||||||||||||||||||||| VARIABLES NAMES: LEGAL OR ILLEGAL (Ch # 4) |||||||||||||||||||||||||||||||||||||||||||

// ***************************************** Question # 01 *****************************************

// var var1, var2, var3;

// ***************************************** Question # 02 *****************************************

// // var var1, var_2, var_3_Three, var4_, var___5;
// var variable 1, var.2, var,  2variable, &Variable;

// ***************************************** Question # 03 *****************************************

// document.write("<h2>" + "Rules for naming JS variables" + "</h2>" + "<br>" + "<br>");
// document.write("Variable names can only contain numbers, $ and _ . For example $my_1stVariable <br> Variables must begin with a letter, $ or _ . For example $name, _name or name <br> Variable names are case sensitive <br> Variable names should not be JS keywords");

// ||||||||||||||||||||||||||||||||||||| MATH EXPRESSIONS (Ch # 5) |||||||||||||||||||||||||||||||||||||||||||

// ***************************************** Question # 01 *****************************************

// var num1 = +prompt("Enter Num1"), num2 = +prompt("Enter Num2");
// var result = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + result);

// ***************************************** Question # 02 *****************************************

// var num1 = +prompt("Enter Num1"), num2 = +prompt("Enter Num2");

// var result = num1 - num2;
// document.write("Subtraction of " + num1 + " and " + num2 + " is " + result + "<br>");

// result = num1 * num2;
// document.write("Multiplication of " + num1 + " and " + num2 + " is " + result + "<br>");

// result = num1 % num2;
// document.write("Modulus of " + num1 + " and " + num2 + " is " + result);

// ***************************************** Question # 03 *****************************************

// var variable;
// document.write("Value after variable declaration is " + variable + "<br>");

// variable = 5;
// document.write("Initial Value: " + variable + "<br>");

// variable++;
// document.write("Value after increment is: " + variable + "<br>");

// variable = variable + 7;
// document.write("Value after addition is: " + variable + "<br>");

// variable--;
// document.write("Value after decrement is: " + variable + "<br>");

// variable = variable % 3;
// document.write("The remainder is: " + variable + "<br>");

// ***************************************** Question # 04 *****************************************

// var ticketCost = 600;
// var nofticket = prompt("Enter the number of tickets You want","1,2,4,10...")
// var totalprice = ticketCost * nofticket;
// document.write("Total cost to buy " + nofticket +" Tickets to a movie is " +totalprice)

// ***************************************** Question # 05 *****************************************

//  var num = parseInt(prompt('Enter an integer: '));    
// document.write("the table of "+num)
// for(let i = 1; i <= 10; i++) {
//     const result = i * num;
//     document.write("<br>");
//     // display the result
//     document.write(num +"*" +i +"=" +result )
// }

// ***************************************** Question # 06 *****************************************

// var celsius = prompt("Enter the temperture")
// var farenheit;
// farenheit = (celsius - 32)*5/9

// document.write(celsius +" C "+" is "+farenheit +"F")

// var farenheit = prompt("Enter the temperture")
// var celsius;
// celsius = (celsius * 9/5) + 32

// document.write(farenheit +" F "+" is "+celsius +"C")

// ***************************************** Question # 07 *****************************************

// document.write("Shopping Cart")
// document.write("<br>");
// var price01 = 650;
// var price02 = 100;
// var quantityItem1 = prompt("Enter Number of item1")
// var quantityItem2 = prompt("Enter Number of item2")
// var totalCost = (price01 * quantityItem1) + (price02 * quantityItem2) + 100;

// document.write("Price of item 1 is 650Rs")
// document.write("<br>");
// document.write("Quantity of item 1 is " +quantityItem1)
// document.write("<br>");
// document.write("Price of item 2 is 100Rs")
// document.write("<br>");
// document.write("Quantity of item 2 is " +quantityItem2)
// document.write("<br>");
// document.write("Shipping Charges 100Rs")
// document.write("<br>");
// document.write("Total cost of your order is "+totalCost + "Rs")

// ***************************************** Question # 08 *****************************************

// obtainMarks = prompt("enter marks you obtain")
// totalMarks = 980;
// percentage = obtainMarks/totalMarks * 100;

// document.write("Total Marks: 980")
// document.write("<br>");
// document.write("Marks you Obtain " + obtainMarks)
// document.write("<br>");
// document.write("Percentage " + percentage +"%")

// ***************************************** Question # 09 *****************************************

// var totalDollar = ("Enter your amount in $")
// totalPkr = totalDollar*200;
// document.write("Total Currency in PKR " +totalPkr + "Rs")

// var totalRiyal = ("Enter your amount in riyal")
// totalPkr = totalRiyal*54;
// document.write("Total Currency in PKR " +totalPkr + "Rs")
/* 1.1 Below are a sequence of expressions. What is the result printed by the interpreter in response to each expression?
I will comment out the Lisp example code with each question, so you can see the original source question.*/

//Question 1 10

10; //10

//Question 2 (+ 5 3 4) without output of 12

5 + 3 + 4; //12  In Javascript we can't add seperate variables with one operator with the ease lisp does.

//Question 3  (- 9 1)

9 - 1; // 8

//Question 4 (+ (* 2 4) (-4 6))

function(){
   (2 * 4) + (4 - 6); //6 The actual meat of the equation looks more familiar to math notation than lisp but there is a lot of                                                      surrounding syntax    
}

//Question 5 (define a 3)

var a = 3  //returns undefined unless you call the variable a afterwords

//question 6 (define b (+ a 1))
var b = a + 1; //undefined unless b is called then 4 is returned


/* 1.2 Translate the following expression into prefix form */

/* 1.3 Define a procedure that takes three numbers as arguments and returns the sum of the squares of the two larger numbers
This solution is interesting because I was unaware that you could use if statements in an if statement of the same block. This and use of else statements allows you to implicity state the only remaining possibility instead of listing every possibility. 

function three_n(num1, num2, num3) {
   if (num1 > num2)
      if (num1 > num3)
         if (num2 > num3)
            return num1*num1 + num2*num2;
         else
            return num1*num1 + num3*num3;
      else
         return num1*num1 + num3*num3;
   else
      if (num2 > num3)
         if (num1 > num3)
            return num2*num2 + num1*num1;
         else
            return num2*num2 + num3*num3;
      else
         return num2*num2 + num3*num3;
}


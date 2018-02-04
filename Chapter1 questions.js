/* 1.1 Below are a sequence of expressions. What is the result printed by the interpreter in response to each expression? Assume that the sequence iss to be evaluated in the order in which it is presented. */

10 //10

/* 1.2 Translate the following expression into prefix form */

/* 1.3 Define a procedure that takes three numbers as arguments and returns the sum of the squares of the two larger numbers
This solution is interesting because I was unaware that you could use if statements in an if statement of the same block. This makes it possible to deduce the code without

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


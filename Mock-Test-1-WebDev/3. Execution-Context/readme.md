# Execution Context

Execution context is a fundamental concept in JavaScript that helps manage the execution of code. It represents the environment in which JavaScript code is evaluated and executed. It contains information about variables, functions, scope, and the value of this.

## Types of Execution Context

1. Global Execution Context:
   - The default and outermost execution context in JavaScript.
   - Represents the global scope and contains global variables and functions
   - There is only one global execution context throughout the entire script.
2. Function Execution Context:

   - Created when a function is invoked or called.
   - Each function has its own execution context.
   - It includes information about local variables, function arguments, and inner functions.
   - The function execution context is pushed onto the execution stack (call stack).

3. Eval Execution Context:
   - Created when code is executed inside the eval() function.
   - Evaluates and executes the provided code.

## Components of Execution Context

1. Variable Environment:

   - Contains the function's variables, function declarations, and function arguments.
   - Stores variables as key-value pairs.
   - Allows variables to be accessed and modified within the execution context.

2. Lexical Environment:
   - Similar to the variable environment but also includes information about the outer environment (parent scope).
   - The outer environment is used for variable lookups in case a variable is not found in the current execution context.

## Execution Context Stack

When a function is called, a new execution context is created and pushed onto the execution stack. Once the function execution is completed, the execution context is popped off the stack, and control returns to the previous execution context.

---

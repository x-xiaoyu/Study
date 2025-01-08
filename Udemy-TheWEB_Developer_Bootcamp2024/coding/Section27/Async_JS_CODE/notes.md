Call Back
The mechanism the JS interpreter uses to keep track of its place in a script taht calls multiple functions.

How JS "knows" what function is currently being run and what functions are called from within that function, etc.
调用堆栈是JS解释器用来跟踪其在调用多个函数的脚本中的位置的机制。

How it works
- When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
- Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
- When the current function if finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.

JS is single threaded单线程
- At any given point in time, that single JS thread is running at most one line of JS code.
可以Switch 但绝不会同时做两件事。
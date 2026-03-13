
# Day 1 - CPU, Processes, Threads & OS Basics

## What I Learned

### CPU & Cores
- CPU is the brain of the computer that executes instructions
- Processor is the physical chip, CPU is the processing unit inside it
- Cores are individual processing units inside the CPU
- 10 cores = 10 threads can run simultaneously

### Operating System & Kernel
- OS is the bridge between hardware and software applications
- Kernel is the core engine of the OS
- Kernel manages: CPU time, memory, input/output
- OS = Kernel + everything else (file system, UI, tools)
- Think of it like a car: Kernel = engine, OS = entire car

### Process & Thread
- Process = a running application (e.g. Chrome)
- Thread = smallest unit of execution inside a process
- Every process has at least one thread (main thread)
- Threads share the same memory of their process
- If one thread crashes badly = whole process can crash

### Parent-Child Processes
- Every process has a PID (unique ID)
- Parent process creates child processes
- If parent dies, children die with it
- Unrelated processes are completely independent

## Real Practice
- Ran `ps aux` in terminal
- Saw bash (PID 1798) as parent and ps (PID 1814) as child
- My CPU has 10 cores

## Mistakes I Made
- Confused process and thread on Q1 (Chrome is a process not a thread)
- Called parent-child process relationship a thread relationship

## Mental Models That Helped
- Restaurant analogy: Process = restaurant, Thread = waiter, Core = table
- Car analogy: Kernel = engine, OS = entire car
```

---

Day 1 - CPU, cores, OS, kernel, processes and threads
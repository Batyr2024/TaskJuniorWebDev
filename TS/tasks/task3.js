class Queue {
  tasks = [];
 
  delay = 10;
 
  runQueue() {
       setTimeout(() => this.doJob(), this.delay);
   }
 
  doJob() {
       const task = this.tasks.shift();
       if (task != null) {
           console.log(task);
       }
       this.runQueue();
   }
 
   addJob(task) {
       return this.tasks.push(task);
   }
 
   run() {
       this.runQueue();
   }
 
   set jobDelay(time) {
       this.delay = time;
   }
 }
 
 class Task {
   value;
 
   constructor(value) {
       this.value = value;
   }
 }
 
 const queue = new Queue();
 
 const task1 = new Task('task#1');
 const task2 = new Task(1);
 
 queue.jobDelay = 1000;
 
 queue.addJob(task1);
 queue.addJob(task2);
 
 queue.run();
// ##### THIS IS AN OOP EXAMPLE! ####


function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the shit out"); // task 0
const task2 = newTask("Do Laundry", "Im sad"); // task 1
const tasks = [task1, task2];

task1.logState();
task1.markCompleted()
task1.logState();


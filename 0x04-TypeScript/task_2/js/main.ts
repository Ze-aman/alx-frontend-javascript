interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

/* createEmployee function using "if (salary < 500)" */
function createEmployee(salary: number | string): Director | Teacher {
  if (salary < 500) {
    return new Teacher();
  }
  return new Director();
}

/* Type predicate */
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

/* executeWork function */
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

/* String literal type for Subjects */
type Subjects = 'Math' | 'History';

/* teachClass function */
function teachClass(todayClass: Subjects): string {
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}

/* Example usage */
console.log(createEmployee(200));   // Teacher
console.log(createEmployee(1000));  // Director
console.log(createEmployee('$500')); // Director

console.log(executeWork(createEmployee(200)));  // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks

console.log(teachClass('Math'));    // Teaching Math
console.log(teachClass('History')); // Teaching History

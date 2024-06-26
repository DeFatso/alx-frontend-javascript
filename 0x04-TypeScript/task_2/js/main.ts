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
  workFromHome(): string { return "Working from home"; }
  getCoffeeBreak(): string { return "Getting a coffee break"; }
  workDirectorTasks(): string { return "Getting to director tasks"; }
}

class Teacher implements TeacherInterface {
  workFromHome(): string { return "Cannot work from home"; }
  getCoffeeBreak(): string { return "Cannot have a break"; }
  workTeacherTasks(): string { return "Getting to work"; }
}

function createEmployee(salary: number | string): Director | Teacher {
  let numSalary = typeof salary === 'string' ? parseInt(salary.replace(/\D/g, ''), 10) : salary;
  return numSalary < 500 ? new Teacher() : new Director();
}

function isDirector(employee: any): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return "Teaching Math";
    } else if (todayClass === 'History') {
        return "Teaching History";
    } else {
        throw new Error("Invalid class type");
    }
}

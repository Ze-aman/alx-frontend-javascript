/**************************
 * 1. Teacher Interface
 **************************/
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any; // Allow additional properties dynamically
}

/**************************
 * 2. Directors Interface
 **************************/
interface Directors extends Teacher {
  numberOfReports: number;
}

/**************************
 * 3. printTeacher Function
 **************************/
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function(firstName: string, lastName: string): string {
  return firstName.charAt(0) + '. ' + lastName;
};

// Example usage of printTeacher
console.log(printTeacher('John', 'Doe')); // Output: J. Doe

/**************************
 * 4. StudentClass
 **************************/
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

/**************************
 * 5. Example Usage
 **************************/

// Teacher
const teacher1: Teacher = {
  firstName: 'Alice',
  lastName: 'Johnson',
  fullTimeEmployee: true,
  location: 'New York',
  contract: true,
};

console.log('Teacher:', teacher1);

// Directors
const director1: Directors = {
  firstName: 'Bob',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

console.log('Directors:', director1);

// StudentClass usage
const student1 = new StudentClass({ firstName: 'Guillaume', lastName: 'Salva' });
console.log('Student displayName:', student1.displayName()); // Output: Guillaume
console.log('Student workOnHomework:', student1.workOnHomework()); // Output: Currently working

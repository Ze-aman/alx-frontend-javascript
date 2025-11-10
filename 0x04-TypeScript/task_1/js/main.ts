/* Teacher interface */
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any; // allows extra properties like contract
}

/* Directors interface extending Teacher */
interface Directors extends Teacher {
  numberOfReports: number;
}

/* Interface for the printTeacher function */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/* printTeacher function as required by ALX */
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName}. ${lastName}`;
}

/* Example usage of printTeacher */
console.log(printTeacher('John', 'Doe')); // J. Doe

/* StudentClass as expected by ALX */
class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
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

/* Example usage of StudentClass */
const student1 = new StudentClass('Guillaume', 'Salva');
console.log(student1.displayName()); // Guillaume
console.log(student1.workOnHomework()); // Currently working

/* Example usage of Teacher and Directors */
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false
};

const director1: Directors = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'New York',
  numberOfReports: 17
};

console.log(teacher3);
console.log(director1);

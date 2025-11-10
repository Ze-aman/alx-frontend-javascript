
// Base Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any; // Allow dynamic additional properties
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage of Teacher
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // dynamic property
};

console.log('Teacher:', teacher3);

// Example usage of Directors
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log('Director:', director1);

// Expected output:
// Teacher: { firstName: 'John', lastName: 'Doe', fullTimeEmployee: false, location: 'London', contract: false }
// Director: { firstName: 'John', lastName: 'Doe', fullTimeEmployee: true, location: 'London', numberOfReports: 17 }

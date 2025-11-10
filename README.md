# alx-frontend-javascript

This repository contains a **TypeScript exercise** for creating a flexible **Teacher interface** as part of the **ALX Frontend ProDev**.  
The project demonstrates **TypeScript interfaces, optional properties, readonly fields, and dynamic object attributes**.

## Features

- **Teacher Interface**
  - Required properties:
    - `firstName`: string (readonly)
    - `lastName`: string (readonly)
    - `fullTimeEmployee`: boolean
    - `location`: string
  - Optional property:
    - `yearsOfExperience`: number
  - Allows additional dynamic properties (e.g., `contract`: boolean)
  
- **TypeScript Enforcement**
  - All properties are strictly typed.
  - Readonly properties cannot be modified after initialization.
  - Supports optional and additional attributes dynamically.

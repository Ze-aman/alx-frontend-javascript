// Import the types from interface.ts
import { RowID, RowElement } from './interface';

// Declare the functions available in crud.js
declare function insertRow(row: RowElement): RowID;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): RowID;

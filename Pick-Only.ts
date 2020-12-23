/**
 * 
 * Pick | Only
 * Contruye una nueva interfaz
 * a partir de una interfaz ya existente
 */

interface EmployeeSummary {
    id: string;
    name: string;
    age: number;
    married?: boolean;
}

type EmployeeID = Pick<EmployeeSummary,"id"|"age">
type EmployeeOther = Omit<EmployeeSummary,"id"|"age">
// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
var employeesArray = []; 

let keepAdding = true;  

const collectEmployees = function (event) {
    console.log(event);
  
    while (true) {
      let firstName = window.prompt("Enter First Name.");
      let lastName = window.prompt("Enter Last Name.");
      let salary;
  
      // Loop 
      while (true) {
        salary = window.prompt("Enter a salary.");
  
        if (!isNaN(parseFloat(salary))) {
          salary = parseFloat(salary);
          break;
        } else {
          salary = 0;
          break;
        }
      } 
  
      var employee = {
        firstName: firstName,
        lastName: lastName,
        sal: salary,
      };
  
      // Array.
      employeesArray.push(employee);
  
      // Prompt
      keepAdding = window.confirm("Would you like to add another employee?");
  
      // If cancel
      if (!keepAdding) {
        break;
      }
    }
  
    // USe comparison operators to verify.  Letter => to next letter, etc.
    employeesArray.sort((a, b) => a.lastName.localeCompare(b.lastName));
  
    return employeesArray;
  };
  
  // Cap character zero (first) , then slice to retain the rest and add together.
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  // Average Salary Function:
  const displayAverageSalary = function (employeesArray) {
    var totalSalary = 0;
    for (let i = 0; i < employeesArray.length; i++) {
      totalSalary += parseInt(employeesArray[i].sal);
    }
  
    var averageSalary = (totalSalary / employeesArray.length).toFixed(2);
  
    //USD Conversion
    averageSalary =
      "$" + averageSalary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
    console.log(
      `The average employee salary between our ${employeesArray.length} employee(s) is ${averageSalary}`
    );
  };
  
  // Random Employee Selection Function:
  const getRandomEmployee = function (employeesArray) {
    var arrayIndex = Math.floor(Math.random() * employeesArray.length);
  
    var chosenEmployee = employeesArray[arrayIndex];
  
    console.log(
      `Congratulations to ${chosenEmployee.firstName} ${chosenEmployee.lastName}, our random drawing winner!`
    );
  };

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.sal.toLocaleString("en-US",{
      style:"currency",
      currency:"USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener(`click`, trackEmployeeData);
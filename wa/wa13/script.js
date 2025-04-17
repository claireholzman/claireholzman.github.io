// Problem 1: Create JSON for each employee
const employees = [
    { firstName: "Sam", department: "Tech", designation: "Manager", salary: 40000, raiseEligible: true },
    { firstName: "Mary", department: "Finance", designation: "Trainee", salary: 18500, raiseEligible: true },
    { firstName: "Bill", department: "HR", designation: "Executive", salary: 21200, raiseEligible: false }
  ];
  
  console.log("Problem 1: Employees JSON", employees);
  
  // Problem 2: Create JSON for the company
  const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
  };
  
  console.log("Problem 2: Company JSON", company);
  
  // Problem 3: Add new employee Anna
  const newEmployee = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
  };
  
  company.employees.push(newEmployee);
  
  console.log("Problem 3: Company with Anna added", company);
  
  // Problem 4: Calculate total salary
  let totalSalary = 0;
  for (const employee of company.employees) {
    totalSalary += employee.salary;
  }
  
  console.log("Problem 4: Total Salary = $" + totalSalary);
  
  // Problem 5: Apply raises
  function applyRaises(companyObj) {
    for (const emp of companyObj.employees) {
      if (emp.raiseEligible) {
        emp.salary *= 1.10;
        emp.raiseEligible = false;
      }
    }
  }
  
  applyRaises(company);
  
  console.log("Problem 5: Salaries after raises", company.employees);
  
  // Problem 6: Set work from home status
  const workingFromHome = ['Anna', 'Sam'];
  
  for (const emp of company.employees) {
    emp.wfh = workingFromHome.includes(emp.firstName);
  }
  
  console.log("Problem 6: Work from home status updated", company.employees);
  
const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
    const employeeCreate = new Employee();
    expect(typeof (employeeCreate)).toBe("object");
})

test("Testing name.", () => {
    const name = "paul";
    const employeeCreate = new Employee(name);
    expect(employeeCreate.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 2;
    const employeeCreate = new Employee("paul", id);
    expect(employeeCreate.id).toBe(id);
})

test("Testing email.", () => {
    const email = "paul@gmail.com";
    const employeeCreate = new Employee("paul", 2, email);
    expect(employeeCreate.email).toBe(email);
})



test("Gets name through getName method.", () => {
    const testName = "paul";
    const employeeCreate = new Employee(testName);
    expect(employeeCreate.getName()).toBe(testName);
})

test("Can test ID through getID method.", () => {
    const testID = 2;
    const employeeCreate = new Employee("paul", testID);
    expect(employeeCreate.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "paul@gmail.com";
    const employeeCreate = new Employee("paul", 2, testEmail);
    expect(employeeCreate.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeCreate = new Employee("paul", 2, "paul@gmail.com");
    expect(employeeCreate.getRole()).toBe(returnValue);
})


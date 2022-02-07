const Manager = require("../lib/Manager")

test("Can create an office number.", () => {
    const testOfficeNumber = 2;
    const employeeCreate = new Manager("paul", 2, "paul@gmail.com", testOfficeNumber);
    expect(employeeCreate.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 2;
    const employeeCreate = new Manager("paul", 2, "paul@gmail.com", testOfficeNumber);
    expect(employeeCreate.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeCreate = new Manager("paul", 2, "paul@gmail.com", 2);
    expect(employeeCreate.getRole()).toBe(returnValue);
});
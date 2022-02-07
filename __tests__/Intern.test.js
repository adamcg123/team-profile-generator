const Intern = require("../lib/Intern");

test("Can create school.", () => {
    const testSchool = "School Name";
    const employeeCreate = new Intern("paul", 2, "paul@gmail.com", testSchool);
    expect(employeeCreate.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "School Name";
    const employeeCreate = new Intern("paul", 2, "paul@gmail.com", testSchool);
    expect(employeeCreate.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeCreate = new Intern("paul", 2, "paul@gmail.com", "School Name");
    expect(employeeCreate.getRole()).toBe(returnValue);
});
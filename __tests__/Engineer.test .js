
const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "testgithub";
    const employeeInstance = new Engineer("testname", 2, "testgithub@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "testgithub";
    const employeeInstance = new Engineer("testname", 2, "testgithub@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("testname", 2, "testgithub@gmail.com", "testgithub");
    expect(employeeInstance.getRole()).toBe(returnValue);
});
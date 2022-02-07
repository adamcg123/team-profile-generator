const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "testgithub";
    const employeeCreate = new Engineer("paul", 2, "paulgithub@gmail.com", testGithub);
    expect(employeeCreate.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "testgithub";
    const employeeCreate = new Engineer("paul", 2, "paulgithub@gmail.com", testGithub);
    expect(employeeCreate.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeCreate = new Engineer("paul", 2, "paulgithub@gmail.com", "paulgithub");
    expect(employeeCreate.getRole()).toBe(returnValue);
});
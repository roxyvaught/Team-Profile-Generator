const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number by constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Lee", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});


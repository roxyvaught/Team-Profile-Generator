
const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "ULL";
  const e = new Intern("Lee", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "ULL";
  const e = new Intern("Lee", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
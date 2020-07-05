import { AgeCalculator } from "../src/index";

test("my age should be greater than 29 years", () => {
  const age = AgeCalculator.getAge(new Date("01-01-1990"));
  expect(age.years).toBeGreaterThan(29);
});

test("future dob should throw error", () => {
  expect(() => {
    AgeCalculator.getAge(new Date("12-29-2050"));
  }).toThrow();

  expect(() => {
    AgeCalculator.getAge(new Date("12-29-2050"));
  }).toThrowError(Error);
});

test("future dob should throw expected error", () => {
  expect(() => {
    AgeCalculator.getAge(new Date("12-29-2050"));
  }).toThrowError(Error("Future date not allowed"));
});

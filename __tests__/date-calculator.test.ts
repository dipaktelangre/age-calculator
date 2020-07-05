import { DateCalculator } from "../src/date-calculator";

describe("Date Difference Calculator", () => {
  test("calculate date diffrence for year", () => {
    const dateCal = new DateCalculator();
    const diff = dateCal.dateDifference(new Date("01-01-2019"), new Date("01-01-2020"));
    expect(diff.years).toBe(1);
  });

  test("calculate diff for single year ", () => {
    const dateCal = new DateCalculator();
    const diff = dateCal.dateDifference(new Date("01-01-2019"), new Date("12-31-2019"));
    expect(diff.years).toBe(0);
    expect(diff.months).toBe(11);
    expect(diff.days).toBe(30);
  });

  test("calculate date diff in weeks", () => {
    const dateCal = new DateCalculator();
    const diff = dateCal.dateDifferenceIn(new Date("01-01-2019"), new Date("12-31-2019"), "weeks");
    expect(diff).toBe(52);
  });

  test("calculate date diff in days", () => {
    const dateCal = new DateCalculator();
    const diff = dateCal.dateDifferenceIn(new Date("01-01-2019"), new Date("12-31-2019"), "days");
    expect(diff).toBe(364);
  });

  test("calculate date diff in months", () => {
    const dateCal = new DateCalculator();
    const diff = dateCal.dateDifferenceIn(new Date("01-01-2019"), new Date("12-31-2019"), "month");
    expect(diff).toBe(11);
  });
});

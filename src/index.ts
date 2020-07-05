import moment from "moment";
import { Age } from "./model";

export class AgeCalculator {
  /**
   * Get age in years, month, days format from given date of birth
   * @param dob date of birth
   * @returns age in {years, months, days}
   */
  static getAge(dob: Date): Age {
    if (!(dob instanceof Date)) throw new Error("Invalid date");
    if (moment(dob.toISOString()).isAfter(moment())) throw new Error("Future date not allowed");
    return AgeCalculator.dateDifference(dob, new Date());
  }

  private static dateDifference(from: Date, to: Date): Age {
    if (!(from instanceof Date) || !(to instanceof Date)) throw new Error("Invalid date");
    const fromDate = moment(from.toISOString());
    const toDate = moment(to);

    const years = toDate.diff(fromDate, "year");
    fromDate.add(years, "years");

    const months = toDate.diff(fromDate, "months");

    fromDate.add(months, "months");

    const days = toDate.diff(fromDate, "days");

    return {
      years: years,
      months: months,
      days: days,
    };
  }
}

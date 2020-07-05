import moment from "moment";
import { UnitOfAge, Age } from "./model";
import { DateCalculator } from "./date-calculator";

export class AgeCalculator {
  /**
   * Get age in years, month, days format from given date of birth
   * @param dob date of birth
   * @returns age in {years, months, days}
   */
  static getAge(dob: Date): Age {
    if (!(dob instanceof Date)) throw new Error("Invalid date");
    if (moment(dob.toISOString()).isAfter(moment())) throw new Error("Future date not allowed");
    const dateCal = new DateCalculator();
    return dateCal.dateDifference(dob, new Date());
  }

  /**
   * Get age in given formate
   * @param dob date of birth
   * @param format unit of age i.g. years, months, weeks, days, hours etc
   */

  static getAgeIn(dob: Date, format: UnitOfAge): number {
    if (!(dob instanceof Date)) throw new Error("Invalid date");
    if (moment(dob.toISOString()).isAfter(moment())) throw new Error("Future date not allowed");
    const dateCal = new DateCalculator();
    return dateCal.dateDifferenceIn(dob, new Date(), format);
  }
}

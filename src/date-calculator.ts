import moment from "moment";
import { UnitOfAge, Age } from "./model";

export class DateCalculator {
  dateDifference(from: Date, to: Date): Age {
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
  dateDifferenceIn(from: Date, to: Date, format: UnitOfAge): number {
    if (!(from instanceof Date) || !(to instanceof Date)) throw new Error("Invalid date");
    const fromDate = moment(from.toISOString());
    const toDate = moment(to);

    return toDate.diff(fromDate, format);
  }
}

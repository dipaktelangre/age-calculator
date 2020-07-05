# Introduction

Javascript library to calculate age from date of birth

# Installation

`npm install @dipaktelangre/age-calculator`

# Usage

`node`

```js
var { AgeCalculator } = require("@dipaktelangre/age-calculator"); // undefined
AgeCalculator.getAge(new Date("01/01/1990")); //{ years: 30, months: 6, days: 3 }
AgeCalculator.getAgeIn(new Date("01/01/1990"), "years"); // 30
AgeCalculator.getAgeIn(new Date("01/01/1990"), "weeks"); // 1591
AgeCalculator.getAgeIn(new Date("01/01/1990"), "month"); //366
```

`typescript`

```js
import { AgeCalculator } from "@dipaktelangre/age-calculator";
AgeCalculator.getAge(new Date("01/01/1990")); //{ years: 30, months: 6, days: 3 }
AgeCalculator.getAgeIn(new Date("01/01/1990"), "years"); // 30
AgeCalculator.getAgeIn(new Date("01/01/1990"), "weeks"); // 1591
AgeCalculator.getAgeIn(new Date("01/01/1990"), "month"); //366
```

# Build

`npm run build`

# Test

`npm run test`  
`npm run test:tdd`

# Contribute

If you would like to contribute, you are welcome. Clone repository and open pull request.

# @bepo65/dayjs-demo-submodule

![Version](https://img.shields.io/badge/version-1.0.1-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/kefranabg/readme-md-generator/blob/master/LICENSE)

Minimal package to show what happens, when package using dayjs uses different plugin configuration than program that uses this package (See [dayjs issue #1577](https://github.com/iamkun/dayjs/issues/1577#issuecomment-926149823) for the corresponding question).



## Use this package in a program

> npm install @bepo65/dayjs-demo-submodule

and then in the test program

```
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale.js';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import { formatNow } from '@bepo65/dayjs-demo-submodule';

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

// update locale
dayjs.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: 'a few modified seconds',
    m: '1 minute',
    mm: '%d modified minutes',
    h: '1 hour',
    hh: '%d modified hours',
    d: '1 day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
  }
});

console.log(`dayjs in this program gets '${dayjs(new Date()).fromNow()}' from dayjs.fromNow()`);
console.log(`dayjs in the imported package gets '${formatNow()}' from the formatNow`);
```

The test programm will show twice `a few seconds ago`.

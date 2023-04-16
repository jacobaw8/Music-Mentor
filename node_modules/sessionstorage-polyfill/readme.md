# sessionstorage-polyfill

in memory sessionstorage polyfill for node.js utilizing ES6 proxies(requires node.js 6 at least)

## Installation

```
npm i sessionstorage-polyfill -D
```
Saving for development, because primarily this package is meant for unit testing browser in node.js.

## Usage

```javascript
require('sessionstorage-polyfill')
// or
import 'sessionstorage-polyfill'
global.sessionstorage // now has your in memory sessionstorage
```
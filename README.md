# terminal-console

A console that allows rewriting the last logged message. Good for progress bars, status updates, etc.

## Usage

Save this as `presentation.js`.

```javascript
var tc = require('terminal-console'),
    colors = require("colors/safe");

tc.log('terminal-console is ' + colors.random('awesome') + '!');

// this will keep rewriting the previous line.
setInterval(function(){
    tc.relog(colors.bold('terminal-console') +
        ' is ' + colors.random('awesome') + '!');
}, 40);
```

Run it:

```
npm install terminal-console
npm install colors
node presentation.js
```

Be amazed.

## Change Log

* 2015-06-27 v0.1.1 *Bugfixes* for message rewrites.
* 2015-06-27 v0.1.0 Released v0.1.0

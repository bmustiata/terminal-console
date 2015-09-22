# terminal-console

A console that allows rewriting the last logged message. Good for progress bars, status updates, etc.

## Usage

Save this as `presentation.js`.

```javascript
var tc = new require('terminal-console').console,
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

## TypeScript With Node

`terminal-console` is written it TypeScript and comes also with TypeScript definitions. Just:

```typescript
/// <reference path="node_modules/terminal-console/terminal-console.d.ts"/>
```

To get autocomplete, type checking and all the other goodies.

## Change Log

* 2015-09-22 v0.2.0 Switched to d.ts definition.
* 2015-07-06 v0.1.2 *Bugfixes* Added .ts.d definitions.
* 2015-06-27 v0.1.1 *Bugfixes* for message rewrites.
* 2015-06-27 v0.1.0 Released v0.1.0


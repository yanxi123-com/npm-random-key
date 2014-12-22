# nodejs-random-key

## Installation

    $ npm install random-key

## API
### generate([len], [keys])
Generate cryptographically strong pseudo-random string, with given length.
* len: the length of the generated string, default is 16
* keys: optional keys, default is base62, including: 0-9, a-z, A-Z

### generateDigits([len])
Generate random digits, with given length. optional keys: 0-9
* len: the length of the generated string, default is 16

### generateBase30([len])
Generate random string that is easy to read by human, with given length.

optional keys: 1-9, A-Z exclude(E, G, I, J, O) for human read
* len: the length of the generated string, default is 16

## Usage for JS

```javascript
var rand = require("random-key");

rand.generate(); // => eg: wexO23UXGezfTKHc

rand.generate(7); // => TShNQGc

rand.generateDigits(5);  // => 08297

rand.generateBase30(5);  // => K5UJ1
```

## LICENSE

nodejs-random-string is licensed under the BSD license.

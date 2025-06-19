## Features

- Add color to text or background on the console
- Add effects to the text

## Installation

You can install colorfuller using npm:

```bash
npm install colorfuller
```


## Usage

Example 
```js
const colorfuller = require('colorfuller')

const textColor = colorfuller.text('Hello World!', "cyan")
console.log(textColor)
```

### Example Functions

- `colorfuller.txt('Hello World!', "cyan")`  
  Apply cyan text color
- `colorfuller.bg('Hello World!', "yellow")`  
  Apply yellow background

- `colorfuller.effect('Hello World!', "bright")`  
  Apply bright effect on the text

- `colorfuller.list("txt")`  
  Displays on the console the list of all options for colorful.txt(), the other options are "bg" and "effects".
## License

MIT

### Steps to Configure tailwindcss

- Step # 1

> npm install tailwindcss postcss-cli autoprefixer -D

- Step # 2

initialize Tailwind CSS by creating the default configurations

> npx tailwind init tailwind.js --full

- Step # 3

> touch postcss.config.js

put the following configuration in above created file

```js
const tailwindcss = require('tailwindcss')

module.exports = {
	plugins: [
		tailwindcss('./tailwind.js'),
		require('autoprefixer')
	],
}
```

- Step # 4

> mkdir assets && touch main.css tailwind.css

put following configuration in `tailwind.css`

```css
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "tailwindcss/utilities";
```

### How To Configure Your App To Build Your CSS

put the following in `package.json` to build tailwind.css

```js
"scripts": {
    "start": "npm run watch:css && react-scripts start",
    "build": "npm run build:css && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "build:css": "postcss src/assets/tailwind.css -o src/assets/main.css",
    "watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css"
  }
```

[Detailed Article about React + Tailwindcss](https://www.smashingmagazine.com/2020/02/tailwindcss-react-project/)
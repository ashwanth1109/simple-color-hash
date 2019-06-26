# Simple Color Hash

### How to use it?

```js
const input = "Ashwanth A R";
const output = generateColorHash({ str: input }); // #125439
```

It's that simple. The color hash generator returns a hex code value.

If you want to configure more options, you can additionally provide hue, saturation and lightness.

```js
const input = "Ashwanth A R";
const output = generateColorHash({ str: input, hue: {min: 210, max: 450}, saturation: [0.35, 0.5, 0.65], lightness: [0.2, 0.3, 0.4, 0.5] }); // #541245
```
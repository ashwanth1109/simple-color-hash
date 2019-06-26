const standardHashFunction = str => str.split('').reduce((hash, char) => hash + char.charCodeAt(0), 0);

const RGB2HEX = RGBArray => RGBArray.reduce((hex, rgb) => {
  if (rgb < 16) return `${hex}0${rgb.toString(16)}`;
  return hex + rgb.toString(16);
}, '#');

const HSL2RGB = (H, S, L) => {
  const q = L < 0.5 ? L * (1 + S) : L + S - L * S;
  const p = 2 * L - q;
  return [H + 1 / 3, H, H - 1 / 3].map((color) => {
    let preRGB = (color < 0 && color + 1) || (color > 1 && color - 1) || color;
    if (preRGB < 1 / 6) preRGB = p + (q - p) * 6 * preRGB;
    else if (preRGB < 0.5) preRGB = q;
    else if (preRGB < 2 / 3) preRGB = p + (q - p) * 6 * (2 / 3 - preRGB);
    else preRGB = p;
    return Math.round(preRGB * 255);
  });
};

const hsl = (hash, hue, lightness, saturation) => {
  const hueValue = ((hash % 727) * (hue.max - hue.min)) / 727 + hue.min;
  let newHash = parseInt(hash / 360, 10);
  const satValue = saturation[newHash % saturation.length];
  newHash = parseInt(newHash / saturation.length, 10);
  const lightValue = lightness[newHash % lightness.length];
  return [hueValue, satValue, lightValue];
};

const generateColorHash = ({
  str,
  hue = { min: 210, max: 450 },
  lightness = [0.2, 0.3, 0.4, 0.5],
  saturation = [0.35, 0.5, 0.65],
  hashFunction = standardHashFunction
}) => {
  const [H, S, L] = hsl(hashFunction(str), hue, lightness, saturation);
  return RGB2HEX(HSL2RGB(H / 360, S, L));
};

export default generateColorHash;

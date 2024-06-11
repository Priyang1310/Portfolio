const BasicColors = {
    maroon: "#800000",
    red: "#FF0000",
    orange: "#FFA500",
    yellow: "#FFFF00",
    olive: "#808000",
    green: "#008000",
    purple: "#800080",
    fuchsia: "#FF00FF",
    lime: "#00FF00",
    teal: "#008080",
    aqua: "#00FFFF",
    blue: "#0000FF",
    navy: "#000080",
    black: "#000000",
    gray: "#808080",
    silver: "#C0C0C0",
    white: "#FFFFFF"
  };
  
 export const calculateRgba = (color, opacity) => {
    if (Object.keys(BasicColors).includes(color)) {
      color = BasicColors[color];
    }
  
    if (color[0] === "#") {
      color = color.slice(1);
    }
  
    if (color.length === 3) {
      let res = "";
      for (const c of color.split("")) {
        res += c + c;
      }
      color = res;
    }
  
    const rgbValues = (color.match(/.{2}/g) || []).map(hex => parseInt(hex, 16)).join(", ");
  
    return `rgba(${rgbValues}, ${opacity})`;
  };
  
  
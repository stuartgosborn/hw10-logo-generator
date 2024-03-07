function generateSvg(data) {
    let svgCode;
    const text = data.text.toUpperCase();
    const color = data.color;
    const shape = data.shape.toLowerCase();
    
    
    if (shape === 'circle') {
      // Generate SVG code for a circle
      svgCode = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${text}</text>
      </svg>`;
    } else if (shape === 'square') {
      // Generate SVG code for a square
      svgCode = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="150" height="150" fill="${color}" />
        <text x="125" y="145" font-size="60" text-anchor="middle" fill="white">${text}</text>
      </svg>`;
    } else {
      // Generate SVG code for a triangle
      svgCode = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="10,10 190,10 90,180" fill="${color}" />
        <text x="100" y="70" font-size="60" text-anchor="middle" fill="white">${text}</text>
      </svg>`;
    } 
    
    return svgCode

 
};

module.exports = generateSvg;

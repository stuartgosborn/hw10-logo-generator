# hw10-logo-generator
A Node.js command-line application that takes in user input to generate a logo and save it as an SVG file.

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Screen Shot

<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="10,10 190,10 90,180" fill="BLue" />
        <text x="100" y="70" font-size="60" text-anchor="middle" fill="white">SGO</text>
      </svg>


# Links

Github Repository  
https://github.com/stuartgosborn/hw10-logo-generator  

Video Demonstration  
https://app.screencastify.com/v3/watch/u2OUyj1V1UqTyU9R2tfn


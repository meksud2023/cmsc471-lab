 # Lab 1: Getting started with D3.js
 This project is a data visualization lab for CMSC471 that focusses on using D3 selections to manipulate DOM elements and programmatically generating SVG shapes.

## Features Implemented 
* **SVG Canvas Generation:** Dynamic creation of an SVG canvas using D3 selections and attribute configurations.
* **Shape Rendering & Positioning:**
  * Drawn three distinct circles, spaced evenly at 25%, 50%, and 75% of the canvas width, all vertically centered.
  * Drawn a rectangle centered directly above the middle circle.
* **Styling & Attributes:**
  * Applied unique color fills to all shapes.
  * Added uniform stroke outlines to all SVG elements.
  * Dynamically calculated coordinates to maintain shape centering and proportions

## Technologies Used
* HTML5/CSS3
* JavaScript
* D3.js

## How to Run Locally 
Because this project uses D3 and local files, it must be run on a local web server to avoid CORS issues.

**VS Code Live Server (Recommended)**
1. Open the project folder in VS Code.
2. Right-click on `index.html` in the file explorer.
3. Select **Open with Live Server** (or click "Go Live" at the bottom right of the screen).
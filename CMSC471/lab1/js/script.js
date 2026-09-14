console.log('D3 Version:', d3.version);
const width = 600;
const height = 400;
const r = 50; // radius
const squareSize = 50   // size of square both width and height are equal 

const svg = d3.select('#vis')
    .append('svg') 
    .attr('width', width)
    .attr('height', height);

// left circle
svg.append('circle')
    // center of the circle
   .attr('cx', width * 0.25)
   .attr('cy', height/2)
    // radius of the circle
   .attr('r', r)
   .style('fill', 'green')
   .attr('stroke', 'black')

//  Middle circle
svg.append('circle')
    // center of the circle
   .attr('cx', width/2)
   .attr('cy', height/2)
    // radius of the circle
   .attr('r', r)
   .style('fill', 'yellow')
   .attr('stroke', 'black')

// Right circle 
svg.append('circle')
    // center of the circle
   .attr('cx', width * 0.75)
   .attr('cy', height/2)
    // radius of the circle
   .attr('r', r)
   .style('fill', 'red')
   .attr('stroke', 'black')

// The square 
svg.append('rect')
  .attr("width", squareSize)
  .attr("height", squareSize)
  .attr('x', width/2 - squareSize/2)
  .attr('y', height/2 - r - squareSize - 30) 
  .attr('fill', 'yellow')
  .attr('stroke', 'black')

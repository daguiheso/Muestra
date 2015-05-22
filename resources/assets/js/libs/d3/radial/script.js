var w = 300,
	  h = 300;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['CA','Sector','Empresa 1','Empresa 2'];

//Data
var d = [
		  [
				{axis:"VE/EBITDA",value:11.8},
				{axis:"VP/Valor en libras",value:8.7},
				{axis:"VE/Activos",value:2.0},
				{axis:"VE/Ventas",value:0.9}
		  ],
		  [
				{axis:"VE/EBITDA",value:10.0},
				{axis:"Social Networks",value:5.0},
				{axis:"VE/Activos",value:4.0},
				{axis:"VE/Ventas",value:2.0}
		  ],
		  [
				{axis:"VE/EBITDA",value:9},
				{axis:"Social Networks",value:6},
				{axis:"VE/Activos",value:3},
				{axis:"VE/Ventas",value:5}
		  ],
		  [
				{axis:"VE/EBITDA",value:3},
				{axis:"Social Networks",value:7},
				{axis:"VE/Activos",value:1},
				{axis:"VE/Ventas",value:8}
		  ]
		];

//Options for the Radar chart, other than default
var mycfg = {
  radius: 5,
  w: w,
  h: h,
  factor: 1,
  factorLegend: .85,
  levels: 4,
  maxValue: 0,
  radians: 2 * Math.PI,
  opacityArea: 0,
  ToRight: 10,
  TranslateX: 80,
  TranslateY: 30,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("CA VS SECTOR");
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	
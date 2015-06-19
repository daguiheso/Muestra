var salesData=[
	{label:"Basic", color:"#3366CC"},
	{label:"Plus", color:"#DC3912"},
	{label:"Lite", color:"#FF9900"},
	{label:"Elite", color:"#109618"},
	{label:"Delux", color:"#990099"}
];

var svg = d3.select("#body2").append("svg").attr("width",590).attr("height",300);

svg.append("g").attr("id","quotesDonut");

Donut3D.draw("quotesDonut", randomData(), 150, 150, 130, 100, 30, 0);

function randomData(){
	return salesData.map(function(d){ 
		return {label:d.label, value:1000*Math.random(), color:d.color};
	});
}

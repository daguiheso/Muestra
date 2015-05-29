var w = 300,
	h = 300;

var colorscale = d3.scale.category10();

if (document.getElementById("a") === null) {
    
}
else {
    document.getElementById("a").checked = true;
    new_radar_data();
}



function new_radar_data() {
    
    d = []; 

    info_a = [ 
        {axis: "ve/ebitda", value: 11.8 },
        {axis: "vp/libros", value: 8.7},
        {axis: "ve/activos", value: 2},
        {axis: "ve/ventas", value: 0.9}
    ];
    info_b = [ {axis: "ve/ebitda", value: 10 },
        {axis: "vp/libros", value: 5},
        {axis: "ve/activos", value: 4},
        {axis: "ve/ventas", value: 2}
    ];
    info_c = [ 
        {axis: "ve/ebitda", value: 9 },
        {axis: "vp/libros", value: 6},
        {axis: "ve/activos", value: 5},
        {axis: "ve/ventas", value: 3} 
    ];
    info_d = [ 
        {axis: "ve/ebitda", value: 3 }, 
        {axis: "vp/libros", value: 7}, 
        {axis: "ve/activos", value: 2}, 
        {axis: "ve/ventas", value: 4} 
    ];
        
    if (document.getElementById('a').checked) {
        d.push(info_a);
    }
    if (document.getElementById('b').checked) {
        d.push(info_b);
    }
    if (document.getElementById('c').checked) {
        d.push(info_c);
    }
    if (document.getElementById('d').checked) {
        d.push(info_d);
    }
    
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
} 

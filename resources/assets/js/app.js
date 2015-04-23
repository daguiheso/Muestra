(function(){
/*
	
	DATA - TABLES 

*/
	$(function() {

		var table = $('#dataTable').dataTable({
	    "dom": 'C<"clear">lfrtip',
			language: {
		    "emptyTable":     "Datos en la tabla no validos",
		    "info":           "_START_ / _END_ of _TOTAL_ entries",
		    "infoEmpty":      "Showing 0 to 0 of 0 entries",
		    "infoFiltered":   "(filtered from _MAX_ total entries)",
		    "infoPostFix":    "",
		    "thousands":      ",",
		    "lengthMenu":     "Show _MENU_ entries",
		    "loadingRecords": "Cargando...",
		    "processing":     "Procesando...",
		    "search":         "Busqueda:",
		    "zeroRecords":    "No matching records found",
		    "paginate": {
	        "first":      "First",
	        "last":       "Last",
	        "next":       "Siguiente",
	        "previous":   "Anterior"
		    },
		    "aria": {
	        "sortAscending":  ": activate to sort column ascending",
	        "sortDescending": ": activate to sort column descending"
		    }
			},
			"scrollY": "300px"
		});

		var table2 = $('#dataTable2').dataTable({
			language: {
		    "emptyTable":     "Datos en la tabla no validos",
		    "info":           "_START_ / _END_ of _TOTAL_ entries",
		    "infoEmpty":      "Showing 0 to 0 of 0 entries",
		    "infoFiltered":   "(filtered from _MAX_ total entries)",
		    "infoPostFix":    "",
		    "thousands":      ",",
		    "lengthMenu":     "Show _MENU_ entries",
		    "loadingRecords": "Cargando...",
		    "processing":     "Procesando...",
		    "search":         "Busqueda:",
		    "zeroRecords":    "No matching records found",
		    "paginate": {
	        "first":      "First",
	        "last":       "Last",
	        "next":       "Siguiente",
	        "previous":   "Anterior"
		    },
		    "aria": {
	        "sortAscending":  ": activate to sort column ascending",
	        "sortDescending": ": activate to sort column descending"
		    }
			},
			"scrollY": "300px",
      "scrollCollapse": true,
      "paging":         false,
      "sDom": 'T<"clear">lfrtip',
      "oTableTools": {
        "sSwfPath": "assets/swf/copy_csv_xls_pdf.swf",
        "aButtons": [
      		{
            "sExtends":	"copy",
          	"sButtonText": "Copiar"
      		},
      		{
            "sExtends":	"print",
          	"sInfo" : "Por favor, pulse ESC para devolverse",
          	"sButtonText": "Imprimir"
      		},
          {
            "sExtends":    "collection",
            "sButtonText": "Guardar",
            "aButtons":    [ "csv", "xls", "pdf" ]
          }
        ]
    	}
		});

		var table3 = $('#dataTable3').DataTable( {
			language: {
		    "emptyTable":     "Datos en la tabla no validos",
		    "info":           "_START_ / _END_ of _TOTAL_ entries",
		    "infoEmpty":      "Showing 0 to 0 of 0 entries",
		    "infoFiltered":   "(filtered from _MAX_ total entries)",
		    "infoPostFix":    "",
		    "thousands":      ",",
		    "lengthMenu":     "Show _MENU_ entries",
		    "loadingRecords": "Cargando...",
		    "processing":     "Procesando...",
		    "search":         "Busqueda:",
		    "zeroRecords":    "No matching records found",
		    "paginate": {
	        "first":      "First",
	        "last":       "Last",
	        "next":       "Siguiente",
	        "previous":   "Anterior"
		    },
		    "aria": {
	        "sortAscending":  ": activate to sort column ascending",
	        "sortDescending": ": activate to sort column descending"
		    }
			},
      "dom": "Cfrtip",
      "scrollY": "400px",
      "scrollX": true,
      "scrollCollapse": true,
      "paging": false,
			"columns": [
		    { "width": "25%" },
		    null,
		    null,
		    null,
		    null,
		    null,
		    null,
		    null,
		    null,
		    null,
		    null,
		    null,
		    null,
		    null,
		    null
			]
		});
		new $.fn.dataTable.FixedColumns( table3 );

		var table4 = $('#dataTable4').DataTable( {
			language: {
		    "emptyTable":     "Datos en la tabla no validos",
		    "info":           "_START_ / _END_ of _TOTAL_ entries",
		    "infoEmpty":      "Showing 0 to 0 of 0 entries",
		    "infoFiltered":   "(filtered from _MAX_ total entries)",
		    "infoPostFix":    "",
		    "thousands":      ",",
		    "lengthMenu":     "Show _MENU_ entries",
		    "loadingRecords": "Cargando...",
		    "processing":     "Procesando...",
		    "search":         "Busqueda:",
		    "zeroRecords":    "No matching records found",
		    "paginate": {
	        "first":      "First",
	        "last":       "Last",
	        "next":       "Siguiente",
	        "previous":   "Anterior"
		    },
		    "aria": {
	        "sortAscending":  ": activate to sort column ascending",
	        "sortDescending": ": activate to sort column descending"
		    }
			},
      "dom": "Cfrtip",
      "scrollY": "400px",
      "scrollX": true,
      "scrollCollapse": true,
      "paging": false,
			"columns": [
		    { "width": "25%" },
		    null,
		    null,
		    null,
		    null,
		    null,
		    null,
		    null,
		    null,
		    null,
		    null,
		    null,
		    null,
		    null,
		    null
			]
		});
		new $.fn.dataTable.FixedColumns( table4, {
        leftColumns: 1,
        rightColumns: 1
    });

	});
	
/*
	
	HIGHCHARTS - GRAFICAS 

*/
	$(function () {
	    $('#container').highcharts({
	      title: {
	        text: 'Grafica para Indicadores',
	        x: -20 
	      },        
	      xAxis: {
	        title: {
	            text: 'Años'
	        },
	        categories: ['2009', '2010', '2011', '2012', '2013']
	      },
	      yAxis: {
	        title: {
	            text: 'Prueba'
	        },
	        plotLines: [{
	            value: 0,
	            width: 1,
	            color: '#808080'
	        }]
	      },
	      tooltip: {
	        valueSuffix: ''
	      },
	      legend: {
	        layout: 'vertical',
	        align: 'right',
	        verticalAlign: 'middle',
	        borderWidth: 0
	      },
	      series: [
	        {
	            name: 'Entidad',
	            type: 'spline',
	            data: [0, 8, 84, -26, 18]
	        },
	        {
	            name: 'Sector',
	            type: 'spline',
	            data: [21, 30, 22, 9, 2]
	        }
	      ]
	    });
	});
  function getvalue(val) {
		if(val == 0){
			return "VE/EBIDDA";
		}
			if(val == 90){
			return "VE/VENTAS";
		}
		if(val == 180){
			return "VE/ACTIVOS";
		}
		if(val == 270){
			return "VE/VALOR ACTIVOS";
		}
	}; 

	$('#container2').highcharts({
    chart: {
        polar: true
    },

    title: {
        text: 'Grafica Spider'
    },

    pane: {
        startAngle: 0,
        endAngle: 360,
        size: '120%'
    },        
    xAxis: {
        tickInterval: 90,
        min: 0,
        max: 360,
        labels: {
            formatter: function () {
                return getvalue(this.value);
            }
    		},
				lineWidth: 0
    },
    yAxis: {
        min: 0,
				gridLineWidth: 0
    },
    plotOptions: {
        series: {
            pointStart: 0,
            pointInterval: 90
        },
        column: {
            pointPadding: 0,
            groupPadding: 0
        }
    },
    series: [
      {
        type: 'line',
        name: 'Empresa1',
        data: [50, 20, 20, 12]
    	}, 
      {
        type: 'line',
        name: 'Line',
        data: [40, 25, 18, 24]
      }
    ]
	});
	
	$('#container3').highcharts({
	        chart: {
	            type: 'pie',
	            options3d: {
	                enabled: true,
	                alpha: 45
	            }
	        },
	        title: {
	            text: 'D PIE'
	        },
	        subtitle: {
	            text: '3D PIE'
	        },
	        plotOptions: {
	            pie: {
	                innerSize: 100,
	                depth: 45
	            }
	        },
	        series: [{
	            name: 'Delivered amount',
	            data: [
	                ['Bananas', 8],
	                ['Kiwi', 3],
	                ['Mixed nuts', 1],
	                ['Oranges', 6],
	                ['Apples', 8],
	                ['Pears', 4],
	                ['Clementines', 4],
	                ['Reddish (bag)', 1],
	                ['Grapes (bunch)', 1]
	            ]
	        }]
	});
	$('#container4').highcharts({
	        chart: {
	            type: 'column',
	            margin: 75,
	            options3d: {
	                enabled: true,
	                alpha: 10,
	                beta: 25,
	                depth: 70
	            }
	        },
	        title: {
	            text: '3D Barras'
	        },
	        subtitle: {
	            text: 'Notice the difference between a 0 value and a null point'
	        },
	        plotOptions: {
	            column: {
	                depth: 25
	            }
	        },
	        xAxis: {
	            categories: Highcharts.getOptions().lang.shortMonths
	        },
	        yAxis: {
	            title: {
	                text: null
	            }
	        },
	        series: [{
	            name: 'Sales',
	            data: [2, 3, null, 4, 0, 5, 1, 4, 6, 3]
	        }]
	});

	$('#container5').highcharts({

	        chart: {
	            type: 'column',
	            options3d: {
	                enabled: true,
	                alpha: 0,
	                beta: 0,
	                viewDistance: 10
	            },
	            marginTop: 80,
	            marginRight: 40
	        },

	        title: {
	            text: 'Grafica de Tarro'
	        },

	        xAxis: {
	            categories: ['Ingresos', 'Costos', 'Gastos Operación', 'EBITDA', 'Impuestos', 'Capital de Trabajo', 'Otros', 'CAPEX', 'FCL']
	        },

	        yAxis: {
	            allowDecimals: false,
	            min: 0,
	            title: {
	                text: 'Number of fruits'
	            }
	        },

	        tooltip: {
	            headerFormat: '<b>{point.key}</b><br>',
	            pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
	        },

	        plotOptions: {
	            column: {
	                stacking: 'normal',
	                depth: 10
	            }
	        },

	        series: [{
	            name: 'Col1',
	            data: [100, 86.2, 5.4, 8.3, 2.5, 1.7, -0.7, 1.1, 3.8],
	            stack: 'male',            
	        }, {
	            name: 'Col2',
	            data: [0, 13.8, 8.3, 0, 5.9, 4.2, 5.0, 3.8, 0],
	            stack: 'male',
	            color: 'white'
	        }]
	});

	$(function () {
		$('pre code').each(function(i, block) {
	   hljs.highlightBlock(block);
	 });
	})

	$(function () {
		var radarChartData = {
				labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
				datasets: [
					{
						label: "My First dataset",
						fillColor: "rgba(220,220,220,0.2)",
						strokeColor: "rgba(220,220,220,1)",
						pointColor: "rgba(220,220,220,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(220,220,220,1)",
						data: [65,59,90,81,56,55,40]
					},
					{
						label: "My Second dataset",
						fillColor: "rgba(151,187,205,0.2)",
						strokeColor: "rgba(151,187,205,1)",
						pointColor: "rgba(151,187,205,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(151,187,205,1)",
						data: [28,48,40,19,96,27,100]
					}
				]
			};

			myRadar = new Chart(document.getElementById("canvas").getContext("2d")).Radar(radarChartData, {
					responsive: true
			});

			Chart.defaults.global = {
			    // Boolean - Whether to animate the chart
			    animation: true,

			    // Number - Number of animation steps
			    animationSteps: 60,

			    // String - Animation easing effect
			    // Possible effects are:
			    // [easeInOutQuart, linear, easeOutBounce, easeInBack, easeInOutQuad,
			    //  easeOutQuart, easeOutQuad, easeInOutBounce, easeOutSine, easeInOutCubic,
			    //  easeInExpo, easeInOutBack, easeInCirc, easeInOutElastic, easeOutBack,
			    //  easeInQuad, easeInOutExpo, easeInQuart, easeOutQuint, easeInOutCirc,
			    //  easeInSine, easeOutExpo, easeOutCirc, easeOutCubic, easeInQuint,
			    //  easeInElastic, easeInOutSine, easeInOutQuint, easeInBounce,
			    //  easeOutElastic, easeInCubic]
			    animationEasing: "easeOutQuart",

			    // Boolean - If we should show the scale at all
			    showScale: true,

			    // Boolean - If we want to override with a hard coded scale
			    scaleOverride: false,

			    // ** Required if scaleOverride is true **
			    // Number - The number of steps in a hard coded scale
			    scaleSteps: null,
			    // Number - The value jump in the hard coded scale
			    scaleStepWidth: null,
			    // Number - The scale starting value
			    scaleStartValue: null,

			    // String - Colour of the scale line
			    scaleLineColor: "rgba(0,0,0,.1)",

			    // Number - Pixel width of the scale line
			    scaleLineWidth: 1,

			    // Boolean - Whether to show labels on the scale
			    scaleShowLabels: true,

			    // Interpolated JS string - can access value
			    scaleLabel: "<%=value%>",

			    // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
			    scaleIntegersOnly: true,

			    // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
			    scaleBeginAtZero: false,

			    // String - Scale label font declaration for the scale label
			    scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

			    // Number - Scale label font size in pixels
			    scaleFontSize: 12,

			    // String - Scale label font weight style
			    scaleFontStyle: "normal",

			    // String - Scale label font colour
			    scaleFontColor: "#666",

			    // Boolean - whether or not the chart should be responsive and resize when the browser does.
			    responsive: false,

			    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
			    maintainAspectRatio: true,

			    // Boolean - Determines whether to draw tooltips on the canvas or not
			    showTooltips: true,

			    // Function - Determines whether to execute the customTooltips function instead of drawing the built in tooltips (See [Advanced - External Tooltips](#advanced-usage-custom-tooltips))
			    customTooltips: false,

			    // Array - Array of string names to attach tooltip events
			    tooltipEvents: ["mousemove", "touchstart", "touchmove"],

			    // String - Tooltip background colour
			    tooltipFillColor: "rgba(0,0,0,0.8)",

			    // String - Tooltip label font declaration for the scale label
			    tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

			    // Number - Tooltip label font size in pixels
			    tooltipFontSize: 22,

			    // String - Tooltip font weight style
			    tooltipFontStyle: "normal",

			    // String - Tooltip label font colour
			    tooltipFontColor: "#fff",

			    // String - Tooltip title font declaration for the scale label
			    tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

			    // Number - Tooltip title font size in pixels
			    tooltipTitleFontSize: 14,

			    // String - Tooltip title font weight style
			    tooltipTitleFontStyle: "bold",

			    // String - Tooltip title font colour
			    tooltipTitleFontColor: "#fff",

			    // Number - pixel width of padding around tooltip text
			    tooltipYPadding: 6,

			    // Number - pixel width of padding around tooltip text
			    tooltipXPadding: 6,

			    // Number - Size of the caret on the tooltip
			    tooltipCaretSize: 8,

			    // Number - Pixel radius of the tooltip border
			    tooltipCornerRadius: 6,

			    // Number - Pixel offset from point x to tooltip edge
			    tooltipXOffset: 10,

			    // String - Template string for single tooltips
			    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

			    // String - Template string for multiple tooltips
			    multiTooltipTemplate: "<%= value %>",

			    // Function - Will fire on animation progression.
			    onAnimationProgress: function(){},

			    // Function - Will fire on animation completion.
			    onAnimationComplete: function(){}
			},
			{
				scaleShowLine : true,
				angleShowLineOut : false,
				angleLineWidth : 5,
				pointLabelFontSize : 20
			}
	})

})();




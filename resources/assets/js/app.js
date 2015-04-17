(function(){

/*
	
	DATA - TABLES 

*/
	$(function(){
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

        
			//
			
			//
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
	        }]
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
	            color: 'gray'
	        }]
	    });

})();




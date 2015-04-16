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
			    },
			}
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
			"scrollY":        "200px",
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
})();




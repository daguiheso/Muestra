(function() {

	hljs.initHighlightingOnLoad();

	// Cerrar / Expandir Menu
	var $main = $("#main"),
	    $content = $("#content"),
	    $btnexpmain = $("#btn-exp-main"),
	    $btncollapmain = $("#btn-collap-main");
	    
	function collapsedMenu() {
	    $main.animate({
	    	width: "60px"
	    });
	    $btnexpmain.show();
	    $btncollapmain.hide();
	    $content.animate({
	    	marginLeft: "60px"
	    });
	    document.getElementById("CA").innerHTML = "CA";
	    document.getElementById("btn-collapsed-diag").innerHTML = "D";
	    document.getElementById("btn-collapsed-proj").innerHTML = "P";
	    document.getElementById("btn-collapsed-val").innerHTML = "V";
	    return false;
	} 
	function expandMenu() {  
	    $main.animate({
	    	width: "210px"
	    });
	    $btncollapmain.show();
	    $btnexpmain.hide();
	    $content.animate({
	    	marginLeft: "210px"
	    });
	    document.getElementById("CA").innerHTML = "<p>PELLENTENQUE <br> HABITAN S.A.S</p> <p>Sector: Suspendisse dui leo</p>";
	    document.getElementById("btn-collapsed-diag").innerHTML = "DIAGNÓSTICO <br> CA vs CS vs SD vs S";
	    document.getElementById("btn-collapsed-proj").innerHTML = "PROYECCIÓN";
	    document.getElementById("btn-collapsed-val").innerHTML = "VALORACIÓN";
	    return false;
	}     

	//Eventos

	$btnexpmain.click(expandMenu);
	$btncollapmain.click(collapsedMenu);








	// Efecto acordion Tablas 
	var $elements = $(".tr-collapsed"),
			$btnCollapsed = $("#btn-collapsed"),
			$ocultar = $('.ocultar');
	    
	function collapsedElements() {
	    $elements.slideToggle();
	    $ocultar.css(	"fontSize", "0" );
	    return false;
	} 	

	// Eventos
	$btnCollapsed.click(collapsedElements);








	// Efecto acordion Menu
	var $subMainDiag = $(".submain-diag"),
			$btnCollapDiag = $("#btn-collapsed-diag"),
			$subMainProj = $(".submain-proj"),
			$btnCollapProj = $("#btn-collapsed-proj"),
			$subMainVal = $(".submain-val"),
			$btnCollapVal = $("#btn-collapsed-val");


	function collapsedDiagnostic() {
	    $subMainDiag.slideToggle();
	    return false;
	} 	   
	function collapsedProjection() {
	    $subMainProj.slideToggle();
	    return false;
	}
	function collapsedValuation() {
	    $subMainVal.slideToggle();
	    return false;
	}

	// Eventos SubMain
	$btnCollapDiag.click(collapsedDiagnostic);
	$btnCollapProj.click(collapsedProjection);
	$btnCollapVal.click(collapsedValuation);






/*
	
	DATA - TABLES 

*/
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
		            "aButtons": [ "csv", "xls", "pdf" ]
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
  		dom: 'C<"clear">lfrtip',
		colVis: {
			exclude: [],
			groups: [
				{
					title: "2013-2017",
					columns: [ 3, 4, 5, 6, 7 ]
				},
				{
					title: "2018-2022",
					columns: [ 8, 9, 10, 11, 12 ]
				}
			]
		},
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

  	var table5 = $('#dataTable5').dataTable({
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
	  	    "zeroRecords":    "No matching records found"  	    
	  	},
	  	"paging": false,
	  	"ordering": false
  	});
	
	
/*
	
	HIGHCHARTS - GRAFICAS 

*/
	
})();




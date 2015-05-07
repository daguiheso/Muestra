(function() {

	hljs.initHighlightingOnLoad();
	// Variables Cerrar / Expandir Menu
	var $main = $("#main"),
	    $content = $("#content"),
	    $btnexpmain = $("#btn-exp-main"),
	    $btncollapmain = $("#btn-collap-main"),
	    $areaCA = $("#CA"),
	    $indicator = $(".indicator"),
	    $stateResult = $(".state-result"),
	    $balanceGen = $(".balance-gen"),
	    $cashFlow = $(".cash-flow");
	// Variables Efecto acordion Menu
	var	$btnCollapDiag = $("#btn-collapsed-diag"),
		$btnCollapProj = $("#btn-collapsed-proj"),
		$btnCollapVal = $("#btn-collapsed-val"),
	    $subMainDiag = $(".submain-diag"),
		$subMainProj = $(".submain-proj"),
		$subMainVal = $(".submain-val");

	// Colapsar Menu
	function collapsedMenu() {
	    $main.animate({
	    	width: "60px"
	    });
	    $btnexpmain.show();
	    $btncollapmain.hide();
	    $content.animate({
	    	marginLeft: "60px"
	    });
	    $areaCA.html("CA");
	    $indicator.html("I");
	    $stateResult.html("ER");
	    $balanceGen.html("BG");
	    $cashFlow.html("FC");
	    $subMainDiag.addClass("center-text");
	    $subMainProj.addClass("center-text");
	    $subMainVal.addClass("center-text");
	    return false;
	} 
	// Expandir Menu
	function expandMenu() {  
	    $main.animate({
	    	width: "210px"
	    });
	    $btncollapmain.show();
	    $btnexpmain.hide();
	    $content.animate({
	    	marginLeft: "210px"
	    });
	    $areaCA.html("<p>PELLENTENQUE <br> HABITAN S.A.S</p> <p>Sector: Suspendisse dui leo</p>");
	    $indicator.html("Indicadores");
	    $stateResult.html("Estado de Resultado");
	    $balanceGen.html("Balance General");
	    $cashFlow.html("Flujo de Caja");
	    $subMainDiag.removeClass("center-text");
	    $subMainProj.removeClass("center-text");
	    $subMainVal.removeClass("center-text");
	    return false;
	}     
	// Colapsar y Expandir sub-menu Diagnostico
	function collapextendDiagnostic() {
	    $subMainDiag.slideToggle();
	    return false;
	} 	   
	// Colapsar y Expandir sub-menu Proyección
	function collapextendProjection() {
	    $subMainProj.slideToggle();
	    return false;
	}
	// Colapsar y Expandir sub-menu Valoración
	function collapextendValuation() {
	    $subMainVal.slideToggle();
	    return false;
	}
	//Eventos
	$btncollapmain.click(collapsedMenu);
	$btnexpmain.click(expandMenu);
	$btnCollapDiag.click(collapextendDiagnostic);
	$btnCollapProj.click(collapextendProjection);
	$btnCollapVal.click(collapextendValuation);








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




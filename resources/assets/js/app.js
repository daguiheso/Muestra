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
	    $cashFlow = $(".cash-flow"),
	    $showhideCatg = $(".title-category"),
	    $iconCatg = $(".icon-category");
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
	    	width: "55px"
	    });
	    $btnexpmain.show();
	    $btncollapmain.hide();	    
	    $areaCA.html("CA");
	    $indicator.html("I");
	    $stateResult.html("ER");
	    $balanceGen.html("BG");
	    $cashFlow.html("FC");
	    $subMainDiag.addClass("center-text");
	    $subMainProj.addClass("center-text");
	    $subMainVal.addClass("center-text");
	    $showhideCatg.toggle();
	    $iconCatg.css({
	    	"position" : "relative",
	    	"left" : "0",
	    	"top" : ".5rem"
	    });
	    return false;
	} 
	// Expandir Menu
	function expandMenu() {  
	    $main.animate({
	    	width: "210px"
	    });
	    $btncollapmain.show();
	    $btnexpmain.hide();	    
	    $areaCA.html("<p>PELLENTENQUE <br> HABITAN S.A.S</p> <p>Sector: Suspendisse dui leo</p>");
	    $indicator.html("Indicadores");
	    $stateResult.html("Estado de Resultado");
	    $balanceGen.html("Balance General");
	    $cashFlow.html("Flujo de Caja");
	    $subMainDiag.removeClass("center-text");
	    $subMainProj.removeClass("center-text");
	    $subMainVal.removeClass("center-text");
	    $showhideCatg.toggle();
	    $iconCatg.css({
	    	"position" : "absolute",
	    	"left" : "1.5rem",
	    	"top" : "initial"
	    });
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
	    $ocultar.slideToggle();
	    return false;
	} 	

	// Eventos
	$btnCollapsed.click(collapsedElements);














/*
	
	DATA - TABLES 

*/
 	$('table.pipoca').dataTable({
 			
 	});
	var table = $('#dataTable').dataTable({
		language: {
		    "emptyTable":     "Datos en la tabla no validos",
		    "infoPostFix":    "",
		    "thousands":      ",",
		    "loadingRecords": "Cargando...",
		    "processing":     "Procesando...",
		    "search":         "Busqueda:",
		    "zeroRecords":    "No matching records found",
		    "paginate": {
		        "first":        "First",
		        "last":         "Last",
		        "next":         "Siguientes",
		        "previous":     "Anterior"
	    	}
		},
		colVis: {
			"buttonText": "Mostrar/Ocultar Compañias",
			exclude: ['all'],
			groups: [
				{
					title: "PELLENTENQUE HABITANTS",
					columns: [ 2, 3 ]
				},
				{
					title: "Compañia 1",
					columns: [ 4, 5 ]
				},
				{
					title: "Compañia 2",
					columns: [ 6, 7 ]
				},
				{
					title: "Compañia 3",
					columns: [ 8, 9 ]
				},
				{
					title: "Compañia 4",
					columns: [ 10, 11 ]
				},
				{
					title: "Compañia 5",
					columns: [ 12, 13 ]
				}
			]
		},
    	"paging": false,
		"ordering": false,
    	"info":     false,
    	"dom": 'C<"clear">lfrtip',		
    	"scrollCollapse": true,
		"scrollX": "100%"
		//"responsive": true
	});
	new $.fn.dataTable.FixedColumns( table, {
    	leftColumns: 1,
    	leftColumns: 2
  	});
	// new $.fn.dataTable.FixedColumns( table );

	var table2 = $('#dataTable2').dataTable({		
		language: {
	    "emptyTable":     "Datos en la tabla no validos",
	    "infoPostFix":    "",
	    "thousands":      ",",
	    "loadingRecords": "Cargando...",
	    "processing":     "Procesando...",
	    "search":         "Busqueda:",
	    "zeroRecords":    "No matching records found",
	    "paginate": {
        "first":        "First",
        "last":         "Last",
        "next":         "Siguientes",
        "previous":     "Anterior"
    	}
		},
		"ordering": false,
    "info":     false,
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
	    "infoPostFix":    "",
	    "thousands":      ",",
	    "loadingRecords": "Cargando...",
	    "processing":     "Procesando...",
	    "search":         "Busqueda:",
	    "zeroRecords":    "No matching records found",
	    "paginate": {
        "first":        "First",
        "last":         "Last",
        "next":         "Siguientes",
        "previous":     "Anterior"
    	}
		},
		"ordering": false,
    "info":     false,
  	dom: 'C<"clear">lfrtip',
		colVis: {
			"buttonText": "Ocultar Años",
			exclude: ['all'],
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
		"paging": false		
	});
	new $.fn.dataTable.FixedColumns( table3 );

	var table4 = $('#dataTable4').DataTable( {	
	  language: {
	    "emptyTable":     "Datos en la tabla no validos",
	    "infoPostFix":    "",
	    "thousands":      ",",
	    "loadingRecords": "Cargando...",
	    "processing":     "Procesando...",
	    "search":         "Busqueda:",
	    "zeroRecords":    "No matching records found",
	    "paginate": {
        "first":        "First",
        "last":         "Last",
        "next":         "Siguientes",
        "previous":     "Anterior"
    	}
		},
		"ordering": false,
    "info":     false,	
		"dom": "Cfrtip",
		"scrollY": "400px",
		"scrollX": true,
		"scrollCollapse": true,
		"paging": false,		
		colVis: {
			"buttonText": "Expandir/Comprimir",
			exclude: ['all'],
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
	});
	new $.fn.dataTable.FixedColumns( table4, {
    	leftColumns: 1,
    	rightColumns: 1
  	});

	var table5 = $('#dataTable5').dataTable({ 
		"sDom": '<"top"i>rt<"bottom"flp><"clear">',
	  language: {
	    "emptyTable":     "Datos en la tabla no validos",
	    "infoPostFix":    "",
	    "thousands":      ",",
	    "loadingRecords": "Cargando...",
	    "processing":     "Procesando...",
	    "search":         "Busqueda:",
	    "zeroRecords":    "No matching records found",
	    "paginate": {
        "first":        "First",
        "last":         "Last",
        "next":         "Siguientes",
        "previous":     "Anterior"
    	}
		},
		"ordering": false,
    "info":     false, 		
  	"paging": false,
	});
	
	
/*
	
	HIGHCHARTS - GRAFICAS 

*/
	
})();




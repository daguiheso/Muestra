(function() {

	hljs.initHighlightingOnLoad();
	



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




	// Add Comapnies - Compare

	var $formAdd = $(".form-addCompany").first(),
		$list = $("#companies-select"),
		$btnAddCompany = $(".add-company");

	function addForm(){ 
		$clone = $formAdd.clone();
		$list.prepend($clone);

		return false;
	}

	$btnAddCompany.click(addForm);




/*
	
	DATA - TABLES 

*/
		// var table9 = $('#dataTable9').dataTable({
			 			
		// 	"ordering": false,
		//     "searching" : false,
		// 	"scrollX": false,
		//     //"scrollCollapse": true,
		//     "paging": false,
		//     "info": false,
		//     "autoWidth": false
		// });
	var table = $('#dataTable3byCompany').dataTable({
		
		colVis: {
			"buttonText": "Mostrar/Ocultar Compañias",
			"bRestore": true,
      "sRestore": "Revertir",
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
    "dom": 'C<"clear">ti',		
		"ordering": false,
    "searching" : false,
		"scrollX": "100%",
    "scrollCollapse": true,
    "paging": false,
    "info": false
	});
	

	var table2 = $('#dataTable3byYears').dataTable({
		
		colVis: {
			"buttonText": "Mostrar/Ocultar Años",
			"bRestore": true,
      "sRestore": "Revertir",
			exclude: ['all'],
			groups: [
				{
					title: "2014 - 2018",
					columns: [ 4, 5, 6, 7, 8 ]
				},
				{
					title: "2019 - 2023",
					columns: [ 9, 10, 11, 12, 13 ]
				}				
			]
		},
    "dom": 'C<"clear">ti',		
		"ordering": false,
    "searching" : false,
		"scrollX": "100%",
    "scrollCollapse": true,
    "paging": false,
    "info": false
	});

	var table3 = $('#dataTable3Tab1').dataTable({
		
		colVis: {
			"buttonText": "Mostrar/Ocultar Años",
			"bRestore": true,
      "sRestore": "Revertir",
			exclude: ['all'],
			groups: [
				// {
				// 	title: "2014 - 2018",
				// 	columns: [ 2, 3, 4, 5, 6 ]
				// },
				{
					title: "2019 - 2023",
					columns: [ 7, 8, 9, 10, 11 ]
				}				
			]
		},
    "dom": 'C<"clear">ti',		
		"ordering": false,
    "searching" : false,
		"scrollX": "true",
    "scrollCollapse": true,
    "paging": false,
    "info": false
	});
	new $.fn.dataTable.FixedColumns(table3, {
		leftColumns: 1,
    leftColumns: 2
	});

	var table4 = $('#dataTable3Tab2').dataTable({
		
		colVis: {
			"buttonText": "Mostrar/Ocultar Años",
			"bRestore": true,
      "sRestore": "Revertir",
			exclude: ['all'],
			groups: [
				{
					title: "2014 - 2018",
					columns: [ 4, 5, 6, 7, 8 ]
				},
				{
					title: "2019 - 2023",
					columns: [ 9, 10, 11, 12, 13 ]
				}				
			]
		},
    "dom": 'C<"clear">ti',		
		"ordering": false,
    "searching" : false,
		"scrollX": "100%",
    "scrollCollapse": true,
    "paging": false,
    "info": false
	});
	new $.fn.dataTable.FixedColumns( table4, {
    leftColumns: 1,
    leftColumns: 2
  });
	table4.columns.adjust().draw();
	 $('#dataTable3Tab2').on( 'column-sizing.dt', function ( e, settings ) {
		    console.log( 'Column width recalculated in table' );
		});

  var table5 = $('#dataTable3Tab3').dataTable({
		
		colVis: {
			"buttonText": "Mostrar/Ocultar Años",
			"bRestore": true,
      "sRestore": "Revertir",
			exclude: ['all'],
			groups: [
				{
					title: "2014 - 2018",
					columns: [ 4, 5, 6, 7, 8 ]
				},
				{
					title: "2019 - 2023",
					columns: [ 9, 10, 11, 12, 13 ]
				}				
			]
		},
    "dom": 'C<"clear">ti',		
		"ordering": false,
    "searching" : false,
		"scrollX": "100%",
    "scrollCollapse": true,
    "paging": false,
    "info": false
	});
	new $.fn.dataTable.FixedColumns( table5, {
    leftColumns: 1,
    leftColumns: 2
  });
	// table.columns.adjust().draw();
	// $('#dataTable').on( 'column-sizing.dt', function ( e, settings ) {
	//     console.log( 'Column width recalculated in table' );
	// } );
	// new $.fn.dataTable.FixedColumns( table, {
 //    	leftColumns: 1,
 //    	leftColumns: 2
 //  	});
	// new $.fn.dataTable.FixedColumns( table );

	// var table2 = $('#dataTable2').dataTable({		
	// 	language: {
	//     "emptyTable":     "Datos en la tabla no validos",
	//     "infoPostFix":    "",
	//     "thousands":      ",",
	//     "loadingRecords": "Cargando...",
	//     "processing":     "Procesando...",
	//     "search":         "Busqueda:",
	//     "zeroRecords":    "No matching records found",
	//     "paginate": {
 //        "first":        "First",
 //        "last":         "Last",
 //        "next":         "Siguientes",
 //        "previous":     "Anterior"
 //    	}
	// 	},
	// 	"ordering": false,
 //    "info":     false,
	// 	"scrollY": "300px",
 //    "scrollCollapse": true,
 //    "paging":         false,
 //    "sDom": 'T<"clear">lfrtip',
 //    "searching" : false,
 //    "oTableTools": {
 //      "sSwfPath": "assets/swf/copy_csv_xls_pdf.swf",
 //      "aButtons": [
 //    		{
 //            "sExtends":	"copy",
 //          	"sButtonText": "Copiar"
 //    		},
 //    		{
 //            "sExtends":	"print",
 //          	"sInfo" : "Por favor, pulse ESC para devolverse",
 //          	"sButtonText": "Imprimir"
 //    		},
 //        {
 //            "sExtends":    "collection",
 //            "sButtonText": "Guardar",
 //            "aButtons": [ "csv", "xls", "pdf" ]
 //        }
 //    	]
 //    }
	// });

	// var table3 = $('#dataTable3').DataTable( {		
	// 	language: {
	//     "emptyTable":     "Datos en la tabla no validos",
	//     "infoPostFix":    "",
	//     "thousands":      ",",
	//     "loadingRecords": "Cargando...",
	//     "processing":     "Procesando...",
	//     "search":         "Busqueda:",
	//     "zeroRecords":    "No matching records found",
	//     "paginate": {
 //        "first":        "First",
 //        "last":         "Last",
 //        "next":         "Siguientes",
 //        "previous":     "Anterior"
 //    	}
	// 	},
	// 	"ordering": false,
 //    "searching" : false,

 //    "info":     false,
 //  	dom: 'C<"clear">lfrtip',
	// 	colVis: {
	// 		"buttonText": "Ocultar Años",
	// 		exclude: ['all'],
	// 		groups: [
	// 			{
	// 				title: "2013-2017",
	// 				columns: [ 3, 4, 5, 6, 7 ]
	// 			},
	// 			{
	// 				title: "2018-2022",
	// 				columns: [ 8, 9, 10, 11, 12 ]
	// 			}
	// 		]
	// 	},
	// 	"scrollY": "400px",
	// 	"scrollX": true,
	// 	"scrollCollapse": true,
	// 	"paging": false		
	// });
	// new $.fn.dataTable.FixedColumns( table3 );

	// var table4 = $('#dataTable4').DataTable( {	
	//   language: {
	//     "emptyTable":     "Datos en la tabla no validos",
	//     "infoPostFix":    "",
	//     "thousands":      ",",
	//     "loadingRecords": "Cargando...",
	//     "processing":     "Procesando...",
	//     "search":         "Busqueda:",
	//     "zeroRecords":    "No matching records found",
	//     "paginate": {
 //        "first":        "First",
 //        "last":         "Last",
 //        "next":         "Siguientes",
 //        "previous":     "Anterior"
 //    	}
	// 	},
	// 	"ordering": false,
 //    "info":     false,	
	// 	"dom": "Cfrtip",
	// 	"scrollY": "400px",
	// 	"scrollX": true,
 //    "searching" : false,

	// 	"scrollCollapse": true,
	// 	"paging": false,		
	// 	colVis: {
	// 		"buttonText": "Expandir/Comprimir",
	// 		exclude: ['all'],
	// 		groups: [
	// 			{
	// 				title: "2013-2017",
	// 				columns: [ 3, 4, 5, 6, 7 ]
	// 			},
	// 			{
	// 				title: "2018-2022",
	// 				columns: [ 8, 9, 10, 11, 12 ]
	// 			}
	// 		]
	// 	},
	// });
	// new $.fn.dataTable.FixedColumns( table4, {
 //    	leftColumns: 1,
 //    	rightColumns: 1
 //  	});

	// var table5 = $('#dataTable5').dataTable({ 
	// 	"sDom": '<"top"i>rt<"bottom"flp><"clear">',
	//   language: {
	//     "emptyTable":     "Datos en la tabla no validos",
	//     "infoPostFix":    "",
	//     "thousands":      ",",
	//     "loadingRecords": "Cargando...",
	//     "processing":     "Procesando...",
	//     "search":         "Busqueda:",
	//     "zeroRecords":    "No matching records found",
	//     "paginate": {
 //        "first":        "First",
 //        "last":         "Last",
 //        "next":         "Siguientes",
 //        "previous":     "Anterior"
 //    	}
	// 	},
	// 	"ordering": false,
 //    "info":     false, 		
 //  	"paging": false,
 //    "searching" : false
	// });
	
	

	
})();




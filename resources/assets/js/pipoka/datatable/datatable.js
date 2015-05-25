(function () {

	var table = $('#dataTable3byCompany').dataTable({
		
		colVis: {
			"buttonText": "Mostrar/Ocultar Compañias",
			"bRestore": true,
      		"sRestore": "TODAS",
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
      		"sRestore": "TODAS",
			exclude: ['all'],
			groups: [				
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
      		"sRestore": "TODAS",
			exclude: ['all'],
			groups: [
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
      		"sRestore": "TODAS",
			exclude: ['all'],
			groups: [				
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
	// $('#dataTable3Tab2').on( 'column-sizing.dt', function ( e, settings ) {
	// 	console.log( 'Column width recalculated in table' );
	// });






    var table6 = $('#dataTableType5').dataTable({ 
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
    "searching" : false
	});








    var table10 = $('#dataTable10').dataTable({
		
		colVis: {
			"buttonText": "Mostrar/Ocultar Años",
			"bRestore": true,
      		"sRestore": "TODAS",
			exclude: ['all'],
			groups: [				
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


	 var table11 = $('#dataTable11').dataTable({
		
		colVis: {
			"buttonText": "Mostrar/Ocultar Años",
			"bRestore": true,
      		"sRestore": "TODAS",
			exclude: ['all'],
			groups: [				
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


	 var table12 = $('#dataTable12').dataTable({
		
		colVis: {
			"buttonText": "Mostrar/Ocultar Años",
			"bRestore": true,
      		"sRestore": "TODAS",
			exclude: ['all'],
			groups: [				
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


	 var table13 = $('#dataTable13').dataTable({
		
		colVis: {
			"buttonText": "Mostrar/Ocultar Años",
			"bRestore": true,
      		"sRestore": "TODAS",
			exclude: ['all'],
			groups: [				
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


})();
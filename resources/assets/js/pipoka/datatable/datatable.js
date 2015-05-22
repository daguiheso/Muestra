(function () {

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
})();
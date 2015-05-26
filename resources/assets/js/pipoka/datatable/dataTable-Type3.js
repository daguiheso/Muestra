/*

	TABLA TIPO 3 - TABLA CON BOTÓN PARA OCULTAR COLUMNAS Y SCROLL HORIZONTAL

*/
(function () {
/*
	TABLA TIPO 3 - # 1 
 */
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
	new $.fn.dataTable.FixedColumns(table, {
		leftColumns: 1,
    	leftColumns: 2
	});
/* 
	TABLA TIPO 3 - # 2 
*/
	var table2 = $('#dataTable3byYears').dataTable({
		
		colVis: {
			"buttonText": "Mostrar/Ocultar Años",
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
	new $.fn.dataTable.FixedColumns(table2, {
		leftColumns: 1,
    	leftColumns: 2
	});
/*  
	TABLA TIPO 3 - # 3 TAB 1 
*/
	var table3 = $('#dataTable3Tab1').dataTable({
		
		colVis: {
			"buttonText": "Mostrar/Ocultar Años",
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
/*  
	TABLA TIPO 3 - # 3 TAB 2
*/
	var table4 = $('#dataTable3Tab2').dataTable({
		
		colVis: {
			"buttonText": "Mostrar/Ocultar Años",
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
})();


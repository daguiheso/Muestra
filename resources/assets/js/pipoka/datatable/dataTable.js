/*

	TABLA TIPO 3 - TABLA CON BOTÓN PARA OCULTAR COLUMNAS Y SCROLL HORIZONTAL

*/
(function () {


/*
	TABLA TIPO 3 - # 1 
 */
	$('#dataTable3byCompany').dataTable({		
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
		"dom": 'CT<"clear">lfrtip',
		tableTools: {
			"aButtons": [ "xls", "pdf" ],
			"sSwfPath": "copy_csv_xls_pdf.swf"
		},
		"ordering": false,
    	"searching" : false,
		"scrollX": "100%",
   	 	"scrollCollapse": true,
    	"paging": false,
    	"info": false
	});
	
/* 
	TABLA TIPO 3 - # 2 
*/
	$('#dataTable3byYears').dataTable({		
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
    	"dom": 'CT<"clear">lfrtip',
    	tableTools: {
			"aButtons": [ "xls", "pdf" ]
		},
		"ordering": false,
    	"searching" : false,
		"scrollX": "100%",
    	"scrollCollapse": true,
    	"paging": false,
    	"info": false
	});	

/*  
	TABLA TIPO 3 - # 3 TAB 1 
*/
	$('#dataTable3Tab1').dataTable({		
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
    	"dom": 'CT<"clear">lfrtip',
    	tableTools: {
			"aButtons": [ "xls", "pdf" ]
		},		
		"ordering": false,
    	"searching" : false,
		"scrollX": "true",
    	"scrollCollapse": true,
    	"paging": false,
    	"info": false
	});	


	$('.tab-pipoka').on('shown.bs.tab', function (e) {
		e.target 
	    e.relatedTarget 
	    
/*  
	TABLA TIPO 3 - # 3 TAB 2
*/
	    $('#dataTable3Tab2').dataTable({
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
			"dom": 'CT<"clear">lfrtip',
	    	tableTools: {
				"aButtons": [ "xls", "pdf" ]
			},			
			"ordering": false,
	    	"searching" : false,
			"scrollX": "true",
	    	"scrollCollapse": true,
	    	"paging": false,
	    	"info": false,
	    	"destroy": true
		});
	});



/*

	TABLA TIPO 4

*/

/*
	TABLA TIPO 4 # 2 - TAB 1.1
*/
    $('#dataTableBg2Tab1').dataTable({
		
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
    	"dom": 'C<"clear">lfrtip',		
		"ordering": false,
    	"searching" : false,
		"scrollX": "100%",
    	"scrollCollapse": true,
    	"paging": false,
    	"info": false
	});
/*
	TABLA TIPO 4 # 2 - TAB 1.2
*/
	$('#dataTableBg2Tab1-2').dataTable({		
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



// Evento que detecta cambio de pestaña 
	$('.tab-pipoka').on('shown.bs.tab', function (e) {
	   e.target 
	   e.relatedTarget 

/*
	TABLA TIPO 4 # 2 - TAB 2.1
*/
	    $('#dataTableBg2Tab2').dataTable({ 
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
	    	"info": false,
	    	"destroy": true
	    });
	    
/*
	TABLA TIPO 4 # 2 - TAB 2.2
*/
	    $('#dataTableBg2Tab2-2').dataTable({		
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
	    	"info": false,
	    	"destroy": true
		});
	});	

})();

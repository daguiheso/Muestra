/*

	TABLA TIPO 4 # 2 - BALANCE GENERAL

*/
(function () {
/*
	TABLA TIPO 4 # 2 - TAB 1.1
*/
    var table1 = $('#dataTableBg2Tab1').dataTable({
		
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
/*
	TABLA TIPO 4 # 2 - TAB 1.2
*/
	var table2 = $('#dataTableBg2Tab1-2').dataTable({
		
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




	$('.tab-pipoka').on('shown.bs.tab', function (e) {
	   e.target // activated tab
	   e.relatedTarget // previous tab

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
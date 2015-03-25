(function(){

	$(function(){
		var table = $('#dataTable').dataTable({
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
			    "search":         "Filtro:",
			    "zeroRecords":    "No matching records found",
			    "paginate": {
			        "first":      "First",
			        "last":       "Last",
			        "next":       "Siguiente",
			        "previous":   "Previa"
			    },
			    "aria": {
			        "sortAscending":  ": activate to sort column ascending",
			        "sortDescending": ": activate to sort column descending"
			    }
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
			    "search":         "Filtro:",
			    "zeroRecords":    "No matching records found",
			    "paginate": {
			        "first":      "First",
			        "last":       "Last",
			        "next":       "Siguiente",
			        "previous":   "Previa"
			    },
			    "aria": {
			        "sortAscending":  ": activate to sort column ascending",
			        "sortDescending": ": activate to sort column descending"
			    }
			},
			"scrollY":        "200px",
	        "scrollCollapse": true,
	        "paging":         false
		});
		//table  .order( [ 1, 'asc' ] ).draw();
	});

})();
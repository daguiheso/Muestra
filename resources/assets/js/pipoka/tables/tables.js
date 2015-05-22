(function () {
	// Efecto acordion Tablas 
	var $elements = $(".tr-collapsed"),
		$btnCollapsed = $("#btn-collapsed"),
		$ocultar = $('.ocultar');

	function collapsedElements() {
	    $elements.toggle();
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
})();
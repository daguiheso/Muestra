(function () {
	// Efecto acordion Tablas 
	var $elements = $(".tr-collapsed"),
		$btnCollapsed = $("#btn-collapsed"),
		$btnCollapsed2 = $("#btn-collapsed2"),
		$ocultar = $('.ocultar');

	function collapsedElements() {
	    $elements.toggle();
	    // $ocultar.slideToggle();
	    return false;
	} 	
	function collapsedElements2() {
	    // $elements.toggle();
	    $ocultar.slideToggle();
	    return false;
	} 

	// Eventos
	$btnCollapsed.click(collapsedElements);
	$btnCollapsed2.click(collapsedElements2);




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
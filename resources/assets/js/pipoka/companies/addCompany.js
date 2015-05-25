(function () {
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
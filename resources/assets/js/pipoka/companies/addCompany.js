(function () {
	// Add Companies - Compare
	var cont = 0;
	var $formAdd = $(".form-addCompany").first(),
		$inputAdd = $(".input-add-company"),
		$list = $("#companies-select"),
		$btnAddCompany = $(".add-company");

	function addForm(){ 
		if ($inputAdd.val() === "") {
			alert("Ingrese Compañia")
		}
		else {			
			while (cont < 4) {
				cont += 1;
				$clone = $formAdd.clone();
				$list.prepend($clone);
				$inputAdd.val("");
				$inputAdd.attr('placeholder','Ingrese una compañia a comparar');
				return false;
			}
		}
	}
	$btnAddCompany.click(addForm);
})();
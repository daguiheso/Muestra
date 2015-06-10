(function () {
	// MOSTRAR/OCULTAR FILAS Y COLUMNAS
	var $btnCollapsed = $("#btn-collapsed-tableValoration"),
		$showHide = $('.tr-Valoration');

	function collapsedElements() {
	    $showHide.slideToggle();
	    return false;
	} 

	$btnCollapsed.click(collapsedElements);
})();
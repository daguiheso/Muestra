(function () {
	// OCULTAR/MOSTRAR  FILAS

	var $btnCollapsedBg1Tab1 = $("#btn-collapsed-bg1Tab1"),
		$showHideBg1Tab1 = $(".tr-bg1-tab1"),	
		$btnCollapsedBg1Tab2 = $("#btn-collapsed-bg1Tab2"),
		$showHideBg1Tab2 = $(".tr-bg1-tab2"),
		$btnCollapsedBg2Tab1 = $("#btn-collapsed-bg2Tab1"),
		$showHideBg2Tab1 = $(".tr-bg2-tab1"),
		$btnCollapsedBg2Tab2 = $("#btn-collapsed-bg2Tab2"),
		$showHideBg2Tab2 = $(".tr-bg2-tab2");

	function collapsedElementsBg1Tab1() {
	    $showHideBg1Tab1.toggle();
	    return false;
	} 
	function collapsedElementsBg1Tab2() {
	    $showHideBg1Tab2.toggle();
	    return false;
	} 
	function collapsedElementsBg2Tab1() {
	    $showHideBg2Tab1.toggle();
	    return false;
	} 
	function collapsedElementsBg2Tab2() {
	    $showHideBg2Tab2.toggle();
	    return false;
	} 		

	// Eventos
	$btnCollapsedBg1Tab1.click(collapsedElementsBg1Tab1);
	$btnCollapsedBg1Tab2.click(collapsedElementsBg1Tab2);
	$btnCollapsedBg2Tab1.click(collapsedElementsBg2Tab1);
	$btnCollapsedBg2Tab2.click(collapsedElementsBg2Tab2);
})();
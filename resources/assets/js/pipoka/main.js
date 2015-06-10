(function() {
	/* VARIBALES ABRIR Y CERRAR MENU */
	var $main = $("#main"),
	    $content = $("#content"),
	    $btnexpmain = $("#btn-exp-main"),
	    $btncollapmain = $("#btn-collap-main"),
	    $areaCA = $("#CA"),
	    $indicator = $(".indicator"),
	    $stateResult = $(".state-result"),
	    $balanceGen = $(".balance-gen"),
	    $cashFlow = $(".cash-flow"),
	    $valCA = $(".val-ca"),
	    $valMS = $(".val-ms"),
	    $showhideCatg = $(".title-category"),
	    $iconCatg = $(".icon-category");
	    $abreviators = $("#abreviators");
	/* VARIABLES ABRIR Y CERRAR SUBMENUS */
	var	$btnCollapDiag = $("#btn-collapsed-diag"),
		$btnCollapProj = $("#btn-collapsed-proj"),
		$btnCollapVal = $("#btn-collapsed-val"),
	    $subMainDiag = $(".submain-diag"),
		$subMainProj = $(".submain-proj"),
		$subMainVal = $(".submain-val");

	/* COLAPSAR Y EXPANDIR MENU */
	function collapsedMenu() {
	    $main.toggleClass('collap');
	    $content.toggleClass('contentTotal');
	    $btncollapmain.show();	   
        $("#main ul li a").toggleClass('collap');
	    $showhideCatg.toggle();
	    $iconCatg.toggleClass('extend');
	    $abreviators.slideToggle();
	    if($main.hasClass('collap') === true){
		    $btnexpmain.show();
		    $btncollapmain.hide();	   
		    $areaCA.html("<span class='icon-info info-icon'></span>");
		    $indicator.html("I");
		    $stateResult.html("ER");
		    $balanceGen.html("BG");
		    $cashFlow.html("FC");
		    $valCA.html("CA");
		    $valMS.html("MS");
	    }
	    else {
		    $btnexpmain.hide();
		    $btncollapmain.show();	   
		    $areaCA.html("<p>PELLENTENQUE <br> HABITAN S.A.S</p> <p style='font-weight:300'>Sector: Suspendisse dui leo</p>");
		    $indicator.html("Indicadores");
		    $stateResult.html("Estado de Resultado");
		    $balanceGen.html("Balance General");
		    $cashFlow.html("Flujo de Caja");
		    $valCA.html("Compañia Analizada");
		    $valMS.html("Múltiplos del Sector");	
	    }
	    return false;
	} 
	/* COLAPSAR Y EXPANDIR SUB-MENU DIAGNOSTICO */
	function collapextendDiagnostic() {
	    if ($(".submain-val").css("display")=="block") {
	    	$subMainVal.slideToggle();
		    $subMainDiag.slideToggle();
	    }
	    else if ($(".submain-proj").css("display")=="block") {
	    	$subMainProj.slideToggle();
		    $subMainDiag.slideToggle();
	    }
	    else {
		    $subMainDiag.slideToggle();
	    }
	    return false;
	} 	   
	/* COLAPSAR Y EXPANDIR SUB-MENU PROYECCION*/	
	function collapextendProjection() {
		if ($(".submain-val").css("display")=="block") {
		    $subMainVal.slideToggle();
	    	$subMainProj.slideToggle();
	    }
	    else if ($(".submain-diag").css("display")=="block") {
		    $subMainDiag.slideToggle();
	    	$subMainProj.slideToggle();
	    }
	    else {
		    $subMainProj.slideToggle();
	    }
	    return false;
	}
	/* COLAPSAR Y EXPANDIR SUB-MENU VALORACION*/
	function collapextendValuation() {
		if ($(".submain-proj").css("display")=="block") {
		    $subMainProj.slideToggle();
	    	$subMainVal.slideToggle();
	    }
	    else if ($(".submain-diag").css("display")=="block") {
		    $subMainDiag.slideToggle();
	    	$subMainVal.slideToggle();
	    }
	    else {
		    $subMainVal.slideToggle();
	    }
	    return false;
	}
	//Eventos
	$btncollapmain.click(collapsedMenu);
	$btnexpmain.click(collapsedMenu);
	$btnCollapDiag.click(collapextendDiagnostic);
	$btnCollapProj.click(collapextendProjection);
	$btnCollapVal.click(collapextendValuation);
	$("#main ul li a").click(collapsedMenu);
})();
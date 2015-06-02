(function() {
	// Variables Cerrar / Expandir Menu
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
	// Variables Efecto acordion Menu
	var	$btnCollapDiag = $("#btn-collapsed-diag"),
		$btnCollapProj = $("#btn-collapsed-proj"),
		$btnCollapVal = $("#btn-collapsed-val"),
	    $subMainDiag = $(".submain-diag"),
		$subMainProj = $(".submain-proj"),
		$subMainVal = $(".submain-val");

/* 

	Colapsar Menu

*/
	function collapsedMenu() {
	    $main.animate({
	    	width: "55px"
	    });
	    // Cambiando content al colapsar menu
	    $content.animate({
	    	paddingLeft: "88px"
	    });
	    $btnexpmain.show();
	    $btncollapmain.hide();	    
	    $areaCA.html("CA");
	    $indicator.html("I");
	    $stateResult.html("ER");
	    $balanceGen.html("BG");
	    $cashFlow.html("FC");
	    $valCA.html("CA");
	    $valMS.html("MS");
	    $indicator.removeClass("submain-expand");
	    $stateResult.removeClass("submain-expand");
	    $balanceGen.removeClass("submain-expand");
	    $cashFlow.removeClass("submain-expand");
	    $valCA.removeClass("submain-expand");
	    $valMS.removeClass("submain-expand");
	    $showhideCatg.toggle();
	    $iconCatg.css({
	    	"position" : "relative",
	    	"left" : "-4px",
	    	"top" : ".5rem",
	    	"line-height" : "1.8rem"
	    });
	    $abreviators.slideToggle();
	    return false;
	} 
/* 

	Expandir Menu
	
*/
	function expandMenu() {  
	    $main.animate({
	    	width: "183px"
	    });
	    // Cambiando content al expandir menu
	    $content.animate({
	    	paddingLeft: "216px"
	    });
	    $btncollapmain.show();
	    $btnexpmain.hide();	    
	    $areaCA.html("<p>PELLENTENQUE <br> HABITAN S.A.S</p> <p style='font-weight:300'>Sector: Suspendisse dui leo</p>");
	    $indicator.html("Indicadores");
	    $stateResult.html("Estado de Resultado");
	    $balanceGen.html("Balance General");
	    $cashFlow.html("Flujo de Caja");
	    $valCA.html("Compañia Analizada");
	    $valMS.html("Múltiplos del Sector");	   
	    $indicator.addClass("submain-expand");
	    $stateResult.addClass("submain-expand");
	    $balanceGen.addClass("submain-expand");
	    $cashFlow.addClass("submain-expand");
	    $valCA.addClass("submain-expand");
	    $valMS.addClass("submain-expand");
	    $showhideCatg.toggle();
	    $iconCatg.css({
	    	"position" : "absolute",
	    	"left" : "1.2rem",
	    	"top" : "initial",
	    	"line-height" : "50px"
	    });
	    $abreviators.slideToggle();

	    return false;
	}     
	// Colapsar y Expandir sub-menu Diagnostico
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
	// Colapsar y Expandir sub-menu Proyección
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
	// Colapsar y Expandir sub-menu Valoración
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
	$btnexpmain.click(expandMenu);
	$btnCollapDiag.click(collapextendDiagnostic);
	$btnCollapProj.click(collapextendProjection);
	$btnCollapVal.click(collapextendValuation);
})();
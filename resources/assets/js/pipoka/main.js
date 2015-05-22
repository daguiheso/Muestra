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
	    $valCAvsS = $(".val-ca-s"),
	    $valCAvsSDvsS = $(".val-ca-sd-s"),
	    $valCAvsCSvsS = $(".val-ca-cs-s"),
	    $valVMS = $(".val-vms"),
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

	// Colapsar Menu
	function collapsedMenu() {
	    $main.animate({
	    	width: "55px"
	    });
	    $btnexpmain.show();
	    $btncollapmain.hide();	    
	    $areaCA.html("CA");
	    $indicator.html("I");
	    $stateResult.html("ER");
	    $balanceGen.html("BG");
	    $cashFlow.html("FC");
	    $valCAvsS.html("CA/S");
	    $valCAvsSDvsS.html("CA/SD/S");
	    $valCAvsCSvsS.html("CA/CS/S");
	    $valVMS.html("VMS");
	    $indicator.removeClass("submain-expand");
	    $stateResult.removeClass("submain-expand");
	    $balanceGen.removeClass("submain-expand");
	    $cashFlow.removeClass("submain-expand");
	    $valCAvsS.removeClass("submain-expand");
	    $valCAvsSDvsS.removeClass("submain-expand");
	    $valCAvsCSvsS.removeClass("submain-expand");
	    $valVMS.removeClass("submain-expand");
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
	// Expandir Menu
	function expandMenu() {  
	    $main.animate({
	    	width: "183px"
	    });
	    $btncollapmain.show();
	    $btnexpmain.hide();	    
	    $areaCA.html("<p>PELLENTENQUE <br> HABITAN S.A.S</p> <p>Sector: Suspendisse dui leo</p>");
	    $indicator.html("Indicadores");
	    $stateResult.html("Estado de Resultado");
	    $balanceGen.html("Balance General");
	    $cashFlow.html("Flujo de Caja");
	    $valCAvsS.html("CA vs S");
	    $valCAvsSDvsS.html("CA vs SD vs S");
	    $valCAvsCSvsS.html("CAvs CS vs S");
	    $valVMS.html("Valoración Multiplos Sector");	   
	    $indicator.addClass("submain-expand");
	    $stateResult.addClass("submain-expand");
	    $balanceGen.addClass("submain-expand");
	    $cashFlow.addClass("submain-expand");
	    $valCAvsS.addClass("submain-expand");
	    $valCAvsSDvsS.addClass("submain-expand");
	    $valCAvsCSvsS.addClass("submain-expand");
	    $valVMS.addClass("submain-expand");
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
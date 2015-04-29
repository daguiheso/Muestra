var elixir = require('laravel-elixir');


elixir(function(mix) {
    mix.less("style.less", "assets/css");

    mix.scripts([
    	"libs/jquery/jquery.js",
    	"libs/bootstrap/bootstrap.js",
    	"libs/datatable/jquery.dataTables.js",
    	"libs/datatable/extensions/TableTools/dataTables.tableTools.js",
        "libs/datatable/extensions/Colvis/dataTables.colVis.js",
    	"libs/datatable/extensions/FixedColumns/dataTables.fixedColumns.js",
        "libs/bootstrap/dataTables.bootstrap.js",
        "libs/highlight/highlight.js",
        "libs/d3/d3.js",
        "libs/d3/radial/RadarCharts.js",
        "libs/d3/radial/script.js",
    	"app.js"
    ], "assets/js", "resources/assets/js");

});
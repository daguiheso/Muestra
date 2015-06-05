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
        "libs/d3/d3.js",
        "libs/d3/radial/RadarCharts.js",
        "libs/d3/radial/script.js",
        "libs/d3/pie/donut3d.js",
        "libs/d3/pie/script.js",
        "libs/d3/lineChart/script.js",
        "libs/d3/tarro/script.js",
        "pipoka/main.js",
        "pipoka/tables/tables.js",
        "pipoka/tables/table-valoracion.js",
        "pipoka/tables/table-balance-general.js",
        "pipoka/companies/addCompany.js",
        "pipoka/datatable/dataTable-Type3.j s",
        "pipoka/datatable/dataTable-Type4.js"
    ], "assets/js", "resources/assets/js");

});
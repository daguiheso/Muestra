var elixir = require('laravel-elixir');


elixir(function(mix) {
    mix.less("style.less", "assets/css");
    mix.scripts([

    ], "resources/assets/js", "assets/js");
});
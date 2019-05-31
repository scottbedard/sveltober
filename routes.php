<?php

$middleware = 'Bedard\Sveltober\Middleware\SveltoberMiddleware';
$path = plugins_path('bedard/sveltober/assets/App.js');

// wrap non-api routes in sveltober middleware
Route::middleware("{$middleware}:{$path}")->group(function() {

    // this route we'll use to get some async data
    Route::get('async', 'Bedard\Sveltober\Http\Controllers\AsyncController@index');
    
    // this route is our catch all, and is pointed at the spa
    Route::get('{any}', function() {})->where('any', '.*');
});

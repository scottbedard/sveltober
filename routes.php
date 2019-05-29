<?php

// route that fetches data
Route::get('async', 'Bedard\Sveltober\Http\Controllers\AsyncController@index');

// catch-all route, for pages that don't require data
Route::get('{any}', 'Bedard\Sveltober\Classes\SvelteController@svelte')->where('any', '.*');
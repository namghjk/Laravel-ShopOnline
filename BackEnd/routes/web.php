<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $exitCode = Artisan::call('route:cache');
    return '<h1>Routes cached</h1>';
});

Route::get('/migrate', function () {
    $exitCode = Artisan::call('migrate:fresh');
    return '<h1>Migrated</h1>';
});

Route::get('/seed', function () {
    $exitCode = Artisan::call('db:seed');
    return '<h1>Seeded</h1>';
});

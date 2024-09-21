<?php

use App\Http\Controllers\api\home\indexController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(["prefix"=> "home","as"=>"home"], function () {
    Route::get("",[indexController::class,"index"])->name("index");
});

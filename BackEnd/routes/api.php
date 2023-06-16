<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ImportController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderDetailController;
use App\Http\Controllers\PartnerController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Models\OrderDetail;
use Illuminate\Support\Facades\Route;
use Spatie\Permission\Models\Role;

Route::post('auth/login', [AuthController::class, 'login'])->name('login');

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('create', [AuthController::class, 'create']);
    Route::post('update', [AuthController::class, 'update']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('updateAvatar', [AuthController::class, 'updateAvatar']);
    Route::post('me', [AuthController::class, 'me']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'roles'
], function ($router) {
    Route::get('view', [RoleController::class, 'view']);
    Route::get('getDetailRole', [RoleController::class, 'getDetailRole']);
    Route::get('getAllPermissions', [RoleController::class, 'getAllPermissions']);
    Route::post('create', [RoleController::class, 'create']);
    Route::post('update', [RoleController::class, 'update']);
    Route::get('delete', [RoleController::class, 'delete']);
    Route::post('giveRoleToUser', [RoleController::class, 'giveRoleToUser']);
    Route::post('removeRoleFromUser', [RoleController::class, 'removeRoleFromUser']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'products'
], function ($router) {
    Route::get('view', [ProductController::class, 'view']);
    Route::post('create', [ProductController::class, 'create']);
    Route::post('update', [ProductController::class, 'update']);
    Route::get('delete', [ProductController::class, 'delete']);

    Route::get('detailProduct', [ProductController::class, 'detailProduct']);
    Route::get('relatedProduct', [ProductController::class, 'relatedProduct']);
    Route::get('highlightsProduct', [ProductController::class, 'highlightsProduct']);
    Route::get('searchByKeyword', [ProductController::class, 'searchByKeyword']);
    Route::get('sortASC', [ProductController::class, 'sortASC']);
    Route::get('sortDESC', [ProductController::class, 'sortDESC']);
    Route::get('filterPrice', [ProductController::class, 'filterPrice']);
    Route::post('search', [ProductController::class, 'search']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'categories'
], function ($router) {
    Route::get('view', [CategoryController::class, 'view']);
    Route::get('detail', [CategoryController::class, 'detail']);
    Route::get('getMenu', [CategoryController::class, 'getMenu']);
    Route::post('create', [CategoryController::class, 'create']);
    Route::post('update', [CategoryController::class, 'update']);
    Route::get('delete', [CategoryController::class, 'delete']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'posts'
], function ($router) {
    Route::get('view', [PostController::class, 'view']);
    Route::get('detail', [PostController::class, 'detail']);
    Route::post('create', [PostController::class, 'create']);
    Route::post('update', [PostController::class, 'update']);
    Route::get('delete', [PostController::class, 'delete']);

    Route::get('homepagePost', [PostController::class, 'homepagePost']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'banners'
], function ($router) {
    Route::get('view', [BannerController::class, 'view']);
    Route::post('create', [BannerController::class, 'create']);
    Route::post('update', [BannerController::class, 'update']);
    Route::get('delete', [BannerController::class, 'delete']);
});

Route::group([
    'prefix' => 'location'
], function ($router) {
    Route::get('getAllProvinces', [LocationController::class, 'getAllProvinces']);
    Route::get('getAllDistrictsByProvinceId', [LocationController::class, 'getAllDistrictsByProvinceId']);
    Route::get('getAllWardsByDistrictId', [LocationController::class, 'getAllWardsByDistrictId']);
});

Route::group(
    [
        'prefix' => 'addresses'
    ],
    function ($router) {
        Route::get('view', [AddressController::class, 'view']);
        Route::post('create', [AddressController::class, 'create']);
        Route::post('update', [AddressController::class, 'update']);
        Route::get('delete', [AddressController::class, 'delete']);
    }
);

Route::group([
    'prefix' => 'orders'
], function ($route) {
    Route::get('getList', [OrderController::class, 'getList']);
    Route::get('all', [OrderController::class, 'all']);
    Route::post('create', [OrderController::class, 'create']);

    Route::get('getListOrderStatuses', [OrderController::class, 'getListOrderStatuses']);
    Route::post('updateStatus', [OrderController::class, 'updateStatus']);

    Route::get('detail', [OrderDetailController::class, 'view']);
});

Route::group([
    'prefix' => 'carts'
], function ($route) {
    Route::get('view', [CartController::class, 'view']);
    Route::post('addToCart', [CartController::class, 'addToCart']);
    Route::post('updateQty', [CartController::class, 'updateQty']);
    Route::post('delete', [CartController::class, 'delete']);
});

Route::group([
    'prefix' => 'partners'
], function ($route) {
    Route::get('view', [PartnerController::class, 'view']);
    Route::post('create', [PartnerController::class, 'create']);
    Route::post('update', [PartnerController::class, 'update']);
    Route::get('delete', [PartnerController::class, 'delete']);
    Route::get('detail', [PartnerController::class, 'detail']);
});

Route::group([
    'prefix' => 'imports'
], function ($route) {
    Route::get('view', [ImportController::class, 'view']);
    Route::get('detail', [ImportController::class, 'detail']);
    Route::post('create', [ImportController::class, 'create']);
    Route::post('update', [ImportController::class, 'update']);
    Route::get('delete', [ImportController::class, 'delete']);
});

Route::group([
    'prefix' => 'users'
], function ($route) {
    Route::get('all', [UserController::class, 'getAllUser']);
    Route::get('lock', [UserController::class, 'lockUser']);
    Route::get('unLockUser', [UserController::class, 'unLockUser']);
});

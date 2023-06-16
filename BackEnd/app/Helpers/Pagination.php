<?php

namespace App\Helpers;

use App\Response\MyResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Response;

class Pagination
{

  public function Pagination(String $table, String $orderBy, String $orderType, Request $request)
  {
    $page = (int) ($request->page && $request->page > 0 ? $request->page : 1);
    $pageSize = (int) ($request->pageSize ? $request->pageSize : 20);

    $skip = (int) (($page - 1) * $pageSize);

    $totalRecord = DB::table($table)->get()->count();
    $totalPage = ceil($totalRecord / $pageSize);

    $data = DB::table($table)->skip($skip)->take($pageSize)->orderBy($orderBy, $orderType)->get();

    return (new MyResponse)->Response(Response::HTTP_OK, null, $data, [
      'pages_total' => $totalPage,
      'current_page' => $page,
      'page_size' => $pageSize,
      'total_records' => count($data->toArray())
    ]);
  }

  public function pagination1($array = [], $page = 1, $pageSize = 20)
  {
    $page = (int) ($page && $page > 0 ? $page : 1);
    $pageSize = (int) ($pageSize ? $pageSize : 20);

    $skip = (int) (($page - 1) * $pageSize);

    $totalRecord = count($array);
    $totalPage = ceil($totalRecord / $pageSize);

    $data = array_slice($array, $skip, $pageSize);

    return (new MyResponse)->Response(Response::HTTP_OK, null, $data, [
      'pages_total' => $totalPage,
      'current_page' => $page,
      'page_size' => $pageSize,
      'total_records' => count($array)
    ]);
  }
}

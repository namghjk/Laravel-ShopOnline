<?php

namespace App\Response;

class MyResponse
{
  public function Response($code = 404, $message = '', $data = [], $additionalData = null)
  {
    return response()->json([
      'code' => $code,
      'message' => $message,
      'data' => $data,
      'additionalData' => $additionalData
    ]);
  }
}

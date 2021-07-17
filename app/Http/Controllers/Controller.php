<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Request;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public $route_name = 'index'; //route name

    public $sortField = 'name'; // default sorting field

    public $sortAsc = true; // default sort direction
    
    /**
     *Check the request is api or not.
     * 
     * @return Boolean
     */
    public function isApi($request)
    {
        return str_starts_with($request->route()->uri,'api');
    }

    /** 
     * Send response json
     * 
     * @return Response
     * */  
    public function sendData($data =null , $message  = '', $status = 200)
    {
        $res = [
            'data' => $data,
            'message' => $message
        ];
        return response()->json($res, $status);
    }
}

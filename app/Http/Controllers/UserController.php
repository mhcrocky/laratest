<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    

    public function __construct(Request $request)
    {
        // $this->route_name = $request->route()->getName();
    }
    public function index(Request $request)
    {
        return view('user.index');
    }

    public function detail(Request $request,User $user)
    {
        return view('user.detail')
            ->with('user',$user);
    }
    public function profile()
    {
        return view('user.profile');
    }
}

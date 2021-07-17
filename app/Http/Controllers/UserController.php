<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    

    public function __construct(Request $request)
    {
        $this->route_name = $request->route()->getName();
    }
    public function index(Request $request)
    {
        if($this->isApi($request)){

            $this->sortField = ($request->sortField) ? $request->sortField : 'name';
            $this->sortAsc = ($request->sortAsc) ? $request->sortAsc : true;

            $users = User::search($request->search)
                ->orderBy($this->sortField, $this->sortAsc ? 'asc' : 'desc')
                ->simplePaginate(10);
            
            return $this->sendData($users);
        }

        return view('user.index');
    }

    public function show(User $user)
    {
        
    }

    public function edit(User $user)
    {   
        dd($user);
    }
}

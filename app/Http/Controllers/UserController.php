<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function apiIndex()
    {
        // Fetch all users
        $users = User::where('role', 'guest')->get();

        // Return a JSON response
        return response()->json($users);
    }

}

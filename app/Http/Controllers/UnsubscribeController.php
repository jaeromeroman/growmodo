<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Response;

class UnsubscribeController extends Controller
{
    public function unsubscribe(User $id)
    {
        Auth::logout();
        
        $id->delete();

        return Response::json(['success' => true]);
    }
}

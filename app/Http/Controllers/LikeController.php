<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class LikeController extends Controller
{
    public function index(Request $request, User $user) {
        $auth = auth()->user();
        $myVenues = $auth->likeVenues()->get();
        return Inertia::render('Likes/Index',['myVenues' => $myVenues]);
    }

    public function store($venueId)
    {
        Auth::user()->like($venueId);
        return redirect('/prefectures/venues/'. $venueId);
    }

    public function destroy($venueId)
    {
        Auth::user()->unlike($venueId);
        return back();
    }

}
<?php namespace Bedard\Sveltober\Http\Controllers;

use Illuminate\Routing\Controller;

class AsyncController extends Controller
{
    public function index()
    {
        return [
            'message' => 'Hello from some asynchronous content!',
        ];
    }
}

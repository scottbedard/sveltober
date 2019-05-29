<?php namespace Bedard\Sveltober\Http\Controllers;

use Bedard\Sveltober\Classes\SvelteController;

class AsyncController extends SvelteController
{
    public function index()
    {
        return $this->svelte([
            'message' => 'Hello from some asynchronous content!',
        ]);
    }
}

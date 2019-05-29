<?php namespace Bedard\Sveltober\Classes;

use Illuminate\Routing\Controller;
use View;
use Symfony\Component\Process\Process;

class SvelteController extends Controller
{
    /**
     * Server side render our sveltober application,
     * or return JSON of this pages initial state.
     */
    public function svelte(array $data = [])
    {
        $ssr = plugins_path('bedard/sveltober/ssr.js');
        $url = request()->path();

        $process = new Process("node {$ssr} {$url}");
        $process->start();
        $process->wait();

        $output = json_decode($process->getOutput(), true);

        return View::make('bedard.sveltober::index', [
            'head' => $output['head'],
            'html' => $output['html'],
        ]);
    }
}
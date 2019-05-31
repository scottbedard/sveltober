<?php namespace Bedard\Sveltober\Middleware;

use Closure;
use Symfony\Component\Process\Process;

class SveltoberMiddleware
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);
        $data = $response->content();

        // if our request has the sveltober header, only return data
        if ($request->headers->has('sveltober')) {
            return $data;
        }

        // otherwise render our page and return the html
        $ssr = plugins_path('bedard/sveltober/ssr.js');
        $url = request()->url();

        $process = new Process("node {$ssr} {$url}");
        $process->start();
        $process->wait();

        $output = $process->getOutput();
        $result = json_decode($output);

        return view('bedard.sveltober::index', ['data' => $data]);
    }
}

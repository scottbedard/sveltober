<?php namespace Bedard\Sveltober;

use System\Classes\PluginBase;

/**
 * Sveltober Plugin Information File
 */
class Plugin extends PluginBase
{
    /**
     * Returns information about this plugin.
     *
     * @return array
     */
    public function pluginDetails()
    {
        return [
            'author' => 'Scott Bedard',
            'description' => 'Cybernetically enhanced October themes.',
            'icon' => 'icon-leaf',
            'name' => 'Sveltober',
        ];
    }
}

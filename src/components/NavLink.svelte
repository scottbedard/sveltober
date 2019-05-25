<script>
    import { Link } from "svelte-routing";

    export let to = '';

    function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
        const active = href === '/' ? isCurrent : isPartiallyCurrent || isCurrent;

        // the object returned here is spread on the anchor element's attributes
        return {
            class: active
                ? 'text-red-400 hover:text-red-600'
                : 'text-grey-400 hover:text-red-600',
        };
    }
</script>

<Link to="{to}" getProps="{getProps}">
    <slot />
</Link>
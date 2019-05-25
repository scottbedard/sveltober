<script>
    import { Link } from "svelte-routing";

    export let to = '';

    function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
        const active = href === '/' ? isCurrent : isPartiallyCurrent || isCurrent;

        // The object returned here is spread on the anchor element's attributes
        if (active) {
            return { class: 'text-red-500' };
        }

        return {}
    }
</script>

<Link to="{to}" getProps="{getProps}">
    <slot />
</Link>
<script>
    import { each } from "svelte/internal";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h1>I LIBRI</h1>

{#each data.records as libro, index}
    <li>
        {index}
        <img src={libro.fields.Copertina[0].thumbnails.small.url} alt="Cover" />
        - {libro.fields.Titolo} ({libro.fields["Titolo Originale"]})
    </li>
{/each}

<div>{@html data.key}</div>

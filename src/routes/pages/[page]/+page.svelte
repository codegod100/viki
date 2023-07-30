<script>
    export let data;
</script>

<h1>{data.page.title}</h1>
{@html data.html}
<div><a href="/edit/{data.page.title}">Edit</a></div>


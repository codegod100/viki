<script>
    export let data;
    let [first, ...rest] = data.pages;
    first = first || {title: data.title}
</script>

<form action="?/edit" method="POST">
    <div><input name="title" type="text" bind:value={first.title} /></div>
    <div>
        <textarea name="body" cols="40" rows="10" bind:value={first.body} />
    </div>
    <input type="hidden" name="id" value={first.id} />
    <input type="submit" /> <a href="/pages/{first.title}">View</a>
</form>

History
{#each rest as page}
    <form action="?/revert" method="POST">
        <input type="hidden" name="body" value={page.body} />
        <input type="hidden" name="title" value={page.title}/>
        <div>
            {page.body} <input type="submit" value="revert" />
            {page.created_at}
        </div>
    </form>
{/each}

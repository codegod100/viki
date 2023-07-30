import { createClient } from '@supabase/supabase-js'
import { PROJECT_URL, API_KEY } from '$env/static/private';
import showdown from "showdown"
import { redirect } from '@sveltejs/kit';

const converter = new showdown.Converter()
// Create a single supabase client for interacting with your database
const supabase = createClient(PROJECT_URL, API_KEY)

export async function load({ params }) {
    console.log({ params })

    const { data, error } = await supabase
        .from('pages')
        .select()
        .order("created_at", { ascending: false })
        .eq("title", params.page)
        .limit(1)
        .single()
    console.log({error, data})
    if (error) {
        throw redirect(307, `/edit/${params.page}`)
    } else {
        return { page: data, html: converter.makeHtml(data.body) }
    }
}
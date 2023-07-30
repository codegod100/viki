import { createClient } from '@supabase/supabase-js'
import { PROJECT_URL, API_KEY,SERVICE_KEY } from '$env/static/private';

// Create a single supabase client for interacting with your database
const supabase = createClient(PROJECT_URL, SERVICE_KEY)

export async function load({ params }) {
    console.log({ params })
    const { data:pages, error } = await supabase
        .from('pages')
        .select()
        .eq("title", params.page)
        .order("created_at",{ascending: false})
    return { pages,title: params.page }
}

export const actions = {
    edit: async ({ request }) => {
        const data = await request.formData()
        const title = data.get("title")
        const body = data.get("body")
        console.log({ title,body })
        const { error,statusText } = await supabase
            .from('pages')
            .insert({ title,body })
            console.log({error, statusText})
    },
    revert: async({request}) =>{
        console.log("revert")
        const data = await request.formData()
        const title = data.get("title")
        const body = data.get("body")
        console.log({ title,body })
        const { error,statusText } = await supabase
            .from('pages')
            .insert({ title,body })
            console.log({error, statusText})
    }
};
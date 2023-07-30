import { createClient } from '@supabase/supabase-js'
import {PROJECT_URL,API_KEY} from '$env/static/private';

// Create a single supabase client for interacting with your database
const supabase = createClient(PROJECT_URL, API_KEY)

export async function load({ params }) {
    const { data, error } = await supabase
    .from('pages')
    .select()
    .eq("title", "main")
    .single()
    console.log(error,data)
    return {page: data}
}
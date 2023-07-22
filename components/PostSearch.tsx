'use client'

import { getPostsBySearch } from "@/services/getPosts";
import useSWR from 'swr'
import { FormEventHandler, useState } from "react"

export const PostSearch = () => {
    const { mutate } = useSWR("posts")
    const [search, setSearch] = useState('')

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const posts = await getPostsBySearch(search);
        mutate(posts);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="search" 
                placeholder="search" 
                value={search} 
                onChange={e => setSearch(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}
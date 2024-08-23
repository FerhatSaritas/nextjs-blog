import fs from 'fs'
import { domain } from '../_constants'

export const getPosts = async <T>(id: string): Promise<T> => {
    const post = fs.readFile(`_public/_posts/example-post.md`, (err, data) => {
        if (err) console.error(__dirname)
    })

    return await fetch(`http://${domain}/api/post?slug=${id}`, {
        method: 'GET',
    })
        .then((response) => {
            if (!response.ok) throw new Error(response.statusText)

            return response.json() as Promise<{ post: T }>
        })
        .then((post) => post.post)
}

export const fetchGet = async <T>(url: string) => {
    return await fetch(url, { method: 'GET' }).then((response) => {
        if (!response.ok) throw new Error(response.statusText)
        return response.json() as Promise<Record<string, T>>
    })
}

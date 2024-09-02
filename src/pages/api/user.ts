import type { APIRoute } from 'astro'
import { User } from '../../models/user'

export const GET: APIRoute = async ({ params, request }) => {
    const users = await User.findAll()

    return new Response(
        JSON.stringify(users),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}

export const POST: APIRoute = async ({ request }) => {
    const data = await request.json()

    const newUser = await User.create(data)

    return new Response(
        JSON.stringify({
            message: 'User created with success',
            user: newUser
        }),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}

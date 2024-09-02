import type { APIRoute } from 'astro'

export const GET: APIRoute = ({ params, request }) => {
    console.log('GET /user.json')
    return new Response(
        JSON.stringify({
            name: 'John Doe',
            discordId: '1234567890'
        })
    )
}

export const POST: APIRoute = async ({ request }) => {
    const data = request.body
    console.log('POST /user.json')
    console.log(data)

    return new Response('POST /user.json')
}

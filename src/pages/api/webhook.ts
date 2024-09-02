import type { APIRoute } from 'astro'

const DISCORD_WEBHOOK_URL = import.meta.env.DISCORD_WEBHOOK_URL ?? ''

export const POST: APIRoute = async ({ request }) => {
    const data = await request.json()

    try {
        await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: data.message
            })
        })

        return new Response(JSON.stringify({
                message: 'Webhook sent with success'
            }), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        return new Response(JSON.stringify({
                message: 'Error while sending webhook',
                error
            }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}
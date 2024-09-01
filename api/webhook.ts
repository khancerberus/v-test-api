import type {
    VercelRequest,
    VercelResponse,
} from '@vercel/node'
import { waitUntil } from '@vercel/functions'

// export const config = {
//     runtime: 'nodejs'
// }

// export default function handler(request: VercelRequest, response: VercelResponse) {
//     return response.status(200).send('Hello, World!')
// }

export function POST(request: VercelRequest, response: VercelResponse) {
    const discordWebhook = 'https://discord.com/api/webhooks/1276053112498683974/lri2_HuhiT4uTOlWEgL8bnovXjUKoXGdqNjIfArCh5savjMFATr5VyhRjtA7u62JBVBL'
    waitUntil(fetch(discordWebhook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: 'Webhook test <@523998904912707595>',
        }),
    }))

    return response.status(200).send('Webhook sent!')
}
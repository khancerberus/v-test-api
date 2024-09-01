import type {
    VercelRequest,
    VercelResponse,
} from '@vercel/node'

// export const config = {
//     runtime: 'nodejs'
// }

// export default function handler(request: VercelRequest, response: VercelResponse) {
//     return response.status(200).send('Hello, World!')
// }

export function POST(request: VercelRequest, response: VercelResponse) {
    const discordWebhook = 'https://discord.com/api/webhooks/1276053112498683974/lri2_HuhiT4uTOlWEgL8bnovXjUKoXGdqNjIfArCh5savjMFATr5VyhRjtA7u62JBVBL'
    fetch(discordWebhook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: 'Webhook test \@khancerberus',
        }),
    })

    return response.status(200).send('Webhook sent!')
}
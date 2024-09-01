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

export function POST(request: VercelRequest) {
    // const discordWebhook = 'https://discord.com/api/webhooks/'
    // fetch(discordWebhook, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         content: request.body,
    //     }),
    // })
    console.log(JSON.stringify(request.body))
    return new Response(`Hello, ${JSON.stringify(request.body)}!`)
}
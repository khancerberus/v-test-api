export function POST(request: Request) {
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

export function GET(request: Request) {
    return new Response(`Hello everyone!`)
}

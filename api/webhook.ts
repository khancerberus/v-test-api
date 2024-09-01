export function POST(request: Request) {
    return new Response(`Hello, ${request.body}!`)
}

export function GET(request: Request) {
    return new Response(`Hello everyone!`)
}

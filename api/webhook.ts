export function POST(request: Request) {
    return new Response(`Hello, ${request.body}!`)
}

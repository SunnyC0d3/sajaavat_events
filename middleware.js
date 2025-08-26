import { NextResponse } from 'next/server'

export function middleware(request) {
    // Allow the root path and static assets
    if (request.nextUrl.pathname === '/' ||
        request.nextUrl.pathname.startsWith('/_next/') ||
        request.nextUrl.pathname.startsWith('/images/') ||
        request.nextUrl.pathname.includes('.')) {
        return NextResponse.next()
    }

    // Redirect all other routes to home
    return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
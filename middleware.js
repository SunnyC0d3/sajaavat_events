import { NextResponse } from 'next/server'

export function middleware(request) {
    if (request.nextUrl.pathname === '/' ||
        request.nextUrl.pathname.startsWith('/_next/') ||
        request.nextUrl.pathname.startsWith('/images/') ||
        request.nextUrl.pathname.startsWith('/api/') ||
        request.nextUrl.pathname.includes('.')) {
        return NextResponse.next()
    }

    return NextResponse.error()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
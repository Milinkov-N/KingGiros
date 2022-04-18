import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { cookies } = req

  if(cookies.cartIsSet && cookies.cartIsSet === 'true') {
    return NextResponse.next()
  }
  
  return NextResponse.redirect(new URL('/', req.url))
}
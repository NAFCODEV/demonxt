import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(req) {
     let name = 'admin';
     console.log(name);
     console.log(name === "admin" ? "ok" : "match not found");
     let url = req.nextUrl.pathname;
     console.log(url);
     if (req.nextUrl.pathname.startsWith('/login')) {
          if (!name || name !== '') {
               switch (name) {
                    default: return NextResponse.redirect(new URL('/', req.nextUrl));
                    case 'admin': return NextResponse.redirect(new URL('/admin', req.nextUrl));
                    case 'user': return NextResponse.redirect(new URL('/user', req.nextUrl))
               }
          }
     }

     if (url.startsWith('/admin')) {
          if (!name || name === '' || name !== 'admin') {
               return NextResponse.redirect(new URL('/login', req.nextUrl));
          }
     }

     if (url.startsWith('/user')) {
          if (!name || name === '' || name !== 'user') {
               return NextResponse.redirect(new URL('/login', req.nextUrl));
          }
     }
     
     // if (req.nextUrl.pathname.startsWith('/user')) {
     //      if (name !== 'admin' || name !== 'user') {
     //           console.log("You can not access this page!")
     //           return NextResponse.redirect(new URL('/login',req.nextUrl));
     //      }
     //      if (name === 'admin') {
     //           return NextResponse.redirect(new URL('/user',req.nextUrl));
     //      }
     // }
     // if (req.nextUrl.pathname.startsWith('/login')) {
     //      if (name === 'admin') {
     //           return NextResponse.redirect(new URL('/home',req.nextUrl));
     //      }
     //      if (name === 'user') {
     //           return NextResponse.redirect(new URL('/user',req.nextUrl));
     //      }
     // }

    
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/admin','/user','/login'],
}
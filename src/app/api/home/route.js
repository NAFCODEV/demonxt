import { headers } from 'next/headers'
import { NextResponse } from 'next/server';
export async function GET(req) {     
     const r = await req;
     return NextResponse.json({ msg: "ok" }, { status: 201 });
}
import {NextRequest,NextResponse} from 'next/server';
// Only allow redirects to already verified affiliate URLs; never accept arbitrary user-supplied URLs.
export async function GET(_req:NextRequest){return NextResponse.json({error:'ยังไม่เปิดระบบลิงก์ Affiliate จนกว่าจะตรวจสอบสิทธิ์และลิงก์จริง'},{status:503})}

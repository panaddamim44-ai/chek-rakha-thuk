import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'เช็กราคาถูก | เช็กก่อนซื้อ คุ้มกว่าเดิม',description:'วางลิงก์สินค้า Shopee เพื่อเตรียมตรวจสอบราคาและประวัติสินค้า'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="th"><body>{children}</body></html>}

import type {Metadata} from 'next';import './style.css';
export const metadata:Metadata={title:'เช็กราคาถูก | เปรียบเทียบราคาก่อนซื้อ',description:'ต้นแบบระบบเปรียบเทียบสินค้า Shopee พร้อมแจ้งสถานะข้อมูลอย่างโปร่งใส'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="th"><body>{children}</body></html>}

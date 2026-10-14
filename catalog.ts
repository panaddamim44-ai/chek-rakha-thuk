export type Offer = {id:string;title:string;shop:string;price:number|null;priceNote:string;url:string|null;verifiedVariant:boolean;source:'demo'|'shopee';updatedAt:string};
// Fictional catalog deliberately contains no real products, shops, prices or purchase links.
export const demo:Offer[] = [
{id:'sample-1',title:'สินค้าสาธิต รุ่น DEMO-A สีดำ',shop:'ร้านตัวอย่าง ก',price:129,priceNote:'ราคาจำลอง ไม่ใช่ราคา Shopee',url:null,verifiedVariant:true,source:'demo',updatedAt:'ข้อมูลจำลอง'},
{id:'sample-2',title:'สินค้าสาธิต รุ่น DEMO-A สีดำ',shop:'ร้านตัวอย่าง ข',price:145,priceNote:'ราคาจำลอง ไม่ใช่ราคา Shopee',url:null,verifiedVariant:true,source:'demo',updatedAt:'ข้อมูลจำลอง'},
{id:'sample-3',title:'สินค้าสาธิต รุ่น DEMO-B สีขาว',shop:'ร้านตัวอย่าง ค',price:99,priceNote:'คนละรุ่น ห้ามเปรียบเทียบเป็นชิ้นเดียวกัน',url:null,verifiedVariant:false,source:'demo',updatedAt:'ข้อมูลจำลอง'}
];
export function groupKey(title:string){const match=title.match(/รุ่น\s+(DEMO-[A-Z])/i);return match?.[1]??title.trim().toLowerCase()}

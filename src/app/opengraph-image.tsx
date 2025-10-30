import { ImageResponse } from "next/og";
export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (<div style={{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",background:"#0b0b0c",color:"#fff"}}>
      <div style={{fontSize:64,fontWeight:800,letterSpacing:-1}}>YOUR BUSINESS NAME</div>
      <div style={{fontSize:24,opacity:.9}}>Premium websites • $465 set-up + $99/mo</div>
    </div>), size
  );
}

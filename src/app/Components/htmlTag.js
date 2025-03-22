import React from 'react';
import Image from 'next/image';

const HtmlTag = () => {
  return (
<div className="flex flex-row  gap-[2px] items-center justify-center rounded-[5px]"  style={{backgroundColor: "oklch(0.2533 0.016 255.42)",padding: "6px", display: "inline-flex"}}>
    <Image src="/img/html.png" width={17} height={17} style={{objectFit:"contain"}} />
    <div className="text-[9px] text-center items-center">HTML</div>
</div>
  )
}

export default HtmlTag
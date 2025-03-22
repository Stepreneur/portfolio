import React from 'react';
import Image from 'next/image';

const CssTag = () => {
  return (
<div className="flex flex-row   items-center justify-center rounded-[5px] gap-[2.5px]"  style={{backgroundColor: "oklch(0.2533 0.016 255.42)",padding: "6px", display: "inline-flex"}}>
    <Image src="/img/css.png" width={13} height={13} style={{objectFit:"contain"}} />
    <div className="text-[9px] text-center items-center">CSS</div>
</div>
  )
}

export default CssTag
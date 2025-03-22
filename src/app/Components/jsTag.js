import React from 'react';
import Image from 'next/image';

const JsTag = () => {
  return (
<div className="flex flex-row   items-center justify-center rounded-[5px]"  style={{backgroundColor: "oklch(0.2533 0.016 255.42)",padding: "6px", display: "inline-flex"}}>
    <Image src="/img/js.webp" width={19} height={19} style={{objectFit:"contain"}} />
    <div className="text-[10px] text-center items-center">JavaScript</div>
</div>
  )
}

export default JsTag
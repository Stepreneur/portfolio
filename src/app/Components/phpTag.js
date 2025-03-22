import React from 'react';
import Image from 'next/image';

const PhpTag = () => {
  return (
<div className="flex flex-row  gap-[2px]  items-center justify-center rounded-[5px]"  style={{backgroundColor: "oklch(0.2533 0.016 255.42)",padding: "6px", display: "inline-flex"}}>
    <Image alt='loading' src="/img/php.png" width={24} height={24} style={{objectFit:"contain"}} />
    <div className="text-[10px] text-center items-center">PHP</div>
</div>
  )
}

export default PhpTag
"use client";
import Image from "next/image";
import Navbar from "./Navbar/page";
import { useRouter } from 'next/navigation';
import HtmlTag from "./Components/htmlTag";
import CssTag from "./Components/cssTag";
import JsTag from "./Components/jsTag";
import PhpTag from "./Components/phpTag";

export default function Home() {
  const router = useRouter();
  const goToPage = (page) => {
    router.push(`/${page}`);
  };

  const size = 50;
  return (
    <div>
      <Navbar />
      <div className=" w-full flex items-center" style={{backgroundColor:" oklch(0.2533 0.016 255.42)", height: "calc(100vh - 65px)" }}> {/* Adjust height dynamically */}
        <div className="w-full justify-center flex flex-row h-max gap-[50px]">
          <div className=" flex" style={{ position: "relative", width: "27vw", height: "auto" }}>
            <Image
              src="/img/me.jpg"
              alt="Your Image"
              layout="responsive"
              className="rounded-2xl"
              width={1000} // Set an appropriate width value in pixels
              height={1000} // Set an appropriate height value in pixels
            />
          </div>
          <div className="text-4xl w-max flex flex-col gap-6">
              <div className="text-4xl">Thanwarat Chainam</div>
              <div className="text-lg max-w-[500px] opacity-70">
                สวัสดีครับ! ผมชื่อ สเตฟาน (ธัญวรัตม์ ชัยนาม) อายุ 18 ปี <br />
                ปัจจุบันผมเป็นนักพัฒนาซอฟต์แวร์ที่หลงใหลในการสร้างเว็บไซต์และโปรเจกต์ต่างๆ <br />
                ด้วยเทคโนโลยีที่ผมเชี่ยวชาญ เช่น HTML, CSS, PHP, JavaScript, และ Next.js <br />
                ผมเริ่มต้นเรียนรู้การเขียนโค้ดมาได้ 2 ปีแล้ว และก็ได้ลงมือทำโปรเจกต์ของตัวเองมาอย่างจริงจัง
                สิ่งที่ผมเชื่อคือ การทำงานร่วมกับทีมคือหัวใจสำคัญของการสร้างสรรค์สิ่งใหม่ๆ ผมเชื่อว่าเทคโนโลยีสามารถเปลี่ยนแปลงโลกได้ และการที่เราได้สื่อสารกับเครื่องจักรหรือหุ่นยนต์จะช่วยให้เราแก้ปัญหาที่ยากและซับซ้อนได้ ทำให้ชีวิตของผู้คนดีขึ้นในหลายๆด้าน<br />
                เป้าหมายของผมในอนาคตคือการนำความรู้และประสบการณ์ที่มีมาสร้างสรรค์สิ่งดีๆ ที่สามารถช่วยเหลือและพัฒนาสังคม ผมพร้อมที่จะเรียนรู้และเติบโตไปพร้อมกับโอกาสใหม่ๆ
              </div>  
          </div> {/* Fixed style syntax */}
        </div>
      </div>
      <section className="flex flex-col mt-[40px]" style={{backgroundColor:" oklch(0.2533 0.016 255.42)"}}>
        <div className="text-6xl w-full text-center font-bold">I'm Website developer</div>
      </section>
      <section>
        <div className="mt-[100px] w-full h-[600px] flex justify-center items-center bg-orange-500 relative">
              <Image alt="loading" className="absolute right-[20px] top-[20px]" src = "/img/link.png" width={35} height={35} onClick={() => goToPage('about')} />
              <div className="flex flex-row w-max h-max  gap-[200px]">
                  <div className="flex flex-col items-end h-[400px] ml-[70px] gap-[25px] ">
                      <div className="text-4xl font-bold">Classlinker</div>
                      <div className="text-base mt-[10px]">เป็นสตาร์ทอัพที่ผมสร้างขึ้นมา
                        <br />โซเชียลเน็ตเวิร์คแพลตฟอร์มสำหรับนักเรียนในโรงเรียนเดียวกัน
                        <br />มีผู้ใช้มากกว่า 300 คน ในสัปดาห์แรก
                        <br />มีลูกทีมทั้งหมด 2 คน  
                      </div>
                      <div className="mt-[20px]">
                        <div className="flex flex-row mt-[10px] gap-[8px] self-baseline">
                          <HtmlTag/>
                          <CssTag/>
                          <JsTag/>
                          <PhpTag/>
                        </div>
                      </div>
                  </div>
                  <Image alt = "loading" src = "/img/me.jpg" width={400} height={400}/> 
            </div>
        </div>
      </section>
      <section>
      <div className="text-3xl w-full text-center mt-[90px] font-bold">My Tech stack</div>
        <div className="w-full  justify-center flex flex-col mt-[60px] gap-[20px]">
          <div className=" flex flex-row justify-center gap-[30px]">
            <Image alt = "loading"  src = "/img/php.png" width={80} height={70} style={{ objectFit: "contain" }} />
          </div>
          <div className=" flex flex-row justify-center gap-[30px]">
            <Image alt = "loading"  src="/img/css.png" width={50} height={1}  style={{ objectFit: "contain" }} />
            <Image alt = "loading" src = "/img/html.png" width={70} height={size} style={{ objectFit: "contain" }} />
          </div>
          <div className=" flex flex-row justify-center gap-[30px]">
            <Image alt = "loading" src = "/img/js.webp" width={70} height={70} style={{ objectFit: "contain" }} />
            <Image alt = "loading" src = "/img/react.png" width={70} height={size} style={{ objectFit: "contain" }} />
            <Image alt = "loading" src = "/img/nextjs.png" width={70} height={70} style={{ objectFit: "contain" }} />
          </div>
          <div className="flex flex-row gap-[60px] justify-center">
            <Image alt = "loading" src = "/img/git.png" width={70} height={70} style={{ objectFit: "contain" }} />
            <Image alt = "loading" src = "/img/github.png" width={70} height={70} style={{ objectFit: "contain" }} />
            <Image alt = "loading" src = "/img/prisma.png" width={60} height={size} style={{ objectFit: "contain" }} />
            <Image alt = "loading" src = "/img/mysql.png" width={70} height={70} style={{ objectFit: "contain" }} />
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image" 
import custom from "@/app/style/custom.module.css"
import Next from "./open/icons/next"
import JS from "./open/icons/js"
import HTML from "./open/icons/html"
import TAILWIND from "./open/icons/tailwind"

 
 function Home(){
  return(
    <main className={custom.body}>
      <section>
        <div>
          <Image src="/avatar.png" alt="this is a image" width={500} height={500} className={custom.image}/>
        </div>
      </section>
      <section>
        <div>
          <h1 className={custom.heading}>
          I do code and
          make content about it!
          </h1>
          <p className={custom.para}>I am a seasoned full-stack software engineer with over 
8 years of professional experience, specializing in backend development. 
My expertise lies in crafting robust and scalable SaaS-based 
architectures on the Amazon AWS platform.</p>
  <div className={custom.div}> 
   <button className={custom.button}>Get In-Touch</button>
   <button className={custom.button1}>Download CV</button>
   </div>
   <p className={custom.text}>EXPERIENCE WITH</p>
   <div className={custom.icon}>
   <Next/>
   <JS/>
   <HTML/>
   <TAILWIND/>
   </div>
    </div>
        
      </section>
    </main>
  )
}
export default Home
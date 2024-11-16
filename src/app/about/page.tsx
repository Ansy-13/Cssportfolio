import about from "@/app/style/about.module.css"
import Facebook from "../open/icons/faceebook"
import Insta from "../open/icons/instagrame"
import Twitter from "../open/icons/twitter"
export default function About(){
    return(
        <main>
            <section>
                <div>
                   <h1 className={about.heading}>About Me</h1>
                   <p className={about.paragrah}>I like creating a cool design project</p>
                </div>               
            </section>
            <section>
                <div className={about.div}>
                    <button className={about.button}>Download CV</button>
                    <Facebook/>
                    <Insta/>
                    <Twitter/>
                </div>
            </section>
            <section>
                <div className={about.text}>
                    <div className={about.small}>
                        <p className={about.para}>Age:</p>
                    <p>23</p>
                
                    </div>
                   
                </div>
                <div className={about.small1}>
                        <p className={about.para1}>Residence:</p>
                        <p>USA</p>
                        
                        
                    </div>
                    <div className={about.text2}>
                    <div className={about.small2}>
                        <p className={about.para}>Address:</p>
                    <p className={about.Address}>Phase3 block-5 hestorical society</p>
                
                    </div>
                   
                </div>
                <div className={about.small1}>
                        <p className={about.para1}>Email:</p>
                        <p>demo@gmail.com</p>
                        
                    </div>
                    <div className={about.self}>
                        Hello I am a Anus a good freelancer Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus iste alias quia quasi deserunt doloribus, est accusamus quas ducimus obcaecati quae libero explicabo autem quis! Pariatur iusto deserunt nisi consequuntur?
                    </div>
                    <div className={about.box}>
                        <div className={about.box1}>
                           <p className={about.content}>50%</p>
                           <p className={about.T1}>Typescript</p>
                        </div>
                        <div className={about.box1}>
                           <p className={about.content}>75%</p>
                           <p className={about.T1}>Next.js</p>
                        </div>
                        <div className={about.box1}>
                           <p className={about.content}>80%</p>
                           <p className={about.T1}>Tailwind css</p>
                        </div>
                        <div className={about.box1}>
                           <p className={about.content}>95%</p>
                           <p className={about.T1}>Html</p>
                        </div>
                    </div>
            </section>
        </main>
    )
}
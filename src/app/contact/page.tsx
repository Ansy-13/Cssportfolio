"use client"

import contact from "@/app/style/contact.module.css"
import Facebook from "../open/icons/faceebook"
import Insta from "../open/icons/instagrame"
import Twitter from "../open/icons/twitter"
import { useState } from "react"
export default function Contact(){
    
    const [ message , setmessage] = useState("");
    function handleClick(){
        console.log("button clicked !")
        setmessage("Thank you For sending us a message")

    }
    
    return(
        <main >
            
           
    <section className={contact.main}>
        <h1 >Contact Us</h1>
        <p >Any question or remarks? Just write a message</p>
    </section>

    <section className={contact.card}>
                
                {/* Contact Information Section */}
                <div className={contact.information}>
                    <h1 className="">Contact Information</h1>
                    <p className="">Say something to start a Live Chat</p>
                    <div className="">
                    
                        <p className="">031712292947</p>
                        
                        <p className="">demo@gmail.com</p>
                    </div>
                    <div className={contact.icon}>
                        <Facebook/>
                        <Insta/>
                        <Twitter/>
                    </div>
                </div>

                {/* Form Section */}
                <div className={contact.form}>
                    <section>
                        <h1 className={contact.Name}>Full Name</h1>
                        <input type="text" placeholder="|" className={contact.input} />
                        
                        <h1 className="">Last Name</h1>
                        <input type="text" placeholder="|" className={contact.textarea} />
                        
                        <h1 className="">Enter Email</h1>
                        <input type="email" placeholder="|" className={contact.textarea1} />
                        
                        <h1 className="">Phone Number</h1>
                        <input type="tel" placeholder="+92 277896541" className={contact.textarea2} />
                        
                        <h1 className="">Write your Message</h1>
                        <textarea placeholder="You can write your message here" className={contact.textarea3} />

                        <button className={contact.btn} onClick={handleClick}>Send message</button>

                        {/* Message displayed after button click */}
                         <p className={contact.message}>{message}</p>
                    </section>
                </div>

         
    </section>
</main>
       
    )
}
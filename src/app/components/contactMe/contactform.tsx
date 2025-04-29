import React from "react";
import {FaPaperPlane} from "react-icons/fa"

const ContactForm =()=>{
    return (
        <section id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)]">
            <h1>Contact me</h1>
            <p className="text-gray-700"> Please contact me directly at{" "}
                <a className="underline" href="mailto:hartheekreddy@gmail.com"> hartheekreddy@gmail.com</a>
                {" "}or through this form.
            </p>
            <form className="mt-10 flex flex-col">
                <input placeholder="Your email" className=" px-4 h-14 rounded-lg border border-black/10" type="email"/>
                <textarea placeholder="Your Message" className=" px-4 h-52 my-3 rounded-lg border border-black/10"/>
                <button type="submit"
                className=" flex items-center justify-center h-[3-rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none tranistion-all focus:scale-110 hover:scale-110 hover:bg-gray-95 active:scale-105"> 
                    Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"/>{" "}
                </button>
            </form>

        </section>
    )
}
export default ContactForm;
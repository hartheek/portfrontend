"use client"
import Footer from "../components/UIhome/footer/footer";
import Navbar from "../components/UIhome/navbar/navbar";
import ChatPopup from "../components/chatbot/chatbox";
import Styles from "./dashboard.module.css"
const Layout = ({children}:Readonly<{
    children: React.ReactNode;
  }>)=>{
    return (
        <div>
            <div className={Styles.main}>
                <Navbar></Navbar>
                {children}
            </div>
            <div className={Styles.footer}>
                <Footer></Footer>
            </div>
            <ChatPopup/> 
        </div>
    )
}
export default Layout;
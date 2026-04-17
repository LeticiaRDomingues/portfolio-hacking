import Footlink from './FootLink'
import { SiYoutube } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { ImLinkedin } from "react-icons/im";

export default function Footer() {
    return(
       <footer className='bg-gray-900'>
        <div className='mx-auto flex items-center justify-between px-6 py-6 text-gray-400'>
            <div className='text-sm'>© 2026 LetzLab404, Inc. All rights reserved.</div>
            <div className='flex items-center gap-5 text-2xl'>
                <Footlink href="https://www.youtube.com/@letzlab404" ariaLabel={"YouTube"} label={<SiYoutube />}/>
                <Footlink href="https://github.com/LeticiaRDomingues" ariaLabel={"GitHub"} label={<SiGithub />}/>
                <Footlink href="https://www.linkedin.com/in/leticiardomingues/" ariaLabel={"LinkedIn"} label={<ImLinkedin />}/>      
            </div>      
        </div>
       </footer>
    )
}
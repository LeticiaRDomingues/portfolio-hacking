import Footlink from './FootLink'

export default function Footer() {
    return(
       <footer className='bg-gray-900'>
        <div className='flex justify-between items-center text-gray-400 pl-15 p-15 mx-auto '>
            <div>© 2026 LetzLab404, Inc. All rights reserved.</div>
            <div>
                <Footlink href="https://www.youtube.com/@letzlab404" label="YouTube"/>
                <Footlink href="https://github.com/LeticiaRDomingues" label="GitHub"/>
                <Footlink href="https://www.linkedin.com/in/leticiardomingues/" label="LinkedIn"/>      
            </div>      
        </div>
       </footer>
    )
}
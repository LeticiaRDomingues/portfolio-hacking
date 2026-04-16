interface MyFootlinkProps{
    href: string;
    label: string;
}

export default function Footlink({ href, label}: MyFootlinkProps){
    return(
         <a className="p-8 pt-3 pb-3 " href={href} target="_blank">{label}</a>
    )
}
interface MyFootlinkProps{
    href: string;
    label: string;
}

export default function Footlink({ href, label}: MyFootlinkProps){
    return(
         <a href={href} target="_blank">{label}</a>
    )
}
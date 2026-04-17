interface MyFootlinkProps{
    href: string;
    ariaLabel: string;
    label: React.ReactNode;
}

export default function Footlink({ href, label, ariaLabel}: MyFootlinkProps){
    return(
         <a className="transition duration-200 hover:scale-110 hover:text-cyan-400 " href={href} target="_blank" rel="nooperner noreferrer" aria-label={ariaLabel}>{label}</a>
    )
}
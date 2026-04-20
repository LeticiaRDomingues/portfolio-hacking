import Link from 'next/link';

interface MyPropsLink {
    className: string;
    href: string;
    label: string;
}

export default function CTAButton({ className, href, label }: MyPropsLink) {
    return (
        <Link className={className} href={href}>
            {label}
        </Link>
    )
}
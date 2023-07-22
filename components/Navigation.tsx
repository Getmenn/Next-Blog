'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

type NavLink = {
    label: string;
    href: string;
}

type Props = {
    navLinks: NavLink[];
}

export const Navigation = ({navLinks}: Props) => {
    const pathname = usePathname();
    
    return (
        <>
            {navLinks.map(link => {
                const isActive = pathname === link.href
                return (
                    <Link 
                        href={link.href} 
                        key={link.href}
                        className={isActive ? "active" : ""}
                    >
                        {link.label}
                    </Link>
                )
            })}
        </>
    )
}
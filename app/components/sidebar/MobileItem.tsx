'use client'
import clsx from 'clsx'
import Link from 'next/link'

interface DesktopItemProps {
    label: string;
    icon: any;
    href: string;
    onClick?: () => void;
    active?: boolean;
}

const MobileItem: React.FC<DesktopItemProps> = ({
    href,
    icon: Icon,
    active,
    onClick
}) => {

    const handleClick = () => {
        if(onClick) {
            return onClick()
        }
    }

  return (
    <Link href={href}>
        <Icon />
    </Link>
  )
}

export default MobileItem

import cx from 'classnames'
import Image from 'next/image'
import React from 'react'
interface MenuItemProps {
    title: string
    icon: 'menu-overview'|'menu-transaction' | 'menu-message'| 'menu-card' | 'menu-rewards' | 'menu-settings' | 'menu-logout',
    active?: boolean
}
const MenuItem = (props: Partial<MenuItemProps>) => {
    const {title, icon, active} = props
    const classItem =  cx({
        'item': true,
        'mb-30': true,
        'active' : active
    })
    return (
    <div className={classItem}>
        <Image src={`/icon/${icon}.svg`} width={25} height={25} />
        <div className="me-3"></div>
        <p className="item-title m-0">
            <a href="" className="text-lg text-decoration-none">{title}</a>
        </p>
    </div>
  )
}

export default MenuItem
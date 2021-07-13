import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './styles.module.scss'

interface MenuItemProps {
    title: string
    link: string
}

const MenuItem: FC<MenuItemProps> = ({ link, title }) => {
    return (
        <NavLink to={link} className={styles.container}>
            <div className={styles.menuItem}>{title}</div>
        </NavLink>
    )
}

export default MenuItem

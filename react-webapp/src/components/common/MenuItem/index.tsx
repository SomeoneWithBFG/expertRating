import { FC } from "react"
import { NavLink } from 'react-router-dom';

import styles from "./styles.module.scss"

interface MenuItemProps {
    props: {
        title: string, 
        link: string,
    }
}

function getProps(data: MenuItemProps) {
    return data.props
}

const MenuItem: FC<MenuItemProps> = (props) => {
    return (
        <NavLink to={getProps(props).link} className={styles.container}>
            <div className={styles.menuItem}>
                {getProps(props).title}
            </div>
        </NavLink>
    )
}

export default MenuItem;

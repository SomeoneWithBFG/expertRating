import { FC } from "react"
import { NavLink } from 'react-router-dom';

import styles from "./styles.module.scss"

interface MenuUserItemProps {
    name: string,
    role: string,
    group?: string,
    link: string,
}

const MenuUserItem: FC<MenuUserItemProps> = (props) => {
    const data = {
        name: props.name.length > 20 ? props.name.slice(-20)+"..." : props.name,
        role: props.role,
        group: props.group ? props.group : null,
        link: props.link,
    }
    return (
        <NavLink to={data.link} className={styles.container}>
            <div className={styles.cycle}>
                {data.name[0].toUpperCase()}
            </div>
            <div className={styles.infoContainer}>
                <div>
                    {data.name}
                </div>
                <div className={styles.additionalInfo}>
                    <div className={styles.group}>
                        {data.group ? data.group : ""}
                    </div>
                    <div className={styles.role}>
                        {data.role}
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default MenuUserItem;

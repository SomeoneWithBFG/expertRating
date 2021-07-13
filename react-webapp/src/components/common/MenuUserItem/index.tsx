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
    return (
        <NavLink to={props.link} className={styles.container}>
            <div className={styles.cycle}>
                {props.name[0].toUpperCase()}
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.name}>
                    {props.name}
                </div>
                <div className={styles.additionalInfo}>
                    {props.group ?
                        (<div className={styles.group}>
                            {props.group}
                        </div>)
                        : (<></>)    
                    }
                    <div className={styles.role}>
                        {props.role}
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default MenuUserItem;

import { FC } from "react"
import { NavLink } from 'react-router-dom';

import styles from "./styles.module.scss"

interface MenuUserItemProps {
    name: string,
    role: string,
    group?: string,
    link: string,
}

const MenuUserItem: FC<MenuUserItemProps> = ({ name, role, group, link }) => {
    return (
        <NavLink to = { link } className = { styles.container }>
            <div className = { styles.cycle }>
                { name[0].toUpperCase() }
            </div>
            <div className = { styles.infoContainer }>
                <div className = { styles.name }>
                    { name }
                </div>
                <div className = { styles.additionalInfo }>
                    { group ?
                        (<div className = { styles.group }>
                            { group }
                        </div>)
                        : (<></>)    
                    }
                    <div className = { styles.role }>
                        { role }
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default MenuUserItem;

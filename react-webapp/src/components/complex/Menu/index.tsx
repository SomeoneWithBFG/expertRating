import { FC } from 'react'

import styles from './styles.module.scss'

import MenuItem from '../../common/MenuItem'
import MenuUserItem from '../../common/MenuUserItem'

import { pages } from './pages'

const Menu: FC = () => {
    return (
        <div>
            <div className={styles.container}>
                <MenuUserItem
                    name={
                        'Иванов И.И. 123312312312312312312312312312312312312413412345'
                    }
                    role={'Студент'}
                    group={'АС-53'}
                    link={'/students?id=some-id'}
                />
                {pages.map((page, index) => {
                    return (
                        <MenuItem
                            key={index}
                            link={page.link}
                            title={page.title}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Menu

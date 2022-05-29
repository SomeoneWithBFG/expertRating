import { FC } from 'react'

import styles from './styles.module.scss'

import MenuItem from '../../common/MenuItem'
import MenuUserItem from '../../common/MenuUserItem'

import { pages } from './pages'
import Button from '../../basic/Button'
import { useHistory } from 'react-router-dom'

const Menu: FC = () => {
    const history = useHistory()
    function singOut() {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('expires_in')
        history.push('/login')
    }
    return (
        <div>
            <div className={styles.container}>
                {/* <MenuUserItem
                    name={
                        'Иванов И.И. 123312312312312312312312312312312312312413412345'
                    }
                    role={'Студент'}
                    group={'АС-53'}
                    link={'/students'}
                /> */}
                {pages.map((page, index) => {
                    return (
                        <MenuItem
                            key={index}
                            link={page.link}
                            title={page.title}
                        />
                    )
                })}
                <div className={styles.exitButton}>
                    <Button 
                        name='Exit' 
                        onClick={singOut} 
                        disabled={false} 
                        placeholder='Выйти'
                    />
                </div>
            </div>
        </div>
    )
}

export default Menu

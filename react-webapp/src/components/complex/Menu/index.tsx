import { FC } from "react"

import styles from "./styles.module.scss"

import MenuItem from "../../common/MenuItem"
import MenuUserItem from "../../common/MenuUserItem"

const Menu: FC = () => {
  const pages = [
    {title: "Вычисления", link: "/"},
    {title: "История",    link: "/history"},
    {title: "Группа",     link: "/group"},
    {title: "Студенты",   link: "/students"},
    {title: "Обучение",   link: "/stydy"},
  ]
  return (
    <div className={styles.container}>
      <MenuUserItem 
        name={"Иванов И.И."}
        role={"Студент"}
        group={"АС-53"}
        link={"/students?id=some-id"}
      />
      {pages.map(page=>{
        return <MenuItem key={page.title} props={page}/>
      })}
    </div>
  )
}

export default Menu;

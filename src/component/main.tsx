import { NavLink, Outlet, useLocation } from "react-router-dom"
import { Menu } from "../domain/Const"
import './main.scss'
import Post from "./post/Post"
import { postList } from "../domain/Post"
import bell from './../image/bell.svg'
import question from"./../image/question.svg" 
import settings from"./../image/setting.svg"
import search from "./../image/search.png"
type MenuProps = {
    menuList: Menu[]
}
const Index = ({ menuList }: MenuProps) => {
    const location = useLocation();
    return (
        <>
            <div className="header">
                <nav className="menu menu--main">
                    <div className="logo"></div>
                    {menuList.map(({ name, id }) => (
                        <NavLink key={id} to={`${id}`} className={({ isActive, isPending }) =>
                            isActive
                                ? "active menu__item"
                                : isPending
                                    ? "pending menu__item"
                                    : " menu__item"
                        }>
                            {name ? name : 'No Name'}
                        </NavLink>
                    ))}
                </nav>
                <div className="menu menu--sub">
                    <div className="search">
                        <input className="search__input" type="text" placeholder="search" />
                        <div className="search__icon image image__icon "><img className="image__icon--search" src={search} alt="search" /></div> 
                    </div>
                    <div className="image image__icon menu__item"><img className="image__icon--bell" src={bell} alt="bell" /></div>
                    <div className="image image__icon menu__item"><img className="image__icon--question" src={question} alt="question" /></div>
                    <div className="image image__icon menu__item"><img className="image__icon--settings" src={settings}  alt="settings" /></div>
                </div>
            </div>
            <div className="body">
                <Outlet></Outlet>
                {location.pathname === '/' && (
                    <Post postList={postList} />
                )}
            </div>
        </>
    )
}
export default Index
import { Link, NavLink, Outlet, useLocation } from "react-router-dom"
import { Menu } from "../domain/Const"
import './main.scss'
import Post from "./post/Post"
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
                            <Link to={`${id}`}>{name ? name : 'No Name'}</Link>
                        </NavLink>
                    ))}
                </nav>
                <div className="menu menu--sub">
                    <input type="text" />
                    <div>Notification</div>
                    <div>Help</div>
                    <div>Setting</div>
                    <div>Profile</div>
                </div>
            </div>
            <div className="body">
                <Outlet></Outlet>
                {location.pathname ==='/' && (
                    <Post/>
                )} 
            </div>
        </>
    )
}
export default Index
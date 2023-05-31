import { Link, NavLink, Outlet, useParams } from "react-router-dom"
import { sidebarList } from "../domain/Const";
import './main.scss'
const Sidebar = () => {
    const { menuId } = useParams();
    const sidebarItem = sidebarList.find(item => item.menuId === menuId);
    return (
        <>
            <nav className="sidebar">
                {sidebarItem?.children.map(({ name, id }) => (
                    <NavLink key={id} to={`${id}`} className={({ isActive, isPending }) =>
                        isActive
                            ? "active sidebar__item"
                            : isPending
                                ? "pending sidebar__item"
                                : "sidebar__item"
                    }>
                        <Link to={`${id}`}>{name ? name : 'No Name'}</Link>
                    </NavLink>
                ))}
            </nav>
            <div className="main-content">
                <Outlet></Outlet>
            </div>
        </>
    )
}
export default Sidebar
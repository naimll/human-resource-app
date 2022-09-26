import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SidebarItem({ key, item }) {
  const [open, setOpen] = useState(false);
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  if (item.childrens) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <li
          className={
            item.upgrade
              ? "active active-pro"
              : activeRoute(item.layout + item.path)
          }
          key={key}
        >
          <NavLink
            to={item.layout + item.path}
            className="nav-link"
            activeClassName="active"
          >
            <i className={item.icon} />
            <p>{item.name}</p>
          </NavLink>
        </li>

        <div className="sidebar-content">
          {item.childrens.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <a href={item.path || "#"} className="sidebar-item plain">
        {item.icon && <i className={item.icon}></i>}
        {item.name}
      </a>
    );
  }
}

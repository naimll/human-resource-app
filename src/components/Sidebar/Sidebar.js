import React, { Component } from "react";
import { useLocation, NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";

import logo from "assets/img/reactlogo.png";
import SidebarItem from "./SidebarItem";

function Sidebar({ color, image, routes }) {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  // console.log(routes[2].childrens);
  // return (
  //   <div className="sidebar" data-image={image} data-color={color}>
  //     <div className="sidebar-background bg-secondary" />
  //     <div className="sidebar-wrapper">
  //       <div className="logo d-flex align-items-center justify-content-start">
  //         <a
  //           href="https://www.creative-tim.com?ref=lbd-sidebar"
  //           className="simple-text logo-mini mx-1"
  //         >
  //           <div className="logo-img">
  //             <img
  //               src={require("assets/img/national-assembly.png")}
  //               alt="..."
  //             />
  //           </div>
  //         </a>
  //         <a className="simple-text" href="http://www.creative-tim.com">
  //           Human Resource
  //         </a>
  //       </div>
  //       <Nav>
  //         {routes.map((prop, key) => {
  //           if (!prop.redirect)
  //             if (!prop.childrens) {
  //               <div className={open ? "sidebar-item open" : "sidebar-item"}>
  //                 <div className="sidebar-title">
  //                   <span>
  //                     {item.icon && <i className={item.icon}></i>}
  //                     {item.title}
  //                   </span>
  //                   <i
  //                     className="bi-chevron-down toggle-btn"
  //                     onClick={() => setOpen(!open)}
  //                   ></i>
  //                 </div>
  //                 <div className="sidebar-content">
  //                   {item.childrens.map((child, index) => (
  //                     <SidebarItem key={index} item={child} />
  //                   ))}
  //                 </div>
  //               </div>;
  //             } else {
  //               return (
  //                 <li
  //                   className={
  //                     prop.upgrade
  //                       ? "active active-pro"
  //                       : activeRoute(prop.layout + prop.path)
  //                   }
  //                   key={key}
  //                 >
  //                   <NavLink
  //                     to={prop.layout + prop.path}
  //                     className="nav-link"
  //                     activeClassName="active"
  //                   >
  //                     <i className={prop.icon} />
  //                     <p>{prop.name}</p>
  //                   </NavLink>
  //                 </li>
  //               );
  //             }
  //           return null;
  //         })}
  //       </Nav>
  //     </div>
  //   </div>
  // );
  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + image + ")",
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              <img src={require("assets/img/reactlogo.png")} alt="..." />
            </div>
          </a>
          <a className="simple-text" href="http://www.creative-tim.com">
            Creative Tim
          </a>
        </div>
        <Nav>
          {routes.map((prop, key) => {
            if (!prop.redirect && prop.isMain == true)
              return (
                <li
                  className={
                    prop.upgrade
                      ? "active active-pro"
                      : activeRoute(prop.layout + prop.path)
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            return null;
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;

/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import Applicant from "components/Recruitment/Applicant";
import EmployeeList from "components/Employee/EmployeeList";
import AddEmployee from "components/Employee/AddEmployee";
import AddApplicant from "components/Recruitment/AddApplicant";
import AddApplication from "components/Recruitment/AddApplication";
import Application from "components/Recruitment/Aplication";
import EmployeeDocumentList from "components/EmployeeDocument/EmployeeDocumentList";
import AddEmployeeDocument from "components/EmployeeDocument/AddEmployeeDocument";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
    isMain: true,
  },
  {
    path: "/employees",
    name: "Employees",
    icon: "nc-icon nc-circle-09",
    component: EmployeeList,
    layout: "/admin",
    isMain: true,
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
    isMain: true,
  },
  {
    path: "/Settings",
    name: "Settings",
    icon: "nc-icon nc-settings-gear-64",
    component: TableList,
    layout: "/admin",
    isMain: true,
  },
  {
    path: "/recruitment",
    name: "Recruitment",
    icon: "nc-icon nc-paper-2",
    component: Applicant,
    layout: "/admin",
    isMain: true,
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin",
    isMain: true,
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin",
    isMain: true,
  },
  {
    path: "/AddEmployee",
    name: "Employees",
    icon: "nc-icon nc-circle-09",
    component: AddEmployee,
    layout: "/admin",
    isMain: false,
  },
  {
    path: "/AddApplicant",
    name: "Recruitment",
    icon: "nc-icon nc-circle-09",
    component: AddApplicant,
    layout: "/admin",
    isMain: false,
  },
  {
    path: "/AddApplication",
    name: "Recruitment",
    icon: "nc-icon nc-circle-09",
    component: AddApplication,
    layout: "/admin",
    isMain: false,
  },
  {
    path: "/Applications",
    name: "Recruitment",
    icon: "nc-icon nc-circle-09",
    component: Application,
    layout: "/admin",
    isMain: false,
  },
  {
    path: "/EmployeeDocuments",
    name: "Employees",
    icon: "nc-icon nc-circle-09",
    component: EmployeeDocumentList,
    layout: "/admin",
    isMain: false,
  },
  {
    path: "/AddEmployeeDocument",
    name: "Employees",
    icon: "nc-icon nc-circle-09",
    component: AddEmployeeDocument,
    layout: "/admin",
    isMain: false,
  }
];

export default dashboardRoutes;

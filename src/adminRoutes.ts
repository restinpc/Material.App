/**
 * Material.App - Application router file.
 *
 * @ 19.12.2019 # Aleksandr <developing@nodes-tech.ru>
 */

import Dashboard from "./views/Dashboard/Dashboard";
import ErrorList from "./views/ErrorList/ErrorList";
import Icons from "./views/Icons/Icons";

const adminRoutes = [
    {
        path: "/dashboard",
        display: true,
        name: "Dashboard",
        icon: "pe-7s-graph",
        component: Dashboard,
        layout: "/admin"
    },
    {
        path: "/icons",
        display: true,
        name: "Icons",
        icon: "pe-7s-science",
        component: Icons,
        layout: "/admin"
    },
    {
        error: true,
        path: "/errors",
        display: true,
        name: "Errors",
        icon: "pe-7s-attention",
        component: ErrorList,
        layout: "/admin"
    }
];

export default adminRoutes;

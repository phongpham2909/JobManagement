import ProductManagement from '../admin/ProductManagement/ProductManagement';
import DashboardComponent from '../admin/Dashboard/Dashboard';
import CatalogManagement from '../admin/CatalogManagement/CatalogManagement';
import MailSendOutBox from "../admin/MailSystem/MailOutBox"
import MailSystem from '../admin/MailSystem/MailSystem';
import MailNewForm from '../admin/MailSystem/MailNewForm';
import UserProfile from '../admin/UserProfile/UserProfile';
import { Inbox, Send, OpenInNew } from "@material-ui/icons";

const RoutesMenuSidebar = [
    {
        path: "/dashboard",
        sidebarName: "Dashboard",
        icon: "pe-7s-graph",
        component: DashboardComponent
    },
    {
        collapse: true,
        path: "/mail-system",
        sidebarName: "Hệ Thống Mail",
        icon: "pe-7s-mail",
        state: "openComponents",
        views: [
            {
                path: "/mail-system/send-new-mail",
                name: "Soạn Email",
                icon_mini:  OpenInNew,
                component: MailNewForm,
            },
            {
                path: "/mail-system/inbox",
                name: "Hộp Thư Đến",
                icon_mini: Inbox,
                component: MailSystem,
            },
            {
                path: "/mail-system/outbox",
                name: "Đã Gửi",
                icon_mini: Send,
                component: MailSendOutBox,
            },
        ]
    },
    {
        path: "/product-management",
        sidebarName: "Quản Lý Sản Phẩm",
        icon: "pe-7s-cart",
        class: "m-icon-header-1",
        component: ProductManagement
    },
    {
        path: "/catalog-management",
        sidebarName: "Quản Lý Danh Mục",
        icon: "pe-7s-note2",
        class: "m-icon-header-1",
        component: CatalogManagement
    },
    { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
const RoutesMenuItem = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "tachometer-alt",
        component: DashboardComponent
    },
];
const RoutesMenuSidebarInfo = [
    {
        path: "/user-profile",
        sidebarName: "Thông Tin Cá Nhân",
        icon: "pe-7s-user",
        component: UserProfile
    },
];
export default
    {
        RoutesMenuSidebar,
        RoutesMenuItem,
        RoutesMenuSidebarInfo
    };
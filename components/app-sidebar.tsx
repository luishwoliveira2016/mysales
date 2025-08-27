import Link from "next/link"

import { Calendar, Home, Inbox, Search, Settings, ShoppingCart, BoxIcon, UsersIcon, User } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"


interface AppSidebarProps {
    className: string;
}

const routes = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Vendas",
        url: "/sales",
        icon: ShoppingCart,
    },
    {
        title: "Produtos",
        url: "/products",
        icon: BoxIcon,
    },
    {
        title: "Clientes",
        url: "/customers",
        icon: UsersIcon,
    },
    {
        title: "Usuários",
        url: "/users",
        icon: User,
    },
    {
        title: "Settings",
        url: "/settings",
        icon: Settings,
    }
]

export default function AppSidebar(props: AppSidebarProps) {
    const { className } = props;

    return (
        <Sidebar collapsible="icon">
            <SidebarContent className={className}>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {routes.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className="hover:bg-slate-700">
                                        <Link href={item.url}>
                                            <item.icon size={200}/>
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
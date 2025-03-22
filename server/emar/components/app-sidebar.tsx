import { Archive, Home, Inbox, Users, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Appointments",
    url: "/appointments",
    icon: Inbox,
  },
  {
    title: "Medical Records",
    url: "/medical-records",
    icon: Archive,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: Users,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "LogOut",
    url: "/logout",
    icon: LogOut,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="bg-[#008080] text-black min-h-screen">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center px-4 py-2">
            <Link href="/" className="flex px-2 py-1">
              <Image src="/logo.png" width={30} height={30} alt="logo" />
              <h4 className="text-xl text-[#008080] ml-3 font-semibold">eMar System</h4>
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-6">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="rounded-lg transition-colors duration-300 hover:bg-[#006666] hover:text-white"
                >
                  <SidebarMenuButton className="w-full flex items-center px-4 py-3 gap-3">
                    <Link
                      href={item.url}
                      className="flex items-center gap-3 w-full hover:text-white"
                    >
                      <item.icon className="w-5 h-5 transition-colors duration-300 hover:text-white" />
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
  );
}

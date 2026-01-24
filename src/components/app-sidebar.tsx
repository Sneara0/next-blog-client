import * as React from "react"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,

  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { userRoutes } from "@/userRoutes"
import { adminRoutes } from "@/adminRoutes"
import { Route } from "@/types"

// This is sample data.

  


export function AppSidebar({ user, ...props }: {user:{role:string}& React.ComponentProps<typeof Sidebar>}) {

  let routes:Route[]=[];

  switch(user.role) {
    case "Admin":
      routes = adminRoutes;
      break;
    case "User":
      routes = userRoutes;
      break;
    default:
      routes=[];
      break;
  }

  return (
    <Sidebar {...props}>
  return (
    <Sidebar {...props}>
      
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {routes.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

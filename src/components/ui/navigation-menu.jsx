import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"

function NavigationMenu({ className, children, viewport = true, ...props }) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "group/navigation-menu relative flex flex-col md:flex-row w-full md:max-w-max items-start md:items-center justify-start md:justify-center",
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-col md:flex-row w-full md:w-auto items-start md:items-center justify-start md:justify-center gap-1",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-full md:w-max items-center bg-transparent justify-between rounded-md px-4 py-2 text-sm font-medium transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1 focus-visible:ring-ring/50 " +
    "hover:bg-grey-950 hover:text-accent-foreground " +
    "focus:bg-grey-950 focus:text-accent-foreground " +
    "active:bg-grey-950 " +
    "data-[state=open]:bg-grey-950 data-[state=open]:text-accent-foreground data-[state=open]:hover:bg-grey-950 data-[state=open]:focus:bg-grey-950 " +
    "disabled:pointer-events-none disabled:opacity-50"
)

function NavigationMenuTrigger({ className, children, ...props }) {
  return (
    <NavigationMenuPrimitive.Trigger
      
      data-slot="navigation-menu-trigger"
      className={"text-white"+cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children} {" "}
      <ChevronDownIcon
        className="relative top-[1px] ml-1 size-3 text-white transition duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "bg-pink-600 transition-all duration-700 ease-in-out",
        "w-full md:w-auto p-2 md:absolute md:top-0 md:left-0",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({ className, ...props }) {
  return (
    <div className={cn("absolute top-full left-0 isolate z-50 flex justify-center")}>
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
          className
        )}
        {...props}
      />
    </div>
  )
}

function NavigationMenuLink({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "duration-200 flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus:ring-0 focus:outline-none " +
          "hover:bg-grey-950 hover:text-accent-foreground " +
          "focus:bg-grey-950 focus:text-accent-foreground " +
          "active:bg-grey-950 " +
          "data-[active=true]:bg-grey-950 data-[active=true]:hover:bg-grey-950 data-[active=true]:focus:bg-grey-950 data-[active=true]:active:bg-grey-950 data-[active=true]:text-accent-foreground " +
          "[&_svg:not([class*='text-'])]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  )
}

function DietListItem({ title, href, children }) {
  return (
    <li className="p-2 m-2 hover:bg-pink-800 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
      <a href={href}>
        <div className="text-white font-bold">{title}</div>
        <p className="text-white text-sm">{children}</p>
      </a>
    </li>
  )
}

export {
  DietListItem,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}

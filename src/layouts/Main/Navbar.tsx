"use client";
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Link as ScrollLink } from "react-scroll";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuIndicator,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar({ home = false }) {
  const router = useRouter();
  const { pathname } = router;

  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const togglemenu = () => {
    setShowMenu((prev) => !prev);
  };

  const [top, setTop] = React.useState(true);

  React.useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const routes = [
    {
      name: "About",
      href: "about",
      isIncluded: false,
    },
    {
      name: "Services",
      href: "services",
      isIncluded: true,
    },
    {
      name: "Our Work",
      href: "work",
      isIncluded: true,
    },
    {
      name: "Contact Us",
      href: "contact",
      isIncluded: true,
    },
  ];

  return (
    <header className={`fixed top-0 z-20 w-full shadow-lg`}>
      <nav className={` bg-white px-4 py-2.5 lg:px-6`}>
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between md:container">
          <Link href="/" className="flex items-center">
            <img
              src="/assets/logo/logoDark.svg"
              className="h-19 w-19 mr-3 md:h-16 md:w-16"
              alt="Meem-48 Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2 md:hidden">
            <ScrollLink
              to={"contact"}
              smooth={true}
              duration={0}
              key={"Contact"}
              className="cursor-pointer"
            >
              <Button
                variant="default"
                size="sm"
                className="font-semibold uppercase text-xs leadin-4"
              >
                Contact Us
              </Button>
            </ScrollLink>
          </div>

          <div className="hidden md:block">
            <div
              className="lg:h-auto md:auto w-full items-center justify-between  transition-all ease-in lg:order-1 lg:flex lg:w-auto"
              id="mobile-menu-2"
            >
              <NavigationMenu>
                <NavigationMenuList>
                  {routes.map((route) => {
                    const active =
                      pathname === route.href ||
                      (route.isIncluded && pathname.includes(route.href));
                    return (
                      <ScrollLink
                        to={route?.href}
                        smooth={true}
                        duration={0}
                        key={route.name}
                        className="cursor-pointer"
                      >
                        <NavigationMenuItem>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            {route.name}
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      </ScrollLink>
                    );
                  })}
                  <NavigationMenuIndicator />
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue hover:text-blue-foreground focus:bg-blue focus:text-blue-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

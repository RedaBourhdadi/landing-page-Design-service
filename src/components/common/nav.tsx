"use client";

import { ChevronDown, ChevronRight, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ContactButton } from "./contact-button";

// Services data
const services: { title: string; href: string; description: string }[] = [
  {
    title: "ADU Design",
    href: "/services/adus",
    description:
      "Accessory Dwelling Unit design providing complete solutions for independent living spaces.",
  },
  {
    title: "Foundation Assessment",
    href: "/services/foundation-inspection",
    description:
      "Professional evaluation of foundation conditions and repair solutions to ensure building safety.",
  },
  {
    title: "Interior Remodeling",
    href: "/services/interior-remodeling",
    description:
      "Modern renovation of interior spaces including kitchens, bathrooms, and bedrooms.",
  },
  {
    title: "Home Addition",
    href: "/services/home-addition",
    description:
      "Professional home addition services throughout California. From second story additions to master suite extensions, we design and build beautiful, functional spaces that enhance your lifestyle and increase your property value.",
  },
  {
    title: "Load-Bearing Wall Removal",
    href: "/services/load-bearing-wall-removal",
    description:
      "Professional removal, modification, and reinforcement of load-bearing walls ensuring structural integrity.",
  },
  {
    title: "Permit Application Services",
    href: "/services/permit-application-services",
    description:
      "Assistance with applying for and obtaining various building and construction permits.",
  },
  {
    title: "Fire Damage Restoration",
    href: "/services/fire-damage-restoration",
    description:
      "Comprehensive fire damage assessment and restoration services for residential and commercial properties.",
  },
];

export function Nav() {
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b  backdrop-blur bg-background">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
        {/* Logo section - always visible */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg" // Ensure this file exists or replace with actual logo path
              alt="Cecilia Home Logo"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="text-xl font-bold ">Cecilia Home</span>
          </Link>
        </div>

        {/* Desktop Navigation - hidden on mobile */}
        <div className="hidden flex-1 justify-center md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/services/adus" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    ADUs
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/showcase" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Showcase
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/articles" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Articles
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right section with CTA and mobile menu */}
        <div className="ml-auto flex items-center space-x-4">
          {/* CTA button - hidden on small mobile */}
          <Link href="tel:+06000000000" className="hidden  sm:block">
            <Button className="bg-button-background">
              Call Us
              <Phone className="h-4 w-4" />
            </Button>
          </Link>
          {/* Mobile menu button - only visible on mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu - dropdown from top with improved animation */}
      <div
        className={cn(
          "absolute left-0 right-0 top-12 z-50 bg-background border-b shadow-lg md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen
            ? "max-h-[1000px] opacity-100 border-b"
            : "max-h-0 opacity-0 border-b-0 py-0"
        )}
      >
        <div
          className={cn(
            "container mx-auto px-4 transition-all duration-300",
            mobileMenuOpen ? "py-4" : "py-0"
          )}
        >
          <nav className="flex flex-col ">
            <Link
              href="/services/adus"
              className="text-lg font-medium transition-colors hover:text-primary py-2 border-b border-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              ADUs
            </Link>

            {/* Collapsible Services Menu */}
            <div className="py-2 border-b border-muted">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex w-full items-center justify-between text-lg font-medium transition-colors hover:text-primary"
              >
                <span>Services</span>
                {servicesOpen ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>

              {servicesOpen && (
                <div className="flex flex-col space-y-2 mt-2 pl-4">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="text-sm transition-colors hover:text-primary py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/about"
              className="text-lg font-medium transition-colors hover:text-primary py-2 border-b border-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/showcase"
              className="text-lg font-medium transition-colors hover:text-primary py-2 border-b border-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Showcase
            </Link>
            <Link
              href="/articles"
              className="text-lg font-medium transition-colors hover:text-primary py-2 border-b border-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Articles
            </Link>

            <div className="pt-2">
              <ContactButton
                className="w-full"
                buttonText="Let's have a quick talk"
              />
            </div>
          </nav>
        </div>
      </div>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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

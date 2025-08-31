"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/assets/static-data";
import { cn } from "@/lib/utils";
import { logo, blackLogo, whiteLogo } from "@/assets";
import DemoDialog from "../common/demo-dialog";
import Image from "next/image";
import { ModeToggle } from "../theme/mode-toggle";

function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDemo, setIsOpenDemo] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash);
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);

    // Cleanup
    return () => window.removeEventListener("hashchange", updateHash);
  }, [activeHash]);

  console.log(activeHash);

  return (
    <nav
      className={`${
        isScrolled ? "dark:bg-black bg-white" : ""
      } sticky top-0 z-50 border-b shadow-sm `}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href={"/"}>
          <Image
            className="w-34 hidden dark:block"
            src={whiteLogo}
            height={100}
            width={100}
            alt="Dark Logo"
          />
          <Image
            className="w-34 block dark:hidden"
            src={blackLogo}
            height={100}
            width={100}
            alt="Light Logo"
          />
        </Link>
        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-muted-foreground">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary font-semibold" : ""
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button onClick={() => setIsOpenDemo(true)}>Book a Demo</Button>
            <DemoDialog open={isOpenDemo} onOpenChange={setIsOpenDemo} />
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black shadow-md px-4 py-4">
          <ul className="flex flex-col space-y-3 text-sm text-muted-foreground">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block transition-colors hover:text-primary",
                    activeHash === link.href ? "text-primary font-semibold" : ""
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Button asChild className="w-full mt-3">
                <Link href="/#demo">Book a Demo</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

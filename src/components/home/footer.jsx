// app/components/footer.tsx
"use client";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full dark:bg-black border-t border-border text-foreground py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 - Branding */}
        <div>
          <h2 className="text-xl font-bold mb-2 text-primary">Amaanah</h2>
          <p className="text-sm text-muted-foreground max-w-xs">
            Restaurant management problems? Amaanah EPOS is the solution to all
            your oddly specific nightmares.
          </p>
          <div className="flex gap-4 mt-4 text-muted-foreground">
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5 hover:text-primary" />
            </Link>
          </div>
        </div>

        {/* Column 2 - Contact Info */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-foreground">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              48-50 St. Augustines Street, Norwich, United Kingdom, NR3 3AD
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              amaanahsoft@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              0330 390 4240
            </li>
          </ul>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-foreground">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="#features" className="hover:text-primary">
                Features
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="hover:text-primary">
                Pricing
              </Link>
            </li>

            <li>
              <Link href="#contact" className="hover:text-primary">
                Get In Touch
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-foreground">Legals</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="#" className="hover:text-primary">
                Anti- Slavery Statement
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                Software License Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-primary">
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-muted-foreground text-xs mt-16 px-4 text-center">
        <div>
          <p>
            Amaanah EPOS Solutions is one of the trading names of Ar-Razzaakh
            LTD; Registered in England and Wales under company number 16272939.
            Registered office address: 48-50 St. Augustines Street, Norwich,
            United Kingdom, NR3 3AD.
          </p>
          <p className="mt-2">
            By continuing to use our website you consent to us storing cookies.
            For further information, see our{" "}
            <Link href="/privacy-policy" className="text-primary underline">
              Privacy Policy
            </Link>{" "}
            here. You can also view our{" "}
            <Link href="/privacy-policy" className="text-primary underline">
              Terms and Conditions
            </Link>{" "}
            here.
          </p>
        </div>
        <div className="text-center mt-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Amaanah. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

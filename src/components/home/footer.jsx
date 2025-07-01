// app/components/footer.tsx
"use client"

import Link from "next/link"
import {
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-border text-foreground py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 - Branding */}
        <div>
          <h2 className="text-xl font-bold mb-2 text-primary">Amaanah</h2>
          <p className="text-sm text-muted-foreground max-w-xs">
            Streamlining restaurant operations with smart, scalable, and secure software – built for the modern food business.
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

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-foreground">Quick Links</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="#features" className="hover:text-primary">Features</Link></li>
            <li><Link href="#about" className="hover:text-primary">About</Link></li>
            <li><Link href="#contact" className="hover:text-primary">Contact</Link></li>
            <li><Link href="#terms" className="hover:text-primary">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-foreground">Contact</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              123 Amaanah Street, Dhaka, BD
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +880-123-456789 (Support)
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +880-987-654321 (Sales)
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              hello@amaanah.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Amaanah. All rights reserved.
      </div>
    </footer>
  )
}

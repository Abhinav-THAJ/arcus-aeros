import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-surface pt-32 pb-12 border-t border-black/[0.04] text-primary-dark">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Brand */}
          <div className="md:col-span-5 space-y-8">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Arcus Aero — Fueling Futures Above the Clouds"
                width={220}
                height={74}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-secondary-dark/60 text-[15px] leading-relaxed max-w-sm font-light">
              Elevating aviation education through uncompromising premium instruction. Kerala’s first fully online DGCA pilot ground school.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2 md:col-start-8">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-widest text-primary-dark mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['About', 'Curriculum', 'Journey', 'Admissions'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-[15px] font-light text-secondary-dark/70 hover:text-primary-dark transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-widest text-primary-dark mb-8">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@arcusaero.info" className="text-[15px] font-light text-secondary-dark/70 hover:text-primary-dark transition-colors">info@arcusaero.info</a>
              </li>
              <li>
                <span className="text-[15px] font-light text-secondary-dark/70">Kerala, India</span>
              </li>
              <li className="pt-4">
                <a href="https://www.instagram.com/arcus_aero" target="_blank" rel="noopener noreferrer" className="text-[15px] font-semibold text-primary-dark hover:text-royal-purple transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-black/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-secondary-dark/50 font-light">
            &copy; {new Date().getFullYear()} Arcus Aero. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-[13px] text-secondary-dark/50 font-light">
            <span className="hover:text-primary-dark cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-primary-dark cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

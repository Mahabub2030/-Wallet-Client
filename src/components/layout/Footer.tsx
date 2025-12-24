import { motion } from "framer-motion";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import { Link } from "react-router";

import Logo from "../../assets/images/logo.png";

const footerLinks = {
  product: [
    { label: "About Us", href: "/about" },
    { label: "Features", href: "/feature" },
    { label: "Pricing", href: "/pricing" },
    { label: "Merchant API", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
    { label: "Security", href: "#" },
    { label: "System Status", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Compliance", href: "#" },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card/30 border-t pt-16 pb-8 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand & Description Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link
              to="/"
              className="flex items-center gap-1.5 sm:gap-2 transition-transform hover:scale-105 shrink-0"
            >
              {/* <Logo className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" /> */}
              <img
                src={Logo}
                alt="wallet Logo"
                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10"
              />

              <div className="flex flex-col leading-none">
                <p className="text-lg sm:text-xl font-bold tracking-tight uppercase">
                  Wallet<span className="text-primary">Money</span>
                </p>
                <span className="hidden sm:block text-[8px] lg:text-[10px] font-medium text-muted-foreground tracking-[0.1em] lg:tracking-[0.2em] uppercase">
                  Digital Wallet
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              The next generation digital wallet for secure, instant, and
              borderless transactions. Empolwering your financial freedom
              anytime, anywhere.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                <Mail size={18} className="text-primary" />
                <span>support@wallet.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                <Phone size={18} className="text-primary" />
                <span>+880 123 456 789</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Product Links */}
            <div className="space-y-5">
              <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">
                Product
              </h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="space-y-5">
              <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">
                Support
              </h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-5">
              <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">
              Stay Updated
            </h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to get the latest news and updates.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full bg-background border border-border rounded-lg py-3 px-4 outline-none focus:border-primary/50 transition-all pr-12"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-primary-foreground rounded-lg hover:scale-105 active:scale-95 transition-all">
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4 pt-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5 }}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer border border-primary/5"
                >
                  <Icon
                    size={18}
                    fill="currentColor"
                    className={
                      Icon === Linkedin || Icon === Twitter
                        ? ""
                        : "fill-current"
                    }
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear}{" "}
            <span className="font-bold text-foreground">Digital Wallet</span>.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/ardhiS', label: 'Github' },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/ardhisasongko/',
    label: 'LinkedIn',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/ardhi_sasongko/',
    label: 'Twitter',
  },
];

const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#project', label: 'Project' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export const Footer = () => {
  return (
    <footer className='py-12 border-t border-border'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
          {/* Logo & Copyright */}
          <div className='text-center md:text-left'>
            <a href='#' className='text-xl font-bold tracking-tight'>
              PM <span className='text-primary'>.</span>
            </a>
            <p className='text-sm text-muted-foreground mt-2'>
              @2025 Ardhi Sasongko. All Right Reserve.
            </p>
          </div>
          {/* Links */}

          <nav className='flex flex-wrap justify-between gap-6'>
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                className='text-sm text-muted-foreground hover:text-foreground transition-colors'
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className='flex items-center gap-4'>
            {socialLinks.map((social) => (
              <a
                href={social.link}
                key={social.label}
                aria-label={social.label}
                className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all'
              >
                <social.icon className='h-5 w-5' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Projekte',
      // href: getBlogPermalink(),
      href: '/#projects'
    },
    {
      text: 'Skills',
      href: '/#skills',
    },
    {
      text: 'Über mich',
      href: '/#about-me'
    },
  ],
  actions: [
    { type: 'button', text: 'Kontaktier mich', href: 'https://github.com/onwidget/astrowind' }
  ],
};

export const footerData = {
  links: [
    {
      title: 'Socials',
      links: [
        { text: 'Instagram', href: '#' },
        { text: 'Youtube', href: '#' },
        { text: 'LinkedIn', href: '#' },
      ],
    },
    {
      title: 'Kontakt',
      links: [
        { text: 'E-mail', href: '#' },
      ],
    },
    {
      title: 'Developement',
      links: [
        { text: 'Github', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Impressum', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    All rights reserved.
  `,
};

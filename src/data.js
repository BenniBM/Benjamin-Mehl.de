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
    { type: 'button', text: 'Kontaktier mich', href: 'mailto:benjamin.mehlbm@gmail.com' }
  ],
};

export const footerData = {
  links: [
    {
      title: 'Socials',
      links: [
        { text: 'Instagram', href: 'https://www.instagram.com/benjamin.mehl/' },
        { text: 'Youtube', href: 'https://www.youtube.com/@benjaminmehl8951' },
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/benjamin-mehl-089a2b227/' },
      ],
    },
    {
      title: 'Kontakt',
      links: [
        { text: 'E-mail', href: 'mailto:benjamin.mehlbm@gmail.com' },
        { text: 'Impressum', href: '/terms' },
      ],
    },
    {
      title: 'Developement',
      links: [
        { text: 'Github', href: 'https://github.com/bennibm' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Impressum', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@benjaminmehl8951' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/benjamin.mehl/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/bennibm' },
  ],
  footNote: `
    All rights reserved.
  `,
};

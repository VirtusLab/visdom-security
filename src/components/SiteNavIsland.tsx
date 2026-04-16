"use client";

import { TopBar, Nav, VisdomBrand } from '@virtuslab/visdom-ui';

interface SiteNavIslandProps {
  base: string;
}

const navLinks = (base: string) => [
  { label: 'Home', href: `${base}` },
  { label: 'Sandcat', href: `${base}#sandcat` },
  { label: 'Aikido', href: `${base}#aikido` },
];

export function SiteNavIsland({ base }: SiteNavIslandProps) {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopBar />
        <Nav
          brand={<VisdomBrand product="Security" href={base} />}
          links={navLinks(base)}
          cta={{ label: 'Sandcat on GitHub', href: 'https://github.com/VirtusLab/sandcat' }}
          className="relative top-auto left-auto right-auto"
        />
      </div>
      <div style={{ height: '96px' }} />
    </>
  );
}

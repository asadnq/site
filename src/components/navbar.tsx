import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from './ui/menubar';

const menu = [
  { name: 'Projects', href: '/projects' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Resume', href: '/resume' },
  { name: 'About', href: '/about' },
];

export const Navbar = () => {
  return (
    <NavbarContainer>
      <nav className="flex justify-between items-center py-4 px-8 bg-card/25 border-card border w-7xl rounded-full backdrop-blur-xl">
        <div className="flex items-center gap-x-4">
          <a href="/" className="text-2xl font-bold text-foreground">
            Asad
          </a>
        </div>
        <div className="hidden sm:flex items-center gap-x-4">
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xl font-bold text-foreground">
              {item.name}
            </a>
          ))}
        </div>
        <Menubar className="block sm:hidden">
          <MenubarMenu>
            <MenubarTrigger>Menu</MenubarTrigger>
            <MenubarContent sideOffset={20} alignOffset={-50} align="center">
              {menu.map((item) => (
                <MenubarItem key={item.name}>
                  <a
                    className="text-xl font-bold text-foreground"
                    href={item.href}>
                    {item.name}
                  </a>
                </MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </nav>
    </NavbarContainer>
  );
};

const NavbarContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="sticky top-0 md:top-5 w-full px-2 pt-4 max-w-5xl sm:max-w-6xl md:max-w-7xl mx-auto z-10">
      {children}
    </div>
  );
};

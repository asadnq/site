export const Navbar = () => {
  return (
    <NavbarContainer>
      <nav className="flex justify-between items-center py-4 px-8 bg-card/50 w-7xl rounded-full backdrop-blur-xl">
        <div className="flex items-center gap-x-4">
          <a href="/" className="text-2xl font-bold text-foreground">
            Asad
          </a>
        </div>

        <div className="flex items-center gap-x-4">
          <a href="/projects" className="text-xl font-bold text-foreground">
            Projects
          </a>
          <a href="/book-reviews" className="text-xl font-bold text-foreground">
            Book Reviews
          </a>
          <a href="/resume" className="text-xl font-bold text-foreground">
            Resume
          </a>
          <a href="/about" className="text-xl font-bold text-foreground">
            About
          </a>
        </div>
      </nav>
    </NavbarContainer>
  );
};

const NavbarContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="sticky top-0 md:top-5 w-full z-10">{children}</div>;
};

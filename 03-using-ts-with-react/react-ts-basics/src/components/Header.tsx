import { type ReactNode } from "react";

type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};
const Header = ({ image, children }: HeaderProps) => {
  return (
    <header>
      <picture>
        <img src={image.src} alt={image.alt} />
      </picture>
      {children}
    </header>
  );
};

export default Header;

import { Raute } from "@app/_public/Icons";

export interface FooterProps {
  className?: string;
}

export const Footer = (props: FooterProps) => {
  return (
    <footer
      className={`footer items-center p-4 relative bottom-0  ${props.className}`}
    >
      <aside className='items-center grid-flow-col'>
        <Raute />
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;


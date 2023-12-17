import { Header, HeaderProps } from './Header';

export const IconsHeader = (props: HeaderProps) => {
  return <Header {...props}></Header>;
};

// Hilangkan github icon
// export const IconsHeader = (props: HeaderProps) => {
//   return <Header gitHubLink="https://github.com/radix-ui/icons" {...props}></Header>;
// };

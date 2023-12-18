import { Text, Strong } from '@radix-ui/themes';

export const RadixLogo = () => (
  <Text
    as="div"
    size="5"
    style={{
      width: 'max-content',
      color: 'transparent',
      WebkitBackgroundClip: 'text',
      // filter: 'saturate(0.5)',
      backgroundImage: 'linear-gradient(to bottom left, var(--sage-a12), var(--sage-a10))',
    }}
  >
    Pajak<Strong>365</Strong>
  </Text>
);

export const RadixLogoIcon = () => (
  <Text
    as="div"
    size="5"
    style={{
      width: 'max-content',
      color: 'transparent',
      WebkitBackgroundClip: 'text',
      // filter: 'saturate(0.5)',
      backgroundImage: 'linear-gradient(to bottom left, var(--sage-a12), var(--sage-a10))',
    }}
  >
    Pajak<Strong>365</Strong>
  </Text>
);
function linearGradient(
  arg0: number,
  deg: any,
  arg2: any,
  arg3: number,
  arg4: any,
  arg5: number
): import('csstype').Property.BackgroundImage {
  throw new Error('Function not implemented.');
}

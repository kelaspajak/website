import { Heading } from '@radix-ui/themes';

export const SerifHeading = (props: React.ComponentPropsWithRef<typeof Heading>) => {
  return (
    <Heading
      weight="regular"
      size={{ initial: '8', xs: '9' }}
      {...props}
      style={
        {
          '--heading-font-family': "'Alegreya Variable', serif",
          '--heading-font-size-adjust': '1.2',
          ...props.style,
        } as React.CSSProperties
      }
    />
  );
};

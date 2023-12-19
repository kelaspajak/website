import { Box, Flex, Grid, Section, Container, Heading, Text, Theme } from '@radix-ui/themes';
import {
  EyeOpenIcon,
  MoonIcon,
  TransparencyGridIcon,
  Half2Icon,
  DesktopIcon,
  InputIcon,
} from '@radix-ui/react-icons';
import { MarketingCaption } from './MarketingCaption';

const stats = [
  {
    id: 1,
    name: 'Tidak ada SP2DK',
    description: 'Tidak ada SP2DK untuk WP yang tidak pernah diterbitkan SP2DK',
    icon: <EyeOpenIcon width="30" height="30" />,
  },
  {
    id: 2,
    name: 'SP2DK selesai tanpa KB',
    description: "Front of men's Basic Tee in black.",
    icon: <MoonIcon width="30" height="30" />,
  },
  {
    id: 3,
    name: 'SKP Nihil',
    description: 'Dari temuan SP2DK bernilai puluhan milyar menjadi SKP Nihil',
    icon: <Half2Icon width="30" height="30" />,
  },
  // More stats...
];

export const CaseStudiesSection = () => {
  return (
    <Section
      size={{ initial: '2', md: '3' }}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
        <Box mb="7">
          <MarketingCaption mb="1">Why Radix Primitives</MarketingCaption>
          <Heading as="h2" size="7">
            Spend less time on
            <br />
            undifferentiated work
          </Heading>
        </Box>
        <Grid columns={{ initial: '1', xs: '2', sm: '3', md: '4' }} gap={{ initial: '7', sm: '5' }}>
          {stats.map((stat) => (
            <Box key={stat.id} style={{ maxWidth: 540 }}>
              <Flex mb="3">{stat.icon}</Flex>
              <Heading size="4" as="h3" mb="2">
                {stat.name}
              </Heading>
              <Text as="p" size="3">
                {stat.description}
              </Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Section>
    // <Theme asChild accentColor="mint">
    //   <Box mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
    //     <Section size={{ initial: '2', md: '3' }}>
    //       <Container>
    //         <Grid
    //           p="6"
    //           columns={{ sm: '3' }}
    //           gap={{ initial: '7', sm: '6', md: '9' }}
    //           style={{ backgroundColor: 'var(--blue-a3)', borderRadius: 'var(--radius-3)' }}
    //         >
    //           {stats.map((stat) => (
    //           <Box key={stat.id} style={{ maxWidth: 540 }}>
    //             <Flex mb="3">
    //             {stat.icon}
    //             </Flex>
    //             <Heading size="4" as="h3" mb="2">
    //             {stat.name}
    //             </Heading>
    //             <Text as="p" size="3">
    //             {stat.description}
    //             </Text>
    //           </Box>
    //           ))}
    //         </Grid>
    //       </Container>
    //     </Section>
    //   </Box>
    // </Theme>
  );
};

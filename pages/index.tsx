import { IconsHeader } from '@components/IconsHeader';
import { MobileMenu, MobileMenuProvider } from '@components/MobileMenu';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { IconsHero } from '@components/icons/IconsHero';
import { statsRoutes } from '@lib/StatsRoutes';
import { Box, Container, Text, ScrollArea, Separator } from '@radix-ui/themes';
import { Menu } from '@components/icons/Menu';
import { DocsNav } from '@components/DocsNav';
import { ColorsHeader } from '@components/ColorsHeader';
import { CaseStudiesSection } from '@components/icons/CaseStudiesSection';
import { MenuStats } from '@components/icons/MenuStats';

export default function Home() {
  return (
    <MobileMenuProvider>
      <MobileMenu>
        <ColorsHeader />
        <ScrollArea>
          <Box pt="4" px="4" pb="9">
            <DocsNav
              routes={[
                {
                  pages: [
                    {
                      title: 'Homepage',
                      slug: '/',
                    },
                  ],
                },
                ...statsRoutes,
              ]}
            />
          </Box>
        </ScrollArea>
      </MobileMenu>

      <TitleAndMetaTags
        title="Konsultasi Pajak365"
        description="Konsultasikan pajak Anda dengan ahli, tanpa perlu datang ke kantor pajak"
        image="icons.png"
      />

      <IconsHeader ghost />

      <IconsHero />

      <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }} mb="3">
        <Text as="p" size={{ initial: '6', xs: '6', sm: '7', md: '9' }} color="blue" highContrast>
          One stop solution untuk konsultasi perpajakan, update aturan perpajakan, dan dukungan
          aplikasi perpajakan.
        </Text>
      </Container>

      <CaseStudiesSection />
      {/* <Menu /> */}
      <MenuStats routes={[...statsRoutes]} />
      {/* <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
        <Separator size="2" />
        <Section size={{ initial: '2', md: '3' }} pb="0">
          <Footer />
        </Section>
      </Container> */}
    </MobileMenuProvider>
  );
}

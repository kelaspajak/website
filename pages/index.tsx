import { IconsHeader } from '@components/IconsHeader';
import { MobileMenu, MobileMenuProvider } from '@components/MobileMenu';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { IconsHero } from '@components/icons/IconsHero';
import { IconsPanel } from '@components/icons/IconsPanel';
import { iconsRoutes } from '@lib/iconsRoutes';
import { Box, Container, ScrollArea, Separator, Section } from '@radix-ui/themes';
import { Menu } from '@components/icons/Menu';
import { DocsNav } from '@components/DocsNav';
import { ColorsHeader } from '@components/ColorsHeader';
import { Footer } from '@components/Footer';
import { BenefitsSection } from '@components/marketing/BenefitsSection';
import { StatsSection } from '@components/marketing/StatsSection';

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
                      slug: 'index',
                    },
                  ],
                },
                ...iconsRoutes,
              ]}
            />
          </Box>
        </ScrollArea>
      </MobileMenu>

      <TitleAndMetaTags
        title="Konsultasi Pajak365"
        description="A crisp set of 15×15 icons designed by the WorkOS team."
        image="icons.png"
      />

      <IconsHeader ghost />

      <IconsHero />
      <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
        <Separator size="2" />
      </Container>
      <Box style={{ overflow: 'hidden' }}>
        <BenefitsSection />
        <StatsSection />
      </Box>
      <Menu />
      {/* <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }} pb="9">
        <IconsPanel />
      </Container> */}
      <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
        <Separator size="2" />
        <Section size={{ initial: '2', md: '3' }} pb="0">
          <Footer />
        </Section>
      </Container>
    </MobileMenuProvider>
  );
}

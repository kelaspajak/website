import { IconsHeader } from '@components/IconsHeader';
import { MobileMenu, MobileMenuProvider } from '@components/MobileMenu';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { Box, Container, ScrollArea, Section, Heading, Text, Theme } from '@radix-ui/themes';
import { DocsNav } from '@components/DocsNav';
import { ColorsHeader } from '@components/ColorsHeader';
import { HoverMenu } from '@components/icons/MenuHover';
import { AccessibilitySection } from '@components/icons/AccessibilitySection';
import { statistik2023 } from '@lib/Statistik2023';
import { IconsPanel } from '@components/icons/IconsPanel';
import { IconsHero } from '@components/icons/IconsHero';
import { ComponentHighlightsSection } from '@components/icons/ComponentHighlightsSection';

export default function Home() {
  return (
    <Theme accentColor="blue" panelBackground="solid">
      <MobileMenuProvider>
        <MobileMenu>
          <ColorsHeader ghost />
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
                  ...statistik2023,
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
        <Box
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            height: 480,
            opacity: 0.6,
            background: 'linear-gradient(to bottom, var(--crimson-4), var(--amber-2), transparent)',
          }}
        />
        <IconsHeader ghost />
        <IconsHero />

        <Box position="relative">
          <Section size={{ initial: '2', md: '2' }}>
            <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
              <Box mb="7">
                <Box mb="5">
                  <Heading as="h2" size={{ initial: '7', md: '9' }} style={{ fontWeight: '600' }}>
                    One stop solution untuk konsultasi perpajakan, update aturan perpajakan, dan
                    dukungan aplikasi perpajakan.
                  </Heading>
                </Box>
              </Box>
            </Container>
          </Section>
        </Box>

        <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }} pb="9">
          <ComponentHighlightsSection />
        </Container>
        {/* menu hover statistik disebelah kanan */}
        <HoverMenu routes={[...statistik2023]} />

        {/* <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }} pb="9">
        <IconsPanel />
      </Container> */}

        {/* <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
        <Separator size="2" />
        <Section size={{ initial: '2', md: '3' }} pb="0">
          <Footer />
        </Section>
      </Container> */}
      </MobileMenuProvider>
    </Theme>
  );
}

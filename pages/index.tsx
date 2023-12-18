import { IconsHeader } from '@components/IconsHeader';
import { MobileMenu, MobileMenuProvider } from '@components/MobileMenu';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { IconsHero } from '@components/icons/IconsHero';
import { iconsRoutes } from '@lib/iconsRoutes';
import { Box, Container, Text, ScrollArea, Separator, Quote } from '@radix-ui/themes';
import { Menu } from '@components/icons/Menu';
import { DocsNav } from '@components/DocsNav';
import { ColorsHeader } from '@components/ColorsHeader';
import { StatsSection } from '@components/icons/StatsSection';
import { CommunitySection } from '@components/icons/CommunitySection';
import { BenefitsSection } from '@components/icons/BenefitsSection';
import { CaseStudiesSection } from '@components/icons/CaseStudiesSection';

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
                ...iconsRoutes,
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

      <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
        <Text as="p" mb="5" size="4">
          The goal of typography is to relate font size, line height, and line width in a
          proportional way that maximizes beauty and makes reading easier and more pleasant. The
          question is: What proportion(s) will give us the best results? The golden ratio is often
          observed in nature where beauty and utility intersect; perhaps we can use this “divine”
          proportion to enhance these attributes in our typography.
        </Text>

        <Text as="p" mb="5" size="3">
          The goal of typography is to relate font size, line height, and line width in a
          proportional way that maximizes beauty and makes reading easier and more pleasant. The
          question is: What proportion(s) will give us the best results? The golden ratio is often
          observed in nature where beauty and utility intersect; perhaps we can use this “divine”
          proportion to enhance these attributes in our typography.
        </Text>

        <Text as="p" size="2" mb="5" color="gray">
          The goal of typography is to relate font size, line height, and line width in a
          proportional way that maximizes beauty and makes reading easier and more pleasant. The
          question is: What proportion(s) will give us the best results? The golden ratio is often
          observed in nature where beauty and utility intersect; perhaps we can use this “divine”
          proportion to enhance these attributes in our typography.
        </Text>
        <Text as="p" size="9" color="crimson" highContrast>
          His famous quote,{' '}
          <Quote>Styles come and go. Good design is a language, not a style</Quote>, elegantly summs
          up Massimos philosophy of design.
        </Text>
      </Container>

      <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
        <Separator size="2" />
      </Container>
      <Box style={{ overflow: 'hidden' }}>
        <BenefitsSection />
        <StatsSection />
      </Box>

      <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
        {/* <Separator size="2" /> */}
      </Container>
      <CaseStudiesSection />

      <CommunitySection />
      <Menu />

      {/* <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
        <Separator size="2" />
        <Section size={{ initial: '2', md: '3' }} pb="0">
          <Footer />
        </Section>
      </Container> */}
    </MobileMenuProvider>
  );
}

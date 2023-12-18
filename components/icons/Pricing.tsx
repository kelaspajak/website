import {
  AccessibleIcon,
  Avatar,
  Box,
  Flex,
  Grid,
  Section,
  Container,
  Heading,
  Card,
  Text,
  Theme,
} from '@radix-ui/themes';
import NextLink from 'next/link';
import { CaseStudyLogo } from './CaseStudyLogo';

export const Pricing = () => {
  return (
    <Theme asChild accentColor="mint" appearance="dark" scaling="90%">
      <Section size={{ initial: '2', md: '3' }}>
        <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
          <Box mb="5">
            {/* <MarketingCaption mb="1">Case studies</MarketingCaption> */}
            <Heading as="h2" size="7" style={{ maxWidth: 500 }}>
              Pricing
            </Heading>
          </Box>

          <Grid columns={{ sm: '2' }} gap="5" mb="6">
            <NextLink passHref legacyBehavior href="/primitives/case-studies/vercel">
              <Card asChild size="3">
                <a>
                  <Box mb="5">
                    <Heading size="5">1 NPWP - 1 Seat</Heading>
                  </Box>
                  <Text as="p" size="3" mb="4" style={{ textIndent: '-0.5em' }}>
                    “We’ve been able to focus on building solid user experiences on top of Radix
                    Primitives. With UI components, there are just too many angles and rabbit holes
                    to cover for product teams that wish to move quickly.”
                  </Text>
                </a>
              </Card>
            </NextLink>
            <NextLink passHref legacyBehavior href="/primitives/case-studies/codesandbox">
              <Card asChild size="3" variant="classic">
                <a>
                  <Box mb="5">
                    <AccessibleIcon label="CodeSandbox case study">
                      <CaseStudyLogo variant="CodeSandbox" />
                    </AccessibleIcon>
                  </Box>
                  <Text as="p" size="3" mb="4" style={{ textIndent: '-0.5em' }}>
                    “Radix has significantly improved the accessibility standard in our components.
                    We spend far less time discussing and implementing keyboard navigation, focus
                    traps, and researching appropriate ARIA techniques for our components.”
                  </Text>
                  <Flex align="center" gap="3">
                    <Avatar
                      size="3"
                      fallback="S"
                      radius="full"
                      src="/marketing/avatar-scott-hutcheson.png"
                      aria-describedby="person2"
                    />
                    <Text color="gray" size="3" id="person2">
                      Scott Hutcheson, Product Engineer at CodeSandbox
                    </Text>
                  </Flex>
                </a>
              </Card>
            </NextLink>
          </Grid>
        </Container>
      </Section>
    </Theme>
  );
};

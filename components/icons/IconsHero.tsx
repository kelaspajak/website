import React from 'react';
import { Box, Container, Section, Text } from '@radix-ui/themes';
import NextLink from 'next/link';

import { SerifHeading } from '@components/SerifHeading';
import { ColorsMarketingButton } from '@components/ColorsMarketingButton';

export const IconsHero = () => {
  return (
    <>
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 480,
          opacity: 0.6,
          // background: 'linear-gradient(to bottom, var(--teal-a5), transparent)',
        }}
      />

      <Box position="relative">
        <Section size={{ initial: '2', md: '3' }}>
          <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
            <Box mb="7">
              <Box mb="5">
                <SerifHeading mb="3" style={{ maxWidth: 720 }}>
                  Konsultasi Pajak365
                </SerifHeading>
                <Text size="5" as="p" mb="6" style={{ maxWidth: 520 }}>
                  Konsultasikan pajak Anda dengan ahli, tanpa perlu datang ke kantor pajak.
                </Text>
              </Box>
            </Box>

            <NextLink href="/colors/docs/overview/installation" passHref legacyBehavior>
              <ColorsMarketingButton asChild size={{ initial: '3', xs: '4' }}>
                <a>
                  Get started
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentcolor"
                    style={{ opacity: 1, marginRight: -3 }}
                  >
                    <path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z" />
                  </svg>
                </a>
              </ColorsMarketingButton>
            </NextLink>
          </Container>
        </Section>
      </Box>
    </>
  );
};

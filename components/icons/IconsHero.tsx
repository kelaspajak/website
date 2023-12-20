import React from 'react';
import { Box, Container, Section, Text } from '@radix-ui/themes';

import { SerifHeading } from '@components/SerifHeading';

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
          background: 'linear-gradient(to bottom, var(--teal-a5), transparent)',
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
                <Text size="5" as="p" mb="6" color="gray" style={{ maxWidth: 520 }}>
                  Konsultasikan pajak Anda dengan ahli, tanpa perlu datang ke kantor pajak.
                </Text>
              </Box>
            </Box>
          </Container>
        </Section>
      </Box>
    </>
  );
};

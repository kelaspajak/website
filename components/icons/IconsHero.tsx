import React from 'react';
import { FaceIcon, ArrowLeftIcon, FigmaLogoIcon } from '@radix-ui/react-icons';
import { Box, Button, Code, Container, Flex, Section, Text } from '@radix-ui/themes';

import styles from './IconsHero.module.css';
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
          background: 'linear-gradient(to bottom, var(--mint-a2), transparent)',
        }}
      />

      <Box className={styles.IconsHeroLinesContainer}>
        <Box className={styles.IconsHeroLines}>
          <Line color="var(--sky-a3)" angle="0deg" offset="0, 0.467em" />
          <Line color="var(--sky-a3)" angle="0deg" offset="0, 0.533em" />

          <Line color="var(--blue-a3)" angle="45deg" offset="-0.288em, 0" />
          <Line color="var(--blue-a3)" angle="45deg" offset="-0.288em, 0.090em" />

          <Line color="var(--teal-a3)" angle="-45deg" offset="0.622em, 0" />
          <Line color="var(--teal-a3)" angle="-45deg" offset="0.622em, 0.090em" />

          <Line color="var(--sky-a3)" angle="45deg" offset="0.242em, 0" />
          <Line color="var(--sky-a3)" angle="-45deg" offset="0.242em, 1em" />

          <Line color="var(--mint-a3)" angle="0deg" offset="0, 0" />
          <Line color="var(--mint-a3)" angle="0deg" offset="0, 1em" />

          <Line color="var(--mint-a3)" angle="90deg" offset="0, 0" />
          <Line color="var(--mint-a3)" angle="90deg" offset="1em, 0" />

          {/* <FaceIcon style={{ position: 'relative', width: '1em', height: '1em' }} /> */}
        </Box>
      </Box>

      <Box position="relative">
        <Section size={{ initial: '2', md: '3' }}>
          <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
            <Box mb="7">
              <Box mb="5">
                <SerifHeading mb="3" style={{ maxWidth: 560 }}>
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

type LineProps = {
  angle?: string;
  offset?: string;
  color?: string;
};

const Line = ({ angle = '0deg', offset = '0px, 0px', color }: LineProps) => {
  return (
    <Box
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 'calc(200vw + 200vh)',
        height: '1px',
        transform: `translate(${offset}) rotate(${angle}) translate(-50%, -50%)`,
        transformOrigin: 'top left',
        backgroundColor: color,
      }}
    />
  );
};

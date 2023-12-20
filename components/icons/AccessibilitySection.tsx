import { Box, Container, Card, Grid, Section, Heading, Text } from '@radix-ui/themes';
import {
  CalendarIcon,
  ChatBubbleIcon,
  CheckCircledIcon,
  EyeClosedIcon,
  InputIcon,
  KeyboardIcon,
} from '@radix-ui/react-icons';
import * as React from 'react';
import { MarketingCaption } from './MarketingCaption';
import styles from './AccessibilitySection.module.css';

export const AccessibilitySection = () => {
  return (
    <Section size={{ initial: '2', md: '3' }} className={styles.AccessibilitySectionRoot}>
      <div className={styles.AccessibilitySectionBackground}>
        <div className={styles.AccessibilitySectionBackgroundSquare} />
        <div className={styles.AccessibilitySectionBackgroundTriangle}>
          <svg
            viewBox="0 0 674 584"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%' }}
          >
            <path
              d="M9.64854 578.265L337.465 10.47L665.282 578.265H9.64854Z"
              vectorEffect="non-scaling-stroke"
              stroke="currentcolor"
              strokeWidth="10"
            />
          </svg>
        </div>
        <div className={styles.AccessibilitySectionBackgroundCircle} />
      </div>

      <Container position="relative" mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
        <Box mb="5">
          <MarketingCaption mb="1">Supports assistive technology</MarketingCaption>
          <Heading as="h2" size="7">
            Untuk mendapatkan dukungan yang tepat, inilah ide jenius.
          </Heading>
        </Box>

        <Grid columns={{ initial: '1', xs: '2', md: '4' }} gap="3">
          <Card style={{ WebkitBackdropFilter: 'blur(8px)', backdropFilter: 'blur(8px)' }}>
            <Box mb="3">
              <ChatBubbleIcon width="30" height="30" />
            </Box>
            <Heading as="h3" size="3" mb="1">
              Layanan Satu Tahun
            </Heading>
            <Text size="3" as="p" color="gray">
              Dukungan satu tahun untuk jumlah insiden yang tidak terbatas
            </Text>
          </Card>

          <Card style={{ WebkitBackdropFilter: 'blur(8px)', backdropFilter: 'blur(8px)' }}>
            <Box mb="3">
              <KeyboardIcon width="30" height="30" />
            </Box>
            <Heading as="h3" size="3" mb="1">
              Dokumen permohonan
            </Heading>
            <Text size="3" as="p" color="gray">
              Dapatkan jawaban atas pertanyaan Anda dari pakarnya melalui telepon, obrolan, email,
              atau bahkan Twitter
            </Text>
          </Card>

          {/* <Card style={{ WebkitBackdropFilter: 'blur(8px)', backdropFilter: 'blur(8px)' }}>
            <Box mb="3">
              <InputIcon width="30" height="30" />
            </Box>
            <Heading as="h3" size="3" mb="1">
              Focus management
            </Heading>
            <Text size="3" as="p" color="gray">
              Out of the box, Primitives provide sensible focus management defaults, which can be
              further customized in your code.
            </Text>
          </Card>

          <Card style={{ WebkitBackdropFilter: 'blur(8px)', backdropFilter: 'blur(8px)' }}>
            <Box mb="3">
              <EyeClosedIcon width="30" height="30" />
            </Box>
            <Heading as="h3" size="3" mb="1">
              Screen reader tested
            </Heading>
            <Text size="3" as="p" color="gray">
              We test Primitives with common assistive technologies, looking out for practical
              issues that people may experience.
            </Text>
          </Card> */}
        </Grid>
      </Container>
    </Section>
  );
};

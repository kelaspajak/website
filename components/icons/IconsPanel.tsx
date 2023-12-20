import { CodeBlock } from '@components/CodeBlock';
import { Box, Heading, Text } from '@radix-ui/themes';
import * as React from 'react';

import styles from './IconsPanel.module.css';

export const IconsPanel = () => {
  return (
    <>
      <Box
        style={{
          borderRadius: 'var(--radius-4)',
          minHeight: 'fit-content',
          background: 'var(--color-background)',
          position: 'relative',
        }}
      >
        <Box
          position="absolute"
          inset="0"
          style={{
            pointerEvents: 'none',
            borderRadius: 'inherit',
            boxShadow: 'var(--shadow-5)',
          }}
        />

        <Box p={{ initial: '5', sm: '6' }} className={styles.IconsPanelMainSection}>
          {/* <Box mb="5" style={{ gridColumn: '3 / 4' }}>
            <Heading as="h3" size="5">
              Assets
            </Heading>

            <Flex direction="column" gap="2" mt="3">
              <Flex align="center" gap="2" asChild>
                <Link
                  size="2"
                  href="https://www.figma.com/file/9Df5CaFUEomVzn20gRpaX3/Radix-Icons"
                  target="_blank"
                  highContrast
                  color="gray"
                >
                  <FigmaLogoIcon />
                  Open in Figma
                </Link>
              </Flex>
            </Flex>
          </Box> */}

          <Box mb={{ initial: '5', sm: '0' }} className={styles.IconsPanelSectionContent}>
            <Heading as="h3" size="5">
              React components
            </Heading>

            <Text as="p" size="3" mt="3">
              All icons are available as individual React components. Install Radix Icons from npm:
            </Text>

            <CodeBlock mt="3" language="bash" value="npm install @radix-ui/react-icons" />

            <Text as="p" size="3" mt="4">
              Import the icons into your React project:
            </Text>

            <CodeBlock
              mt="2"
              language="jsx"
              value={`import { FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons'

function MyComponent () {
  return (
    <div>
      <FaceIcon />
      <SunIcon />
      <ImageIcon />
    </div>
  )
}`}
            />
          </Box>

          {/* <Box style={{ gridColumn: '3 / 4' }}>
            <Heading as="h3" size="5">
              License
            </Heading>

            <Text as="p" size="2" mt="2">
              Licensed under the{' '}
              <Link
                size="2"
                href="https://github.com/radix-ui/icons/blob/master/LICENSE"
                highContrast
                color="gray"
              >
                MIT License
              </Link>
              .
              <br />
              Copyright © 2022–present WorkOS.
            </Text>
          </Box> */}
        </Box>
      </Box>
    </>
  );
};

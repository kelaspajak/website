import React from 'react';
import { Text, Heading, Box, Badge, Flex, Link } from '@radix-ui/themes';

interface DocsNavProps {
  routes: {
    label?: string;
    pages: {
      title: string;
      slug: string;
      icon?: React.ReactNode;
      preview?: boolean;
      deprecated?: boolean;
    }[];
  }[];
}

export const MenuStats = ({ routes }: DocsNavProps) => {
  return (
    <>
      <Flex
        m="6"
        justify="end"
        display={{ initial: 'none', md: 'inline-flex' }}
        position="fixed"
        right="0"
        style={{ top: 'var(--space-6)' }}
      >
        <Flex
          align="start"
          direction="column"
          gap="2"
          p="4"
          style={{
            backgroundColor: 'var(--color-panel-solid)',
            backgroundImage: 'linear-gradient(to top, var(--teal-a4), var(--sky-a4))',
            borderRadius: 'var(--radius-1)',
            boxShadow: '0 10px 40px -10px hsla(174, 100%, 30%, 0.05)',
            userSelect: 'none',
          }}
        >
          {routes.map((section, i) => (
            <Flex key={section.label ?? i} align="center" gap="2" asChild>
              {section.label}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

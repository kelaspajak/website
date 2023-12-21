import React from 'react';
import NextLink from 'next/link';
import { Text, Heading, Box, Badge, Flex } from '@radix-ui/themes';
import { classNames } from '@lib/classNames';
import styles from '@components/DocsNav.module.css';
import scrollIntoView from 'scroll-into-view-if-needed';

interface StatsNavProps {
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

export const HoverMenu = ({ routes }: StatsNavProps) => {
  return (
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
          <Box key={section.label ?? i} mb="4">
            {section.label && (
              <Box py="2" px="3">
                <Heading as="h3" size="5">
                  {section.label}
                </Heading>
              </Box>
            )}

            {section.pages.map((page) => (
              <div key={page.slug}>
                <Flex align="center" gap="2" asChild>
                  <Text size="2" highContrast color="green">
                    {page.icon}
                    {page.title}
                  </Text>
                </Flex>
              </div>
            ))}
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

interface StatsNavItemProps {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  href: string;
  className?: string;
}

const StatsNavItem = ({ active, disabled, href, ...props }: StatsNavItemProps) => {
  const className = classNames(styles.StatsNavItem, active && styles.active);
  const isExternal = href.startsWith('http');
  const ref = React.useRef<HTMLAnchorElement>(null);

  React.useEffect(() => {
    // Scroll active links into view when in a Scroll Area
    if (ref.current && active) {
      const container = document.querySelector('[data-radix-scroll-area-viewport]');

      if (!container) {
        return;
      }

      // Tread very, very, very carefully if changing this.
      // Sneaky bugs reproduced only on select cursed devices may show up.
      scrollIntoView(ref.current, {
        block: 'nearest',
        scrollMode: 'if-needed',
        boundary: (parent) => Boolean(container.contains(parent)),
        behavior: (actions) => {
          actions.forEach(({ el, top }) => {
            const dir = el.scrollTop < top ? 1 : -1;
            el.scrollTop = top + 80 * dir;
          });
        },
      });
    }
  }, [active]);

  if (disabled) {
    return <span ref={ref} className={className} {...props} />;
  }

  if (isExternal) {
    return (
      <a ref={ref} className={className} href={href} target="_blank" rel="noopener" {...props} />
    );
  }

  return (
    <NextLink passHref legacyBehavior href={`/${href}`}>
      <a ref={ref} className={className} {...props} />
    </NextLink>
  );
};

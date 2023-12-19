import React from 'react';
import { EyeOpenIcon, Half2Icon, MoonIcon, ValueNoneIcon } from '@radix-ui/react-icons';
import { Flex, Link } from '@radix-ui/themes';

const stats = [
  {
    id: 1,
    name: 'Tidak ada SP2DK',
    description: 'Tidak ada SP2DK untuk WP yang tidak pernah diterbitkan SP2DK',
    icon: <EyeOpenIcon />,
  },
  {
    id: 2,
    name: 'SP2DK selesai tanpa KB',
    description: "Front of men's Basic Tee in black.",
    icon: <MoonIcon />,
  },
  {
    id: 3,
    name: 'SKP Nihil',
    description: 'Dari temuan SP2DK bernilai puluhan milyar menjadi SKP Nihil',
    icon: <Half2Icon />,
  },
  {
    id: 4,
    name: 'Penghapusan Sanksi 100%',
    description: 'Dari temuan SP2DK bernilai puluhan milyar menjadi SKP Nihil',
    icon: <ValueNoneIcon />,
  },
  // More stats...
];

export const Menu = () => {
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
        {stats.map((stat) => (
          <Flex key={stat.id} align="center" gap="2" asChild>
            <Link
              size="2"
              underline="hover"
              href="https://github.com/radix-ui/icons"
              target="_blank"
              highContrast
              color="gray"
            >
              {stat.icon}
              {stat.name}
            </Link>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

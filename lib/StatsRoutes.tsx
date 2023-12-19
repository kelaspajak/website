import { EyeOpenIcon, Half2Icon, MoonIcon, ValueNoneIcon } from '@radix-ui/react-icons';

export const statsRoutes: RouteProps[] = [
  {
    label: 'Statistik 2023',
    pages: [
      {
        title: 'Tidak ada SP2DK',
        slug: 'Tidak ada SP2DK untuk WP yang tidak pernah diterbitkan SP2DK',
        icon: <EyeOpenIcon />,
      },
      {
        title: 'SP2DK selesai tanpa KB',
        slug: "Front of men's Basic Tee in black.",
        icon: <MoonIcon />,
      },
      {
        title: 'SKP Nihil',
        slug: 'Dari temuan SP2DK bernilai puluhan milyar menjadi SKP Nihil',
        icon: <Half2Icon />,
      },
      {
        title: 'Penghapusan Sanksi 100%',
        slug: 'Dari temuan SP2DK bernilai puluhan milyar menjadi SKP Nihil',
        icon: <ValueNoneIcon />,
      },
    ],
  },
];

export type PageProps = {
  title: string;
  slug: string;
  icon: React.ReactNode;
};

export type RouteProps = {
  label: string;
  pages: PageProps[];
};

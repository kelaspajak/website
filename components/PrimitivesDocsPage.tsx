import { Box, Flex, ScrollArea } from '@radix-ui/themes';
import { DocsPagination } from '@components/DocsPagination';
import { PrimitivesHeader } from '@components/PrimitivesHeader';
import { allPrimitivesRoutes, primitivesRoutes } from '@lib/primitivesRoutes';
import { DocsNav } from './DocsNav';
import { MobileMenuProvider } from './MobileMenu';
import { SideNav } from './SideNav';
import { DocsPageWrapper } from './DocsPageWrapper';
import { EditPageLink } from './EditPageLink';
import { PrimitivesMobileMenu } from './PrimitivesMobileMenu';

export function PrimitivesDocsPage({ children }: { children: React.ReactNode }) {
  return (
    <MobileMenuProvider>
      <PrimitivesHeader />
      <PrimitivesMobileMenu />

      <Flex>
        <SideNav>
          <Box pt="4" px="4" pb="9">
            <DocsNav routes={primitivesRoutes} />
          </Box>
        </SideNav>

        <DocsPageWrapper>
          <Box data-algolia-page-scope>{children}</Box>
          <DocsPagination allRoutes={allPrimitivesRoutes} />
          <EditPageLink />
        </DocsPageWrapper>
      </Flex>
    </MobileMenuProvider>
  );
}

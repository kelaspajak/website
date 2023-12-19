import { MarketingCaption } from './MarketingCaption';
import { Box, Section, Grid, Container, Heading, Em, Text, Quote } from '@radix-ui/themes';

export const BenefitsSection = () => {
  return (
    <Section
      size={{ initial: '2', md: '3' }}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
        <Box mb="7">
          <MarketingCaption mb="1">Why Radix Primitives</MarketingCaption>
          <Heading as="h2" size="7">
            Spend less time on
            <br />
            undifferentiated work
          </Heading>
        </Box>

        <Grid columns={{ initial: '1', sm: '2' }} gap={{ initial: '7', sm: '5' }}>
          <Box>
            <Heading as="h3" size="4" mb="2">
              Kami selalu terdepan
              <br />
              menghadirkan informasi terbaru.
            </Heading>
            <Text as="p" size="3" mr={{ sm: '5', md: '7', lg: '9' }}>
              di Diskusi Pajak, kami terdepan dalam memberikan informasi perpajakan terbaru, memberi
              slide perpajakan terbaru, menemukan bug dan solusi aplikasi DJP. kami hadir untuk
              membantu perusahaan Anda
            </Text>
          </Box>

          <Box>
            <Heading as="h3" size="4" mb="2">
              Saran sederhana yang <br />
              mengurangi jumlah temuan pajak.
            </Heading>
            <Text as="p" size="3" mr={{ sm: '5', md: '7', lg: '9' }}>
              Tidak hanya memberikan masukan untuk setiap transaksi, kami juga memberikan
              saran-saran untuk perbaikan SOP perpajakan perusahaan anda. Dengan harapan{' '}
              <em>mengurangi jumlah</em> temuan perpajakan dalam bentuk SP2DK atau pemeriksaan
              pajak.
            </Text>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};

import Head from 'next/head';
import Image from 'next/image';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { Button, Grid, IconButton } from '@mui/material';

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import PublicIcon from '@mui/icons-material/Public';
import {
  Facebook,
  Instagram,
  LinkedIn,
  WhatsApp,
  YouTube,
} from '@mui/icons-material';
import Link from 'next/link';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const styles = {
  largeIcon: {
    width: '100%',
    height: '100%',
  },
  iconButton: {
    backgroundColor: 'white',
    borderRadius: '50%',
    border: '1px solid grey',
    padding: 'auto',
  },
};

export default function Profile() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="">
      <Head>
        <title>BLACKLINK - The #1 Digital Business Card</title>
        <meta
          name="description"
          content="Tap your BLACKLINK digital business card to someone’s phone to instantly share and capture leads - no app needed. Easy contact sharing, lead generation & CRM integrations and more. Seamless team management."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
          <div className="card p-4">
            <div className="image d-flex flex-column justify-content-center align-items-center">
              <Image src="/jack.png" height="100" width="100" alt="test" />
              <span className="name mt-3">Jackson Lam</span>{' '}
              <span className="idd">Founder & CEO</span>{' '}
              <span className="idd">Kidos Tech</span>{' '}
              <div className=" d-flex mt-2 mb-2">
                {' '}
                <Button
                  color="primary"
                  variant="contained"
                  href="https://api.blacklink.cc/users/contact/637803ebef0085585e874f01"
                  target="_blank"
                >
                  Save Contact
                </Button>
              </div>
            </div>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="basic tabs example"
              >
                <Tab label="Personal Info" style={{ fontSize: '9px' }} />
                <Tab label="Social" style={{ fontSize: '9px' }} />
                <Tab label="Documents" style={{ fontSize: '9px' }} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <div className="gap-3 mt-3 icons d-flex flex-column">
                {' '}
                <Link href="tel:+85268883089">
                  <span>
                    <PhoneIcon />
                    &nbsp;&nbsp;+852 6888-3089
                  </span>
                </Link>
                <Link href="mailto:jackson@kidos.tech">
                  <span>
                    <EmailIcon />
                    &nbsp;&nbsp;jackson@kidos.tech
                  </span>
                </Link>
                <Link href="https://www.kidos.tech/" target="_blank">
                  <span>
                    <BusinessIcon />
                    &nbsp;&nbsp;Kidos Tech
                  </span>
                </Link>
                <Link href="https://www.kidos.tech/" target="_blank">
                  <span>
                    <PublicIcon />
                    &nbsp;&nbsp;kidos.tech
                  </span>
                </Link>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                className="text-center"
              >
                <Grid item xs={3}>
                  <IconButton
                    style={styles.iconButton}
                    color="primary"
                    href="https://www.linkedin.com/in/jacksonlamhk/"
                    target="_blank"
                  >
                    <LinkedIn style={styles.largeIcon} />
                  </IconButton>
                </Grid>
                <Grid item xs={3}>
                  <IconButton style={styles.iconButton} color="primary">
                    <Instagram style={styles.largeIcon} />
                  </IconButton>
                </Grid>
                <Grid item xs={3}>
                  <IconButton style={styles.iconButton} color="primary">
                    <WhatsApp style={styles.largeIcon} />
                  </IconButton>
                </Grid>
                <Grid item xs={3}>
                  <IconButton style={styles.iconButton} color="primary">
                    <Facebook style={styles.largeIcon} />
                  </IconButton>
                </Grid>
                <Grid item xs={3}>
                  <IconButton style={styles.iconButton} color="primary">
                    <YouTube style={styles.largeIcon} />
                  </IconButton>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}></TabPanel>
          </div>
        </div>
      </main>

      <footer className=""></footer>
    </div>
  );
}

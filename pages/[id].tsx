import * as React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { Button, Divider, Grid, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
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
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetails } from 'state/ducks/user/actions';
import { useRouter } from 'next/router';

import Subscribe from 'components/Subscribe';

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
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles({
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
  flexGrow: {
    flex: '1',
  },
  button: {
    backgroundColor: '#1F0B30',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#481a70',
      color: '#fff',
    },
  },
});

export default function Profile() {
  const router = useRouter();
  const { id } = router.query;
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { details } = useSelector((state: any) => state.user);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchDetails(id));
    }
  }, [dispatch, id]);

  return (
    <>
      <Head>
        <title>BLACKLINK - The #1 Digital Business Card</title>
        <meta
          name="description"
          content="Tap your BLACKLINK digital business card to someone’s phone to instantly share and capture leads - no app needed. Easy contact sharing, lead generation & CRM integrations and more. Seamless team management."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        {details ? (
          <div className="container mt-1 mb-2 p-3 d-flex justify-content-center">
            <Subscribe open={open} setOpen={setOpen} />
            <div className="card p-4">
              <div className="image d-flex flex-column justify-content-center align-items-center">
                <Image
                  src="/jack.png"
                  height="100"
                  width="100"
                  alt="test"
                  priority={true}
                />
                <span className="name mt-3">
                  {details.firstName} {details.lastName}
                </span>{' '}
                <span className="idd">{details.title}</span>{' '}
                <span className="idd">BLACKLINK by KidosTech</span>{' '}
                <div className=" d-flex mt-2 mb-2">
                  <Button
                    color="primary"
                    className={classes.button}
                    href="https://api.blacklink.cc/v1/users/contact/637803ebef0085585e874f01"
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
                <div className="gap-1 mt-3 icons d-flex flex-column">
                  {' '}
                  <Link href={`tel:${details.phone}`}>
                    <span>
                      <PhoneIcon />
                      &nbsp;&nbsp;{details.phone}
                    </span>
                  </Link>
                  <Link href={`mailto:${details.email}`}>
                    <span>
                      <EmailIcon />
                      &nbsp;&nbsp;{details.email}
                    </span>
                  </Link>
                  <Link href={details.website} target="_blank">
                    <span>
                      <BusinessIcon />
                      &nbsp;&nbsp;BLACKLINK
                    </span>
                  </Link>
                  <Link href={details.website} target="_blank">
                    <span>
                      <PublicIcon />
                      &nbsp;&nbsp;kidos.tech
                    </span>
                  </Link>
                  <span className="text-secondary">
                    <PublicIcon />
                    &nbsp;&nbsp;blacklink.cc
                  </span>
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
                      className={classes.iconButton}
                      color="primary"
                      href="https://www.linkedin.com/in/jacksonlamhk/"
                      target="_blank"
                    >
                      <LinkedIn className={classes.largeIcon} />
                    </IconButton>
                  </Grid>
                  <Grid item xs={3}>
                    <IconButton
                      className={classes.iconButton}
                      color="primary"
                      href="https://api.whatsapp.com/send?phone=+85268883089"
                      target="_blank"
                    >
                      <WhatsApp className={classes.largeIcon} />
                    </IconButton>
                  </Grid>
                  <Grid item xs={3}>
                    <IconButton
                      className={classes.iconButton}
                      color="primary"
                      disabled
                    >
                      <Instagram className={classes.largeIcon} />
                    </IconButton>
                  </Grid>

                  <Grid item xs={3}>
                    <IconButton
                      className={classes.iconButton}
                      color="primary"
                      disabled
                    >
                      <Facebook className={classes.largeIcon} />
                    </IconButton>
                  </Grid>
                  <Grid item xs={3}>
                    <IconButton
                      className={classes.iconButton}
                      color="primary"
                      disabled
                    >
                      <YouTube className={classes.largeIcon} />
                    </IconButton>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={2}></TabPanel>
              <div className="text-center">
                <div className="mb-2">
                  <span>BLACKLINK launching Dec 2022</span>
                </div>
                <Divider />
                <div className="mt-2">
                  <Button
                    onClick={(e) => {
                      setOpen(true);
                    }}
                    variant="outlined"
                    size="small"
                  >
                    join
                  </Button>{' '}
                  launch email list
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </main>

      <footer className="text-center"></footer>
    </>
  );
}

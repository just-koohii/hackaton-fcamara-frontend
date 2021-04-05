import { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { TabPanel } from '@components';
import { StudentsList } from '@components/Dashboard/Escola';
import { makeStyles } from '@material-ui/core/styles';
import api from '@services/api';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Doador({ students }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          className={classes.tabs}
          indicatorColor="primary"
        >
          <Tab label="Alunos" />
          <Tab label="Materiais" />
          <Tab label="Listas" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <StudentsList students={students} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Materiais
        </TabPanel>
        <TabPanel value={value} index={2}>
          Listas
        </TabPanel>
      </div>
    </>
  );
}

export const getServerSideProps = async ({ req }) => {
  const { token } = req.cookies;

  if (!token)
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };

  const { id } = req.cookies;

  // const { data: user } = await api.get(`perfil/escola/${id}`, {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });

  const { data: students } = await api.get(`listar/escola/${id}/alunos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    props: {
      students,
    },
  };
};

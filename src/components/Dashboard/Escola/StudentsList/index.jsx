import { useState } from 'react';
import { Grid } from '@material-ui/core';

import StudentCard from './components/StudentCard';
import StudentDialog from './components/StudentDialog';
import AddStudentDialog from './components/AddStudentDialog';

export function StudentsList({ students }) {
  const [infoDialog, setInfoDialog] = useState(false);
  const [addDialog, setAddDialog] = useState(false);
  const [selected, setselected] = useState();
  const [extraData, setExtraData] = useState([]);

  const handleDialog = (student) => {
    setInfoDialog(true);
    setselected(student);
  };

  const toggleAddDialog = () => {
    setAddDialog(!addDialog);
  };

  const handleAddStudent = (newStudent) => {
    setExtraData([
      ...extraData,
      {
        id: newStudent.id,
        nome: newStudent.nome,
        pais: {
          ...newStudent.pais,
        },
      },
    ]);
    toggleAddDialog();
  };

  return (
    <>
      <Grid container spacing={4}>
        {students.map((item) => (
          <Grid key={item.id} item xs={12} sm={3}>
            <StudentCard nome={item.nome} onClick={() => handleDialog(item)} />
          </Grid>
        ))}

        {extraData.map((item) => (
          <Grid key={item.id} item xs={12} sm={3}>
            <StudentCard nome={item.nome} onClick={() => handleDialog(item)} />
          </Grid>
        ))}

        <Grid item xs={12} sm={3}>
          <StudentCard mode="add" onClick={toggleAddDialog} />
        </Grid>
      </Grid>

      <StudentDialog
        open={infoDialog}
        onClose={() => setInfoDialog(false)}
        data={selected}
      />

      <AddStudentDialog
        open={addDialog}
        onClose={toggleAddDialog}
        onSubmit={handleAddStudent}
      />
    </>
  );
}

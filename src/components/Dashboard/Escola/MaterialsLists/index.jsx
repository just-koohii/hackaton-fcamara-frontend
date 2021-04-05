import { useState } from 'react';
import { Grid } from '@material-ui/core';

import ListCard from './components/ListCard';
import ListDialog from './components/ListDialog';
import AddListDialog from './components/AddListDialog';

export function MaterialsLists({ lists }) {
  const [infoDialog, setInfoDialog] = useState(false);
  const [addDialog, setAddDialog] = useState(false);
  const [selected, setSelected] = useState();
  const [extraData, setExtraData] = useState([]);

  const handleDialog = (list) => {
    setInfoDialog(true);
    setSelected(list);
  };

  const toggleAddDialog = () => {
    setAddDialog(!addDialog);
  };

  const handleAddList = (newList) => {
    setExtraData([...extraData, newList]);
    toggleAddDialog();
  };

  return (
    <>
      <Grid container spacing={4}>
        {lists.map((item) => (
          <Grid key={item.id} item xs={12} sm={3}>
            <ListCard
              ano={item.ano}
              onClick={() => handleDialog(item.materiais)}
            />
          </Grid>
        ))}

        {extraData.map((item) => (
          <Grid key={item.id} item xs={12} sm={3}>
            <ListCard
              ano={item.ano}
              onClick={() => handleDialog(item.materiais)}
            />
          </Grid>
        ))}

        <Grid item xs={12} sm={3}>
          <ListCard mode="add" onClick={toggleAddDialog} />
        </Grid>
      </Grid>

      <ListDialog
        open={infoDialog}
        onClose={() => setInfoDialog(false)}
        data={selected}
      />

      <AddListDialog
        open={addDialog}
        onClose={toggleAddDialog}
        onSubmit={handleAddList}
      />
    </>
  );
}

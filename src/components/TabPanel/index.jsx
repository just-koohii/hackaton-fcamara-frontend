import { Box } from '@material-ui/core';

export function TabPanel({ children, value, index, ...other }) {
  if (value !== index) return null;

  return (
    <Box
      display="flex"
      flex={1}
      role="tabpanel"
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box width="100%" px={3}>
        {children}
      </Box>
    </Box>
  );
}

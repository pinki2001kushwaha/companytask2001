import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { TableVirtuoso } from 'react-virtuoso';
import { Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
  { label: 'ID', dataKey: 'id', width: 50, numeric: true },
  { label: 'Name', dataKey: 'name', width: 200 },
  { label: 'Categories', dataKey: 'categories', width: 250 },
  { label: 'Status', dataKey: 'status', width: 100 },
  { label: 'Actions', dataKey: 'actions', width: 100 }
];

const initialRows = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  name: `Sample Name ${index + 1}`,
  categories: `Category ${index + 1}, Category ${index + 2}`,
  status: index % 2 === 0 ? 'Active' : 'Inactive',
}));

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => <Table {...props} sx={{ tableLayout: 'fixed' }} />,
  TableHead: React.forwardRef((props, ref) => <TableHead {...props} ref={ref} />),
  TableRow,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />)
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric ? 'right' : 'left'}
          style={{ width: column.width }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <>
      {columns.map((column) => (
        <TableCell key={column.dataKey} align={column.numeric ? 'right' : 'left'}>
          {column.dataKey === 'actions' ? (
            <>
              <Button variant="text" size="small"><EditIcon color="primary" /></Button>
              <Button variant="text" size="small"><DeleteIcon color="error" /></Button>
            </>
          ) : (
            row[column.dataKey] ?? '-'
          )}
        </TableCell>
      ))}
    </>
  );
}

export default function CustomReactTable() {
  const [filter, setFilter] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('');
  const [filteredRows, setFilteredRows] = React.useState(initialRows);

  React.useEffect(() => {
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = initialRows.filter((row) => {
      const matchesText =
        row.name.toLowerCase().includes(lowercasedFilter) ||
        row.categories.toLowerCase().includes(lowercasedFilter);
      const matchesStatus = statusFilter
        ? row.status === statusFilter
        : true;
      return matchesText && matchesStatus;
    });
    setFilteredRows(filteredData);
  }, [filter, statusFilter]);

  return (
    <>
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
        <TextField
          label="Search"
          variant="outlined"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <FormControl variant="outlined">
          <InputLabel>Status</InputLabel>
          <Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            label="Status"
            style={{ width: 150 }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Paper style={{ height: 400, width: '100%' }}>
        <TableVirtuoso
          data={filteredRows}
          components={VirtuosoTableComponents}
          fixedHeaderContent={fixedHeaderContent}
          itemContent={rowContent}
        />
      </Paper>
    </>
  );
}

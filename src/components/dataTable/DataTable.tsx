import './dataTable.scss';
// import Box from '@mui/material/Box';

import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = (props: Props) => {
  // const columns: GridColDef[] = [
  //   { field: 'id', headerName: 'ID', width: 90 },
  //   {
  //     field:"avater",
  //     headerName: "Avater",
  //     width: 100,
  //     renderCell: (params) => {
  //       return <img src={params.row.img || '/noavatar.png'} alt="" />
  //     }
  //   },
  //   {
  //     field:"actions",
  //     headerName: "Actions",
  //     width: 100,
  //     renderCell: (params) => {
  //       return
  //         <div className="action">
  //           <div className="view">View</div>
  //           <div className="delete">Delete</div>
  //         </div>;
  //     },
  //   },
  //   {
  //     field: "status",
  //     headerName: "status",
  //     width: 100,
  //     type: "boolean",
  //   }, 
  //   {
  //     field: 'firstName',
  //     headerName: 'First name',
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: 'lastName',
  //     headerName: 'Last name',
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: 'age',
  //     headerName: 'Age',
  //     type: 'number',
  //     width: 110,
  //     editable: true,
  //   },
  //   {
  //     field: 'fullName',
  //     headerName: 'Full name',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params: GridValueGetterParams) =>
  //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  //   },
  // ];
  
  // const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, status:true },
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, status: false },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  // ];
  
  return (
    <div className="dataTable">
      {/* <Box sx={{ height: 400, width: '100%' }}> */}
      <DataGrid
      className="dataGrid"
        rows={props.rows}
        columns={props.columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
          slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnSelector
        disableDensitySelector
      />
      {/* </Box> */}
    </div>

      
      
  )
}

export default DataTable;
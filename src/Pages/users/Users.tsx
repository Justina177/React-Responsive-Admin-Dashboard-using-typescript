import './users.scss';
import DataTable from '../../components/dataTable/DataTable'


const Users = () => {
  return (
    <div className="users">
      <div className="info">
        <h1>users</h1>
        <button>Add New User</button>
      </div>
      <div className="table">
        <DataTable />
      </div>
    </div>
  )
}

export default Users
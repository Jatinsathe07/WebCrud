import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { Link, useLocation,  } from 'react-router-dom';

function Home() {

  const [data, setData] =useState([]);
  const location = useLocation();

  useEffect(()=>{

    axios.get('http://localhost:3000/users')
    .then(res => setData(res.data))
    .catch(err => console.log(err))


  }, [])

    const handleDelete =(id)=>{
    const confirm = window.confirm("Are You Sure To Delete?");
    if(confirm){
      axios.delete('http://localhost:3000/users/'+id)
      .then(res =>{
        location.reload();
      }).catch(err => console.log(err))
    }
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>List Of Users</h1>
      <div className='w-75 rounded bg-white border shadow p-4'>
        <div className='d-flex justify-content-end'>
          <Link to= '/create' className='btn btn-success'>Add new user</Link>
        </div>

        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((d, i)=>(
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.department}</td>

                  <Link to={`/read/${d.id}`} className='btn btn-sm btn-primary me-2'>View</Link>
                  <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                  <button onClick={e => handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>

                </tr>
              ))
            }
          </tbody>
        </table>

      </div>
        
    </div>
  )
}

export default Home
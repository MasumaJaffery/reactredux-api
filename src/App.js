import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './redux/slices/UserSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]); // Include 'dispatch' in the dependency array

  console.log('users:', users);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
   <div>
   <h2>User List</h2>
   <ul>
     {users.map((user) => (
       <li key={user.id.value}>{`${user.name.first} ${user.name.last}`}</li>
     ))}
   </ul>
 </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react'

function UserClient() {

  const [users, setUsers] = useState()

  useEffect(() => {

    const a = async () => {
      const res = await fetch('https://dummyjson.com/users');
      const users = await res.json();
      
      return users;
    }

    a().then( users => setUsers(users))
  }, [])
  
  if (!users) {
    return (
      <>Loading...</>
    )
  }
  return (
    <>
      <h1 className='text-center pt-8 text-blue-600 font-bold text-4xl'>Users</h1>
      <main className='grid grid-cols-4 gap-3 p-5'>
        {users?.users?.map((user) => {

          return (
            <div key={user.id} className='bg-blue-400 text-white hover:bg-blue-600 duration-300 ease-linear p-3 my-3 cursor-pointer'>
              <p>firstName : {user.firstName}</p>
              <p>lastName : {user.lastName}</p>
              <p>maidenName : {user.maidenName}</p>
              <p>age : {user.age}</p>
              <p>gender : {user.gender}</p>
              <p>email : {user.email}</p>
              <p>phone : {user.phone}</p>
            </div>
          )
        })}
      </main>
    </>
  )
}

export default UserClient


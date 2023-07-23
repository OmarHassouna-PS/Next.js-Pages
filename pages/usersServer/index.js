import Link from "next/link";

export default function userServer({ users }) {

  return (
    <>
      <h1 className='text-center pt-8 text-blue-600 font-bold text-4xl'>Users</h1>
      <main className='grid grid-cols-4 gap-x-3 gap-y-6 p-10'>
        {users.map((user) => (
          <Link key={user.id} href={`/usersServer/user/${user.id}`}>
            <div className='bg-blue-400 text-white hover:bg-blue-600 duration-300 ease-linear p-3 cursor-pointer group rounded-lg'>
              <img src={user.image} className="group-hover:bg-white rounded-lg duration-300 ease-linear" />
              <p className="py-3">firstName : {user.firstName}</p>
              <p>lastName : {user.lastName}</p>
              <p>maidenName : {user.maidenName}</p>
              <p>age : {user.age}</p>
              <p>gender : {user.gender}</p>
              <p>email : {user.email}</p>
              <p>phone : {user.phone}</p>
            </div>
          </Link>
        ))}
      </main>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://dummyjson.com/users');
  const data = await res.json();

  return {
    props: {
      users: data.users,
    },

  };
}


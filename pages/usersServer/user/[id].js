import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Loader from '../loading';

export default function GetUser({ user }) {

  const router = useRouter()
  
  if (router.isFallback) {
    return <Loader/>
  }

  return (
    <>
      <h1 className='text-center pt-8 text-blue-600 font-bold text-4xl'>User</h1>
      <main className='grid justify-center p-5'>
        <div className='p-3 cursor-pointer justify-self-center'>
          <img
            src={user.image}
            className='border-blue-600 border-4 rounded-lg bg-blue-400 hover:bg-white duration-300 ease-linear'
          />
        </div>
        {/* 
        <ErrorBoundary fallback={<Error />}>
          <Test />
        </ErrorBoundary> */}

        {Object.keys(user).map((key) => (
          <li
            key={key}
            className='bg-blue-400 text-white hover:bg-blue-600 duration-300 ease-linear p-3 cursor-pointer'
          >
            <strong>{key}:</strong> {user[key].toString()}
          </li>
        ))}
      </main>
    </>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://dummyjson.com/users/${params.id}`); // 
  const data = await res.json();
  
  if (!data) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: {
      user: data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`https://dummyjson.com/users`);
  const data = await res.json();

  const paths = data.users.map((path) => {
    return {
      params: {
        id: `${path.id}`,
      },
    };
  });

  return {
    // paths,
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: true,
  };
}

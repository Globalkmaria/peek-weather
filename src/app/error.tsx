'use client';

import { useEffect } from 'react';

function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex flex-col justify-center items-center'>
      <h2>Something went wrong !</h2>
      <button className='border-2 border-black p-1 m-2 rounded' onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}

export default Error;

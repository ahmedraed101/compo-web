import React from 'react';

export default async function BlogID({
  params: { id },
  searchParams,
}: {
  params: { id: string };
  searchParams: { name: string; age?: string };
}) {
  return (
    <div className="my-4 mx-auto w-3/4 border-4 border-primary-500 p-2 animate-slide-down">
      <h2>Blog Number: {id} </h2>
      {Object.entries(searchParams).map(([key, value]) => (
        <div key={key}>
          <p>
            {key}:{value}
          </p>
        </div>
      ))}
    </div>
  );
}

import React from 'react'

export default function Preview({ data }) {
  return (
      <section className='bg-black text-danger p-4 rounded h-100 overflow-scroll'>
        <pre style={{fontSize: '10px'}}>
          <em>
            {JSON.stringify(data, null, 2)}
          </em>
        </pre>
      </section>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <section className='error-page section'>
      <div className='error-conatianer'>
        <h1>Opps! it's a dead end</h1>
        <Link to='/' className='btn btn-primary'>
          Back Home
        </Link>
      </div>
    </section>
  );
}

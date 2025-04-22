import React from 'react'

import DBMSintro from '../../features/subjects/dbms/notes/DBMSintro';
import DBMSvsFile from '../../features/subjects/dbms/notes/DBMSvsFile';

function DatabaseManagementSystem() {
  return (
    <div className='w-full'>
          <DBMSintro/>
          <DBMSvsFile/>
    </div>
  )
}

export default DatabaseManagementSystem

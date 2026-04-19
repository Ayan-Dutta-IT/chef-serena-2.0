import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import React from 'react'

function Recipe() {
  return (
    <div className='bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 min-h-screen'>
      <Navbar />
      <Main />
    </div>
  )
}

export default Recipe

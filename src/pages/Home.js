import React from 'react'
import PrimaryButton from '../components/buttons/PrimaryButton'
import SecondaryButton from '../components/buttons/SecondaryButton'

function Home() {
  return (
    <div className='home'>
        <h1>Home</h1>
      <>
        <PrimaryButton />
        <SecondaryButton />
      </>
    </div>
  )
}

export default Home
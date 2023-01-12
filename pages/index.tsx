import React from 'react'
import CalculatorPreviewCard from '../components/CalculatorPreviewCard'

export default function Home() {
  return (
    <>
      <main className='h-screen bg-brand-offwhite'>
        <div className='flex flex-col'>
          <CalculatorPreviewCard 
            name='Geartrain Calculator'
            link='geartrain'
            image='/assets/geartrainGif.gif'
          />
        </div>
      </main>
    </>
  )
}

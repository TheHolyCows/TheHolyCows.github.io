import React from 'react'
import CalculatorPreviewCard from '../components/CalculatorPreviewCard'

export default function Home() {
  return (
    <>
      <main className='h-screen bg-brand-offwhite'>
        <div className='flex'>
          <CalculatorPreviewCard 
            name='Geartrain Calculator'
            link='geartrain'
            image='/assets/geartrainGif.gif'
          />
          <CalculatorPreviewCard
            name='Belt Pitch Length Calculator'
            link='beltPitchLength'
            image='/assets/beltPitchLength.jpg'
          />
          <CalculatorPreviewCard
            name='Pulley Pitch Diameter'
            link='pulleyPD'
            image='/assets/pulleyPD.png'
          />
        </div>
      </main>
    </>
  )
}

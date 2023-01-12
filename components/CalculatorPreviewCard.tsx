import React from 'react'

type Props = {
  name: string
  link: string
  image: string
}

function CalculatorPreviewCard({ name, link, image }: Props) {

  return (<>
    <a 
      className='flex flex-col items-center w-[16rem] h-[18rem] m-10 rounded-3xl neumorphic-shadow duration-150 hover:-translate-y-4'
      href={`/calculators/${link}`}
    >
      <img
        src={image}
      />
      
      <h2 className='text-brand-black text-xl mt-2'>
        {name}
      </h2>
    </a>
  </>)
}

export default CalculatorPreviewCard
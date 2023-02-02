import React, { useEffect, useState } from 'react'
import { Calculation, Calculator, CalculatorIO } from '../../types/calculator'

type Props = {
  rawCalculatorData: Calculator
}

function CalculatorPage(props: Props) {
  const { rawCalculatorData } = props
  const [calculator, setCalculator] = useState<Calculator>()
  const [output, setOutput] = useState(0)
  const [input, setInput] = useState<number[]>([])


  useEffect(() => {
    if (!props.rawCalculatorData) {
      console.log(';dwafesgrdtfghyjgref')
      return null as unknown as void
    }

    setCalculator(
      [...rawCalculatorData.map((v, i) => {
      return new Calculation( {
          ...v.inputs
      },
      {
        ...v.outputs
        },
        eval(`(userInputs) => {
          return ${v.calculate as unknown as string}
        }`)
      )
    })])
  }, [rawCalculatorData])

  useEffect(() => {
    if (calculator) {
      
    }
  }, [calculator])

  function handleInput(e: HTMLInputElement) {

  }

  return (<>
    {calculator ? calculator.map((calc, i) => <>
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-xl text-center mx-auto mb-4'>
        Calculator
      </h2>


      {Object.values(calc.inputs).map((v) => {
      if (v.mutable === false) {
        return <></>
      }
      return <>
          <p className='text-2xl'>
            {v.shortName}
          </p>
          <input
            type='number'
            placeholder={v.name}
          />
        </>
      })}

      {Object.values(calc.outputs).map((v) => <>
        <p>
          {v.shortName}
        </p>
         <p className='text-2xl'>
          {output}
        </p>
      </>)}
      
      </div>
    </>)
    : <> 
      <h2 className='text-xl text-center mx-auto'>
        Loading...
      </h2>
    </>
    }
  </>)
}

export async function getServerSideProps({ params }: { params: { id: string } }) {
  const { id } = params
  const rawData = await require(`../../public/calculatorData/${id}`)
  const calculator = rawData.default as unknown as Calculator
  return {
    props: {
      rawCalculatorData: calculator.map((v, i) => {
        return {
          ...v, 
          calculate: v.calculate.toString(),
          getAllInputs: v.getAllInputs.toString(),
          getAllOutputs: v.getAllInputs.toString()
        }
      })
    }
  }
  
}

export default CalculatorPage
import React, { useEffect, useState } from 'react'
import { Calculation, Calculator } from '../../types/calculator'

type Props = {
  rawCalculatorData: Calculator
}

function CalculatorPage(props: Props) {
  const { rawCalculatorData } = props
  const [calculator, setCalculator] = useState<Calculator>()
  const [outputs, setOutputs] = useState<number[]>([0])
  const [inputs, setInputs] = useState<number[][]>([[0]])

  
  useEffect(() => {
    if (!props.rawCalculatorData) {
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

  function handleInput(e: React.ChangeEvent<HTMLInputElement>, inputIndex: [number, number]) {
    if (!calculator) return undefined

    const userInput = parseFloat(e.target.value)

    const newInputArray = inputs.map((v, i) => {
      if (i === inputIndex[0]) {
        v[inputIndex[1]] = userInput
      }
      return v
    })
    setInputs(newInputArray)
    
    // @ts-ignore 
    const newOutput = (calculator[inputIndex[0]].calculate(newInputArray[inputIndex[0]]))(newInputArray[inputIndex[0]])

    const newOutputArray = outputs.map((v, i) => {
      if (i === inputIndex[0]) {
        v = newOutput?.data ?? 0
      }
      return v
    })

    setOutputs(newOutputArray)
  }

  return (<>
  <div className='min-h-screen bg-brand-offwhite'>
    {calculator ? calculator.map((calc, i) => <>
    <div className='flex flex-col justify-center items-center'>
      <div className='flex text-center'>
        {Object.values(calc.inputs).map((v, j) => {
          if (v.mutable === false) {
            return <></>
          }

          return <>
            <div className='px-4 py-2 m-4 bg-brand-dark-grey rounded-3xl neumorphic-shadow'>
              <p className='text-2xl'>
                {v.shortName}
              </p>
              
              <input
                type='number'
                className='bg-brand-offwhite p-2'
                value={inputs[i][j]}
                onChange={(e) => {
                  handleInput(e, [i, j])
                }}
                placeholder={v.name}
              />
            </div>
          </>
        })}
      </div>

      {Object.values(calc.outputs).map((v, j) => <>
        <p className='text-2xl'>
          {v.shortName}
        </p>
         <p className='text-2xl'>
          {outputs[j]}
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
    
  </div>
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
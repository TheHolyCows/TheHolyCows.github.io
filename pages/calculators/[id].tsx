import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Calculation, Calculator } from '../../types/calculator'

type Props = {
  rawCalculatorData: Calculator
}

async function CalculatorPage(props: Props) {
  const { rawCalculatorData } = props
  const [calculator, setCalculator] = useState<Calculator>()

  // const router = useRouter()
  // const  { id } = router.query

  // useEffect(() => {( async () => {
  // const rawData = await require(`../calculatorData/${id}`)
  // console.log(rawData)
  // setCalculator(rawData.default as unknown as Calculator)
  // })()})

  // useEffect(() => {
  //   console.log('props\n', props.rawCalculatorData)
  //   if (!props.rawCalculatorData) {
  //     console.log(';dwafesgrdtfghyjgref')
  //     return null as unknown as void
  //   }
    
  //   setCalculator(
  //     [...rawCalculatorData.map((v, i) => {
  //     return new Calculation(
  //       {
  //       ...v.getAllInputs()
  //       },
  //       {
  //         ...v.getAllOutputs()
  //       },
  //       eval(`(userInputs) => {
  //         return ${v.calculate as unknown as string}
  //       }`)
  //     )
  //   })])
  // }, [rawCalculatorData])

  return (<>
  </>)
}

export async function getServerSideProps({ params }: { params: { id: string } }) {
  const { id } = params
  const rawData = await require(`../../public/calculators/${id}`)
  const calculator = rawData.default as unknown as Calculator
  return {
    props: {
      rawCalculatorData: calculator.map((v, i) => {
        return {
          ...v, 
          calculate: v.calculate.toString()
        }
      })
    }
  }
  
}

export default CalculatorPage
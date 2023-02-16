import { Calculation, Calculator, CalculatorIO } from "../../types/calculator"

const geartrainCalculator: Calculator = [
  new Calculation(
    [
      {
        name: 'Pitch',
        shortName: 'Pitch',
        description: 'Pitch',
        data: null,
        mutable: true
      },
      {
        name: 'Teeth',
        shortName: 'Teeth',
        description: 'Teeth',
        data: null,
        mutable: true
      },
    ],
    [
      {
        name: 'pulleyPD',
        shortName: 'Pulley Pitch Diameter',
        description: ' ',
        data: null,
        mutable: true
      }
    ],
    (userInputs: (number | null)[]): CalculatorIO | null => {
      const [userPitch, userTeeth] = userInputs

      console.log(userInputs)

      // Make sure all the inputs are valid before calculating
      if (!userPitch || !userTeeth) return null

      const output = (userPitch * userTeeth) / Math.PI

      return {
        name: 'pulleyPD',
        shortName: 'Pulley Pitch Diameter',
        description: ' ',
        data: output,
        mutable: true
      }
    }
  )
]

export default geartrainCalculator
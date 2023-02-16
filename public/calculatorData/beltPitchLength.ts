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
        name: 'Belt Length',
        shortName: 'Belt Length',
        description: 'Belt Length',
        data: null,
        mutable: true
      },
    ],
    [
      {
        name: 'beltPitchLength',
        shortName: 'Belt Pitch Length',
        description: ' ',
        data: null,
        mutable: true
      }
    ],
    (userInputs: (number | null)[]): CalculatorIO | null => {
      const [userPitch, userBeltLength] = userInputs

      console.log(userInputs)

      // Make sure all the inputs are valid before calculating
      if (!userPitch || !userBeltLength) return null

      const beltPitchLength = (userPitch * userBeltLength)

      return {
        name: 'beltPitchLength',
        shortName: 'Belt Pitch Length',
        description: ' ',
        data: beltPitchLength,
        mutable: true
      }
    }
  )
]

export default geartrainCalculator
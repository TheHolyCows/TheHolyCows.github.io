import { Calculation, Calculator, CalculatorIO } from "../../types/calculator"

const geartrainCalculator: Calculator = [
  new Calculation(
    [
      {
        name: 'teethCount',
        shortName: '# of Teeth',
        description: 'Number of Teeth',
        data: null,
        mutable: true
      },
      {
        name: 'diametralPitch',
        shortName: 'DP',
        description: 'The ratio of the number of teeth to the pitch diameter',
        data: null,
        mutable: true
      },
      {
        name: 'acceleratedWearConstant',
        shortName: 'kWear',
        description: 'Constant added to only one gear',
        data: 0.0025,
        mutable: false
      }
    ],
    [
      {
        name: 'pitchDiameter',
        shortName: 'PD',
        description: ' ',
        data: null,
        mutable: true
      }
    ],
    (userInputs: (number | null)[]): CalculatorIO | null => {
      // const currentCalculation = this
      // const teethCount = currentCalculation.getInput('teethCount')
      // const diametralPitch = currentCalculation.getInput('diametralPitch')
      const acceleratedWearConstant = 0.0025
      const [userTeethCount, userDiametralPitch] = userInputs

      console.log(userInputs)

      // Make sure all the inputs are valid before calculating
      if (!userTeethCount || !userDiametralPitch) return null

      const PD = (userTeethCount / userDiametralPitch) + acceleratedWearConstant

      return {
        name: 'pitchDiameter',
        shortName: 'PD',
        description: ' ',
        data: PD,
        mutable: true
      }

      // currentCalculation.setOutput('pitchDiameter', PD)

      // return currentCalculation.getOutput('pitchDiameter') ?? null

    }
  )
]

export default geartrainCalculator
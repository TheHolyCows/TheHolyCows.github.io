import { Calculation, Calculator, CalculatorIO } from "../../types/calculator"

const geartrainCalculator: Calculator = [
  new Calculation(
    [
      {
        name: 'teethCount',
        shortName: '# of Teeth',
        description: 'Number of Teeth',
        data: null,
        mutable: false
      },
      {
        name: 'diametralPitch',
        shortName: 'DP',
        description: 'The ratio of the number of teeth to the pitch diameter',
        data: null,
        mutable: false
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
      const currentCalculation = geartrainCalculator[0]
      const teethCount = currentCalculation.getInput('teethCount')
      const diametralPitch = currentCalculation.getInput('diametralPitch')
      const acceleratedWearConstant = currentCalculation.getInput('acceleratedWearConstant')

      // Make sure all the inputs are valid before calculating
      if (!teethCount?.data || !diametralPitch?.data || !acceleratedWearConstant?.data) return null

      const PD = (teethCount.data / diametralPitch.data) + acceleratedWearConstant.data

      currentCalculation.setOutput('pitchDiameter', PD)

      return currentCalculation.getOutput('pitchDiameter') ?? null
    }
  )
]

export default geartrainCalculator
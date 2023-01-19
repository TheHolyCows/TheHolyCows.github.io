export type Calculator = Calculation[]

export class Calculation {
  private inputs: CalculatorIO[]
  private outputs: CalculatorIO[]
  calculate: (x: (number | null)[]) => CalculatorIO | CalculatorIO[] | null

  constructor(inputs: CalculatorIO[], outputs: CalculatorIO[], calculate: (x: (number | null)[]) => CalculatorIO | CalculatorIO[] | null) {
    this.inputs = inputs
    this.outputs = outputs
    this.calculate = calculate
  }

  getInput(name: string): CalculatorIO | undefined {
    return this.inputs.find((input) => input.name === name)
  }

  setInput(name: string, newData: number | null) {
    const inputIndex = this.inputs.findIndex((input) => input.name === name)
    if (inputIndex === -1) return undefined

    const input = this.inputs[inputIndex]
    if (input.mutable === false) return undefined

    this.inputs[inputIndex].data = newData
  }

  getAllInputs(): CalculatorIO[] {
    return this.inputs
  }

  getOutput(name: string): CalculatorIO | undefined {
    return this.outputs.find((output) => output.name === name)
  }

  setOutput(name: string, newData: number | null) {
    const outputIndex = this.outputs.findIndex((output) => output.name === name)
    if (outputIndex === -1) return undefined

    const output = this.outputs[outputIndex]
    if (output.mutable === false) return undefined

    this.outputs[outputIndex].data = newData
  }

  getAllOutputs(): CalculatorIO[] {
    return this.outputs
  }
}

export type CalculatorIO = {
  name: string
  shortName: string
  description: string
  data: number | null
  mutable: boolean
}
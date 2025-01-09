export interface MinMax {
  max: number
  min: number
}

export interface IntArgs extends Partial<MinMax> {}

export interface FloatArgs extends IntArgs {
  precision?: number
}

export interface FloatArrayArgs extends FloatArgs {
  length?: number
}

export interface IntArrayArgs extends IntArgs {
  length?: number
}

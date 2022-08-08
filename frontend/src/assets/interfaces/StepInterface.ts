interface StepInterface {
  title: string,
  caption?: string | string[],
}

export interface TimelineStepInterface extends StepInterface {
  start: Date,
  end?: Date,
}

export interface NumberedStepInterface extends StepInterface {
  active: boolean,
}
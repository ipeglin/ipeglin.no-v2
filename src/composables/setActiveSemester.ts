import type { NumberedStepInterface, TimelineStepInterface } from "@/assets/interfaces/StepInterface";

export const setActiveSemester = (content: NumberedStepInterface[]): void => {
  const now = new Date(Date.now());
  content.forEach((step: NumberedStepInterface) => {
    if (step.start === undefined) return;

    if (step.start < now && ((step.end !== undefined && step?.end > now) || (step.end === undefined))) {
      step.active = true;
    } else if (step.start < now) {
      return;
    }
  })
}
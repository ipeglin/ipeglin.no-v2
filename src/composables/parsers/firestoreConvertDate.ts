import type { TimelineStepInterface } from "@/assets/interfaces/StepInterface";

// Parse firbase document timestamps to JS Date objects
export const firestoreConvertDate = (firebaseObject: any): TimelineStepInterface => {
  if (!firebaseObject.end)
    return {
      title: firebaseObject.title,
      caption: firebaseObject.caption,
      start: new Date(firebaseObject.start.seconds * 1000),
    }

    return {
      title: firebaseObject.title,
      caption: firebaseObject.caption,
      start: new Date(firebaseObject.start.seconds * 1000),
      end: new Date(firebaseObject.end.seconds * 1000),
    }
}
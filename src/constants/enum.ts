export const Emotion = {
  COMFORTABLE: 'COMFORTABLE',
  HAPPY: 'HAPPY',
  EXCITED: 'EXCITED',
  ASHAMED: 'ASHAMED',
  EMBARASSED: 'EMBARRASSED',
  DEPRESSED: 'DEPRESSED',
  SAD: 'SAD',
  REGRETTED: 'REGRETTED',
  ANNOYED: 'ANNOYED',
  ANGRY: 'ANGRY',
  WORRIED: 'WORRIED',
  ANXIOUS: 'ANXIOUS',
  STRESSED: 'STRESSED',
  LONELY: 'LONELY',
  UNFAIR: 'UNFAIR',
} as const;

export type Emotion = (typeof Emotion)[keyof typeof Emotion];
export type Level = 0 | 1 | 2 | 3 | 4;

export interface Day {
  date: string;
  count: number;
  level: Level;
}

type Week = Array<Day | undefined>;
export type Weeks = Array<Week>;

export interface Label {
  x: number;
  y: number;
  text: string;
}

export interface Theme {
  readonly level4: string;
  readonly level3: string;
  readonly level2: string;
  readonly level1: string;
  readonly level0: string;
}

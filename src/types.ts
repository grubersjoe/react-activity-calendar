export type Level = 0 | 1 | 2 | 3 | 4;

export interface Day {
  date: string;
  count: number;
  level: Level;
}

type Week = Array<Day | undefined>;
export type Weeks = Array<Week>;

export type Labels = Partial<{
  readonly months: Array<string>;
  readonly weekdays: Array<string>;
  readonly totalCount: string;
  readonly legend: Partial<{
    readonly less: string;
    readonly more: string;
  }>;
}>;

export interface Theme {
  readonly level4: string;
  readonly level3: string;
  readonly level2: string;
  readonly level1: string;
  readonly level0: string;
}

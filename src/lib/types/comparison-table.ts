import type { TableData } from "./table-data.type";

export type ComparisonTooltip = {
  text: string;
  tooltip?: string;
  path?: string;
};

export type ComparisonTable = {
  tooltips: ComparisonTooltip[];
  dataSets: TableData[];
};

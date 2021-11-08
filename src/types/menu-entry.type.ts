export enum MenuStatus {
  ComingSoon = "coming-soon",
  Beta = "beta",
}

export type MenuEntry = {
  title: string;
  path: string;
  status: MenuStatus;
  subMenu?: MenuEntry[];
};

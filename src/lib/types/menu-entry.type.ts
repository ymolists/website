export type MenuStatus = "soon" | "beta";

export type MenuEntry = {
  title: string;
  path: string;
  status?: MenuStatus;
  subMenu?: MenuEntry[];
};

export type MenuFrontmatter = {
  section: string;
  title: string;
  path?: string;
  status?: MenuStatus;
};

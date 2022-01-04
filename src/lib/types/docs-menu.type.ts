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

type Item = {
  /**
   * A kebab-case identifier for this menu item.
   *
   * **Note**: An item's `slug` must be unique within its section.
   *
   * @example `vscode-browser` or `goland`
   */
  slug: string;
};

type Section = {
  /**
   * A unique, kebab-case identifier for this section.
   *
   * **Note**: A `docs/<slug>/index.md` file must exist and is used as content when a user clicks on the section. For example, if `slug` is set to `editors`, a `docs/editors/index.md` Markdown file must exist.
   *
   * @example `introduction` or `getting-started` or `editors`
   */
  slug: string;

  /**
   * Zero or more `Item`s to be grouped with this section.
   *
   * A section with `slug: "editors"` may contain `items` for each editor Gitpod supports.
   */
  items?: Item[];
};

export type MenuStructure = {
  /**
   * One or more `Section`s that make up the documentation's main menu structure.
   */
  sections: Section[];
};

export type DocsFileToFrontmatterMap = {
  [key: string]: MenuFrontmatter;
};

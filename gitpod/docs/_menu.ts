import type { MenuStructure } from "$lib/types/docs-menu.type";

export const menuStructure: MenuStructure = {
  sections: [
    {
      slug: "introduction",
    },
    {
      slug: "editors",
      items: [
        {
          slug: "vscode-browser",
        },
        {
          slug: "goland",
        },
      ],
    },
  ],
};

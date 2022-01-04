import type {
  DocsFileToFrontmatterMap,
  MenuEntry,
  MenuFrontmatter,
  MenuStructure,
} from "$lib/types/docs-menu.type";

let generatedMenu: MenuEntry[];

export const generateMenu = (
  menuStructure: MenuStructure,
  docsFileToFrontmatterMap: DocsFileToFrontmatterMap
) =>
  (generatedMenu = menuStructure.sections.map((section) => {
    const sectionFrontmatter: MenuFrontmatter =
      docsFileToFrontmatterMap[`${section.slug}/index.md`];
    const menuSection: MenuEntry = {
      path: `/docs${
        sectionFrontmatter.section === "/"
          ? ""
          : `/${sectionFrontmatter.section}`
      }`,
      title: sectionFrontmatter.title,
      status: sectionFrontmatter.status,
      subMenu: [],
    };

    menuSection.subMenu = section.items?.map((item) => {
      const itemFrontmatter =
        docsFileToFrontmatterMap[`${section.slug}/${item.slug}.md`];
      return {
        path: `/docs/${sectionFrontmatter.section}/${item.slug}`,
        title: itemFrontmatter.title,
        status: itemFrontmatter.status,
      };
    }) as MenuEntry[];

    return menuSection;
  }) as MenuEntry[]);

export const getMenuContext = (
  slug: string,
  menu: MenuEntry[] = generatedMenu || [],
  context: MenuContext = {}
): MenuContext => {
  for (const e of menu) {
    if (context.next) {
      return context;
    }
    if (context.thisEntry) {
      context.next = e;
      return context;
    } else if (e.path === slug) {
      context.thisEntry = e;
    } else {
      context.prev = e;
    }
    if (e.subMenu) {
      getMenuContext(slug, e.subMenu, context);
    }
  }
  return context;
};

export interface MenuContext {
  prev?: MenuEntry;
  thisEntry?: MenuEntry;
  next?: MenuEntry;
}

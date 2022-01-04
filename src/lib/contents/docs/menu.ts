import type { MenuEntry, MenuFrontmatter } from "$lib/types/menu-entry.type";

export const contextKey = {};

export class MenuService {
  public menu: MenuEntry[];
  constructor(menuEntries: MenuFrontmatter[]) {
    this.menu = this.generateMenu(menuEntries);
  }

  private generateMenu(menuEntries: MenuFrontmatter[]) {
    let menu: any[] = [];
    const filtered = menuEntries.filter((el) => el.hasOwnProperty("title")); //TODO remove hasOwnProperty
    const headlines = filtered.filter((element) =>
      element.path.includes("index")
    );
    const regulars = filtered.filter(
      (element) => !element.path.includes("index")
    );

    headlines.forEach((headline) => {
      const subMenu = this.getSubmenu(headline, regulars);
      menu = [...menu, ...[this.mapFrontmatterToMenuentry(headline, subMenu)]];
    });
    return menu;
  }

  private preparePath(path: string) {
    const pathArray = path.split("/");
    pathArray.splice(1, 2);
    const lastItem = pathArray.slice(-1);
    pathArray[pathArray.length - 1] = pathArray[pathArray.length - 1].replace(
      /\.[^/.]+$/,
      ""
    );
    if (lastItem[0].includes("index")) pathArray.pop();
    return pathArray.join("/");
  }

  private mapFrontmatterToMenuentry(
    frontmatter: MenuFrontmatter,
    subMenu?: MenuEntry[]
  ): MenuEntry {
    return {
      path: this.preparePath(frontmatter.path),
      title: frontmatter.title,
      status: frontmatter.status,
      subMenu: subMenu || [],
    };
  }

  private getSubmenu(
    headline: MenuFrontmatter,
    regulars: MenuFrontmatter[]
  ): MenuEntry[] {
    const children = regulars.filter(
      (regular) => regular.section === headline.section
    );
    children.sort((a, b) => {
      if (!a.title || !b.title) return;
      return a.title.localeCompare(b.title);
    });
    return children.map((child) => this.mapFrontmatterToMenuentry(child));
  }

  public getMenuContext(
    slug: string,
    menu: MenuEntry[] = this.menu,
    context: MenuContext = {}
  ): MenuContext {
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
        this.getMenuContext(slug, e.subMenu, context);
      }
    }
    return context;
  }
}

export interface MenuContext {
  prev?: MenuEntry;
  thisEntry?: MenuEntry;
  next?: MenuEntry;
}

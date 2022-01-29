import { sequence } from "@sveltejs/kit/hooks";

export const getSession: import("@sveltejs/kit").GetSession = async (event) => {
  return {
    changelogEntries: event.locals.changelogEntries,
    posts: event.locals.posts,
    guides: event.locals.guides,
  };
};

const handleBlogPosts = async ({ event, resolve }) => {
  const posts = await Promise.all(
    Object.entries(import.meta.glob("/src/routes/blog/*.md")).map(
      async ([path, page]) => {
        const { metadata } = await page();
        const filename = path.split("/").pop();
        return { ...metadata, filename };
      }
    )
  );
  posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  event.locals.posts = posts;
  return await resolve(event);
};

const handleChangelogEntries = async ({ event, resolve }) => {
  const changelogEntries = await Promise.all(
    Object.entries(import.meta.glob("/src/lib/contents/changelog/*.md"))
      .filter(([path]) => !path.endsWith("_template.md"))
      .map(async ([, mod]) => {
        const { default: content, metadata } = await mod();
        return {
          ...metadata,
          content: content.render().html,
        };
      })
  );
  changelogEntries.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  event.locals.changelogEntries = changelogEntries;
  return await resolve(event);
};

const handleGuides = async ({ event, resolve }) => {
  const guides = await Promise.all(
    Object.entries(import.meta.glob("/src/routes/guides/*.md")).map(
      async ([path, page]) => {
        const { metadata } = await page();
        const filename = path.split("/").pop();
        return { ...metadata, filename };
      }
    )
  );
  guides.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  event.locals.guides = guides;
  return await resolve(event);
};

const handleHeaders = async ({ event, resolve }) => {
  const response = await resolve(event);
  response.headers.set(
    "Set-Cookie",
    "gitpod-marketing-website-visited=true; Domain=.gitpod.io; Path=/"
  );
  // Avoid clickjacking attacks, see https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html
  response.headers.set(
    "Content-Security-Policy",
    "frame-ancestors *.gitpod.io *.staging.gitpod-dev.com;"
  );
  return response;
};

export const handle = sequence(
  handleHeaders,
  handleBlogPosts,
  handleChangelogEntries,
  handleGuides
);

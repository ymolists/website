//@ts-check
// run yarn generate:jb to regenerate JB docs after editing jb-product.md

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * @type {Map<string, {[key: string]: string}>}
 */
const products = new Map();
products.set("intellij", {
  productTitle: "IntelliJ IDEA",
});
products.set("goland", {
  productTitle: "GoLand",
});
products.set("phpstorm", {
  productTitle: "PhpStorm",
});
products.set("pycharm", {
  productTitle: "PyCharm",
});

for (const [id, parameters] of products) {
  let content = fs.readFileSync(path.join(__dirname, "jb-product.md"), "utf-8");
  content = content.replace(/{productId}/gi, parameters["productId"] || id);
  for (const key in parameters) {
    content = content.replace(new RegExp(`{${key}}`, "gi"), parameters[key]);
  }
  fs.writeFileSync(
    path.join(__dirname, `../../gitpod/docs/ides-and-editors/${id}.md`),
    content,
    "utf-8"
  );
}

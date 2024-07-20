import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";

export const getFlightDescription = async (locale: string, flightKey: string) =>
  await getMarkdownContent(
    `data/flights/${flightKey}/description/${locale}.md`,
  );

export const getFlightMeetingPointInstructions = async (
  locale: string,
  flightKey: string,
) =>
  await getMarkdownContent(
    `data/flights/${flightKey}/meeting-point-instructions/${locale}.md`,
  );

export const getLandingSiteChecklist = async (locale: string) => {
  return await getMarkdownContent(`data/landing-site/checklist/${locale}.md`);
};

export const getLandingSiteInfo = async (locale: string) => {
  return await getMarkdownContent(`data/landing-site/info/${locale}.md`);
};

export const getLandingSiteRules = async (locale: string) => {
  return await getMarkdownContent(`data/landing-site/rules/${locale}.md`);
};

export const getCV = async (locale: string) => {
  return await getMarkdownContent(`data/cv/${locale}.md`);
};

export const getImprint = async (locale: string) => {
  return await getMarkdownContent(`data/imprint/${locale}.md`);
};

export const getDataPrivacy = async (locale: string) => {
  return await getMarkdownContent(`data/privacy/${locale}.md`);
};

async function getMarkdownContent(localPath: string) {
  const fullPath = path.join(process.cwd(), localPath);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { content, data } = matter(fileContents);

  const renderer = new marked.Renderer();

  // @ts-ignore
  renderer.list = (tokens, ordered: boolean) => {
    return `<ol style="${ordered ? "list-style-type: numeric;" : "list-style-type:  square;"} list-style-position: inside;">${tokens}</ol>`;
  };

  // @ts-ignore
  renderer.heading = (tokens, depth) => {
    switch (depth) {
      case 1:
        return `<h1 style="display: block;
font-size: 2em;
margin-top: 0.67em;
margin-bottom: 0.67em;
margin-left: 0;
margin-right: 0;
font-weight: bold;"></h1>`;
      case 2:
        return `<h2 style="display: block;
font-size: 1.5em;
margin-top: 0.83em;
margin-bottom: 0.83em;
margin-left: 0;
margin-right: 0;
font-weight: bold;">${tokens}</h2>`;
      case 3:
        return `<h3 style="display: block;
font-size: 1.17em;
margin-top: 1em;
margin-bottom: 1em;
margin-left: 0;
margin-right: 0;
font-weight: bold;">${tokens}</h3>`;
      case 4:
        return `<h4 style="display: block;
margin-top: 1.33em;
margin-bottom: 1.33em;
margin-left: 0;
margin-right: 0;
font-weight: bold;">${tokens}</h4>`;
      case 5:
        return `<h5 style="display: block;
font-size: .83em;
margin-top: 1.67em;
margin-bottom: 1.67em;
margin-left: 0;
margin-right: 0;
font-weight: bold;">${tokens}</h5>`;
      case 6:
        return `<h6 style="display: block;
font-size: .67em;
margin-top: 2.33em;
margin-bottom: 2.33em;
margin-left: 0;
margin-right: 0;
font-weight: bold;">${tokens}</h6>`;
      default:
        return `<h6 style="display: block;
font-size: .67em;
margin-top: 2.33em;
margin-bottom: 2.33em;
margin-left: 0;
margin-right: 0;
font-weight: bold;">${tokens}</h6>`;
    }
  };

  marked.use({ renderer });

  const htmlContent = await marked(content, { async: false });

  return { htmlContent, data, fullPath };
}

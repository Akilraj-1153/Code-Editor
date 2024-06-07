import tslogo from "../Assets/LOGO/icons8-typescript-48.png";
import { loader } from "@monaco-editor/react";

export const languages = [
  "HTML,CSS,JS",
  "TypeScript",
  "JavaScript",
  "CSS",
  "LESS",
  "SCSS",
  "JSON",
  "HTML",
  "XML",
  "PHP",
  "C#",
  "C++",
  "Razor",
  "Markdown",
  "Diff",
  "Java",
  "VB",
  "CoffeeScript",
  "Handlebars",
  "Batch",
  "Pug",
  "F#",
  "Lua",
  "Powershell",
  "Python",
  "Ruby",
  "SASS",
  "R",
  "Objective-C",
];

export const files = {
  "script.js": {
    name: "script.js",
    language: "javascript",
    value: `gsap.fromTo('.mybtn',{x:100},{y:200})`,
  },
  "style.css": {
    name: "style.css",
    language: "css",
    value: `body { margin: 0; padding: 0; }
      button{
          background-color: blue;
         height: 10vh;
      }`,
  },
  "index.html": {
    name: "index.html",
    language: "html",
    value: `<!DOCTYPE html>
      <html>
      <head>
          <meta charset="UTF-8" />
          <title>title</title>
          <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
      </head>
      <body>
          <button class="mybtn">hello</button>
      </body>
      </html>`,
  },
};

export const monacoThemes = {
  active4d: "Active4D",
  "all-hallows-eve": "All Hallows Eve",
  amy: "Amy",
  "birds-of-paradise": "Birds of Paradise",
  blackboard: "Blackboard",
  "brilliance-black": "Brilliance Black",
  "brilliance-dull": "Brilliance Dull",
  "chrome-devtools": "Chrome DevTools",
  "clouds-midnight": "Clouds Midnight",
  clouds: "Clouds",
  cobalt: "Cobalt",
  dawn: "Dawn",
  dreamweaver: "Dreamweaver",
  eiffel: "Eiffel",
  "espresso-libre": "Espresso Libre",
  github: "GitHub",
  idle: "IDLE",
  katzenmilch: "Katzenmilch",
  "kuroir-theme": "Kuroir Theme",
  lazy: "LAZY",
  "magicwb--amiga-": "MagicWB (Amiga)",
  "merbivore-soft": "Merbivore Soft",
  merbivore: "Merbivore",
  "monokai-bright": "Monokai Bright",
  monokai: "Monokai",
  "night-owl": "Night Owl",
  "oceanic-next": "Oceanic Next",
  "pastels-on-dark": "Pastels on Dark",
  "slush-and-poppies": "Slush and Poppies",
  "solarized-dark": "Solarized-dark",
  "solarized-light": "Solarized-light",
  spacecadet: "SpaceCadet",
  sunburst: "Sunburst",
  "textmate--mac-classic-": "Textmate (Mac Classic)",
  "tomorrow-night-blue": "Tomorrow-Night-Blue",
  "tomorrow-night-bright": "Tomorrow-Night-Bright",
  "tomorrow-night-eighties": "Tomorrow-Night-Eighties",
  "tomorrow-night": "Tomorrow-Night",
  tomorrow: "Tomorrow",
  twilight: "Twilight",
  "upstream-sunburst": "Upstream Sunburst",
  "vibrant-ink": "Vibrant Ink",
  "xcode-default": "Xcode_default",
  zenburnesque: "Zenburnesque",
  iplastic: "iPlastic",
  idlefingers: "idleFingers",
  krtheme: "krTheme",
  monoindustrial: "monoindustrial",
};

export const defineTheme = (theme) => {
  return new Promise((res) => {
    Promise.all([
      loader.init(),
      import(`monaco-themes/themes/${monacoThemes[theme]}.json`),
    ]).then(([monaco, themeData]) => {
      monaco.editor.defineTheme(theme, themeData);
      res();
    });
  });
};

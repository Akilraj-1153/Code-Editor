import tslogo from "../Assets/LOGO/icons8-typescript-48.png";
import { loader } from "@monaco-editor/react";

export const languageOptions = [
  {
    name: "HTML  CSS  JS",
    label: "HTML  CSS  JS",
    value: "HTML  CSS  JS",
  },
  {
    name: "JavaScript",
    label: "JavaScript",
    value: "javascript",
  },
  {
    name: "Assembly",
    label: "Assembly",
    value: "assembly",
  },
  {
    name: "Bash",
    label: "Bash",
    value: "bash",
  },
  {
    name: "Basic",
    label: "Basic",
    value: "basic",
  },
  {
    name: "C",
    label: "C",
    value: "c",
  },
  {
    name: "C++",
    label: "C++",
    value: "cpp",
  },
  {
    name: "Clojure",
    label: "Clojure",
    value: "clojure",
  },
  {
    name: "C#",
    label: "C#",
    value: "csharp",
  },
  {
    name: "COBOL",
    label: "COBOL",
    value: "cobol",
  },
  {
    name: "Common Lisp",
    label: "Common Lisp",
    value: "lisp",
  },
  {
    name: "D",
    label: "D",
    value: "d",
  },
  {
    name: "Elixir",
    label: "Elixir",
    value: "elixir",
  },
  {
    name: "Erlang",
    label: "Erlang",
    value: "erlang",
  },
  {
    name: "Executable",
    label: "Executable",
    value: "exe",
  },
  {
    name: "F#",
    label: "F#",
    value: "fsharp",
  },
  {
    name: "Fortran",
    label: "Fortran",
    value: "fortran",
  },
  {
    name: "Go",
    label: "Go",
    value: "go",
  },
  {
    name: "Groovy",
    label: "Groovy",
    value: "groovy",
  },
  {
    name: "Haskell",
    label: "Haskell",
    value: "haskell",
  },
  {
    name: "Java",
    label: "Java",
    value: "java",
  },
  {
    name: "Kotlin",
    label: "Kotlin",
    value: "kotlin",
  },
  {
    name: "Lua",
    label: "Lua",
    value: "lua",
  },
  {
    name: "Objective-C",
    label: "Objective-C",
    value: "objectivec",
  },
  {
    name: "OCaml",
    label: "OCaml",
    value: "ocaml",
  },
  {
    name: "Octave",
    label: "Octave",
    value: "octave",
  },
  {
    name: "Pascal",
    label: "Pascal",
    value: "pascal",
  },
  {
    name: "Perl",
    label: "Perl",
    value: "perl",
  },
  {
    name: "PHP",
    label: "PHP",
    value: "php",
  },
  {
    name: "Plain Text",
    label: "Plain Text",
    value: "text",
  },
  {
    name: "Prolog",
    label: "Prolog",
    value: "prolog",
  },
  {
    name: "Python",
    label: "Python",
    value: "python",
  },
  {
    name: "R",
    label: "R",
    value: "r",
  },
  {
    name: "Ruby",
    label: "Ruby",
    value: "ruby",
  },
  {
    name: "Rust",
    label: "Rust",
    value: "rust",
  },
  {
    name: "Scala",
    label: "Scala",
    value: "scala",
  },
  {
    name: "SQL",
    label: "SQL",
    value: "sql",
  },
  {
    name: "Swift",
    label: "Swift",
    value: "swift",
  },
  {
    name: "TypeScript",
    label: "TypeScript",
    value: "typescript",
  },
  {
    name: "Visual Basic.Net",
    label: "Visual Basic.Net",
    value: "vbnet",
  },
];

// Removed duplicates manually



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

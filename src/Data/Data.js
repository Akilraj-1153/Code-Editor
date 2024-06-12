import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

import "ace-builds/src-noconflict/theme-chrome";
import "ace-builds/src-noconflict/theme-clouds";
import "ace-builds/src-noconflict/theme-crimson_editor";
import "ace-builds/src-noconflict/theme-dreamweaver";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-sqlserver";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-ambiance";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/theme-clouds_midnight";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-gob";
import "ace-builds/src-noconflict/theme-gruvbox";
import "ace-builds/src-noconflict/theme-idle_fingers";
import "ace-builds/src-noconflict/theme-kr_theme";
import "ace-builds/src-noconflict/theme-merbivore";
import "ace-builds/src-noconflict/theme-merbivore_soft";
import "ace-builds/src-noconflict/theme-mono_industrial";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-pastel_on_dark";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import "ace-builds/src-noconflict/theme-tomorrow_night_bright";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-vibrant_ink";

import "ace-builds/src-noconflict/theme-dawn";
import "ace-builds/src-noconflict/theme-eclipse";
import "ace-builds/src-noconflict/theme-iplastic";
import "ace-builds/src-noconflict/theme-katzenmilch";
import "ace-builds/src-noconflict/theme-kuroir";

export const languageOptions = [
  { language: "HTML CSS JS", version: null },
  { language: "python", version: "3.10.0" },
  { language: "javascript", version: "18.15.0", runtime: "node" },
  { language: "typescript", version: "5.0.3" },
  { language: "java", version: "15.0.2" },
  { language: "c", version: "10.2.0", runtime: "gcc" },
  { language: "c++", version: "10.2.0", runtime: "gcc" },
  { language: "ruby", version: "3.0.1" },
  { language: "php", version: "8.2.3" },
  { language: "go", version: "1.16.2" },
  { language: "swift", version: "5.3.3" },
  { language: "rust", version: "1.68.2" },
  { language: "kotlin", version: "1.8.20" },
  { language: "r", version: "4.1.1" },
  { language: "perl", version: "5.36.0" },
  { language: "lua", version: "5.4.4" },
  { language: "typescript", version: "1.32.3", runtime: "deno" },
  { language: "python2", version: "2.7.18" },
  { language: "bash", version: "5.2.0" },
  { language: "csharp", version: "6.12.0", runtime: "mono" },
  { language: "basic", version: "6.12.0", runtime: "mono" },
  { language: "shell", version: "0.5.11" },
  { language: "dart", version: "2.19.6" },
  { language: "haskell", version: "9.0.1" },
  { language: "scala", version: "3.2.2" },
  { language: "elixir", version: "1.11.3" },
  { language: "fsharp.net", version: "5.0.201", runtime: "dotnet" },
  { language: "csharp.net", version: "5.0.201", runtime: "dotnet" },
  { language: "erlang", version: "23.0.0" },
  { language: "fortran", version: "10.2.0", runtime: "gcc" },
  { language: "julia", version: "1.8.5" },
  { language: "clojure", version: "1.10.3" },
  { language: "groovy", version: "3.0.7" },
  { language: "emacs", version: "27.1.0" },
  { language: "octave", version: "8.1.0" },
  { language: "nim", version: "1.6.2" },
  { language: "pascal", version: "3.2.2" },
  { language: "awk", version: "5.1.0", runtime: "gawk" },
  { language: "matl", version: "22.7.4" },
  { language: "matl", version: "22.5.0" },
  { language: "japt", version: "2.0.0" },
  { language: "racket", version: "8.3.0" },
  { language: "raku", version: "6.100.0" },
  { language: "powershell", version: "7.1.4", runtime: "pwsh" },
  { language: "fsharp", version: "5.0.201", runtime: "dotnet" },
  { language: "sqlite3", version: "3.36.0" },
  { language: "smalltalk", version: "3.2.3" },
  { language: "coffeescript", version: "2.5.1" },
  { language: "jelly", version: "0.1.31" },
  { language: "llvm_ir", version: "12.0.1" },
  { language: "basic.net", version: "5.0.201", runtime: "dotnet" },
  { language: "fsi", version: "5.0.201", runtime: "dotnet" },
  { language: "d", version: "10.2.0", runtime: "gcc" },
  { language: "brachylog", version: "1.0.0" },
  { language: "brainfuck", version: "2.7.3" },
  { language: "cjam", version: "0.6.5" },
  { language: "cobol", version: "3.1.2" },
  { language: "cow", version: "1.0.0" },
  { language: "crystal", version: "0.36.1" },
  { language: "dragon", version: "1.9.8" },
  { language: "emojicode", version: "1.0.2" },
  { language: "file", version: "0.0.1" },
  { language: "forte", version: "1.0.0" },
  { language: "forth", version: "0.7.3" },
  { language: "freebasic", version: "1.9.0" },
  { language: "golfscript", version: "1.0.0" },
  { language: "husk", version: "1.0.0" },
  { language: "iverilog", version: "11.0.0" },
  { language: "lisp", version: "2.1.2" },
  { language: "lolcode", version: "0.11.2" },
  { language: "osabie", version: "1.0.1" },
  { language: "paradoc", version: "0.6.0" },
  { language: "ponylang", version: "0.39.0" },
  { language: "prolog", version: "8.2.4" },
  { language: "pure", version: "0.68.0" },
  { language: "pyth", version: "1.0.0" },
  { language: "retina", version: "1.2.0" },
  { language: "rockstar", version: "1.0.0" },
  { language: "samarium", version: "0.3.1" },
  { language: "vlang", version: "0.3.3" },
  { language: "vyxal", version: "2.4.1" },
  { language: "yeethon", version: "3.10.0" },
  { language: "zig", version: "0.10.1" },
  { language: "nasm", version: "2.15.5", runtime: "nasm" },
  { language: "nasm64", version: "2.15.5", runtime: "nasm" },
  { language: "ocaml", version: "4.12.0" }
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

export const themes = {
  chrome: { themeValue: "chrome", themeName: "Chrome" },
  clouds: { themeValue: "clouds", themeName: "Clouds" },
  crimson_editor: { themeValue: "crimson_editor", themeName: "Crimson Editor" },
  dawn: { themeValue: "dawn", themeName: "Dawn" },
  dreamweaver: { themeValue: "dreamweaver", themeName: "Dreamweaver" },
  eclipse: { themeValue: "eclipse", themeName: "Eclipse" },
  github: { themeValue: "github", themeName: "GitHub" },
  iplastic: { themeValue: "iplastic", themeName: "IPlastic" },
  katzenmilch: { themeValue: "katzenmilch", themeName: "KatzenMilch" },
  kuroir: { themeValue: "kuroir", themeName: "Kuroir" },
  solarized_light: {
    themeValue: "solarized_light",
    themeName: "Solarized Light",
  },
  sqlserver: { themeValue: "sqlserver", themeName: "SQL Server" },
  textmate: { themeValue: "textmate", themeName: "TextMate" },
  tomorrow: { themeValue: "tomorrow", themeName: "Tomorrow" },
  xcode: { themeValue: "xcode", themeName: "XCode" },
  ambiance: { themeValue: "ambiance", themeName: "Ambiance" },
  chaos: { themeValue: "chaos", themeName: "Chaos" },
  clouds_midnight: {
    themeValue: "clouds_midnight",
    themeName: "Clouds Midnight",
  },
  cobalt: { themeValue: "cobalt", themeName: "Cobalt" },
  dracula: { themeValue: "dracula", themeName: "Dracula" },
  gob: { themeValue: "gob", themeName: "Greeon on Black" },
  gruvbox: { themeValue: "gruvbox", themeName: "Gruvbox" },
  idle_fingers: { themeValue: "idle_fingers", themeName: "idle Fingers" },
  kr_theme: { themeValue: "kr_theme", themeName: "krTheme" },
  merbivore: { themeValue: "merbivore", themeName: "Merbivore" },
  merbivore_soft: { themeValue: "merbivore_soft", themeName: "Merbivore Soft" },
  mono_industrial: {
    themeValue: "mono_industrial",
    themeName: "Mono Industrial",
  },
  monokai: { themeValue: "monokai", themeName: "Monokai" },
  pastel_on_dark: { themeValue: "pastel_on_dark", themeName: "Pastel on Dark" },
  solarized_dark: { themeValue: "solarized_dark", themeName: "Solarized Dark" },
  terminal: { themeValue: "terminal", themeName: "Terminal" },
  tomorrow_night: { themeValue: "tomorrow_night", themeName: "Tomorrow Night" },
  tomorrow_night_blue: {
    themeValue: "tomorrow_night_blue",
    themeName: "Tomorrow Night Blue",
  },
  tomorrow_night_bright: {
    themeValue: "tomorrow_night_bright",
    themeName: "Tomorrow Night Bright",
  },
  tomorrow_night_eighties: {
    themeValue: "tomorrow_night_eighties",
    themeName: "Tomorrow Night 80s",
  },
  twilight: { themeValue: "twilight", themeName: "Twilight" },
  vibrant_ink: { themeValue: "vibrant_ink", themeName: "Vibrant Ink" },
};

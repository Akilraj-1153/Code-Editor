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

import htmlcssjs from "../Assets/LOGO/Htmlcssjs.png";
import python from "../Assets/LOGO/python.png";
import js from "../Assets/LOGO/js.png";
import ts from "../Assets/LOGO/ts.png";
import java from "../Assets/LOGO/java.png";
import c from "../Assets/LOGO/c.png";
import cpp from "../Assets/LOGO/c++.png";
import ruby from "../Assets/LOGO/ruby.png";
import go from "../Assets/LOGO/go.png";
import php from "../Assets/LOGO/php.png";
import swift from "../Assets/LOGO/swift.png";
import rust from "../Assets/LOGO/rust.png";
import kotlin from "../Assets/LOGO/kotlin (2).png";
import perl from "../Assets/LOGO/perl.png";
import r from "../Assets/LOGO/r.png";
import lua from "../Assets/LOGO/lua.png";
import bash from "../Assets/LOGO/bash.png";
import csharp from "../Assets/LOGO/c#.png";
import ocaml from "../Assets/LOGO/OCaml.png";
import dart from "../Assets/LOGO/dart.png";
import haskell from "../Assets/LOGO/haskell.png";
import scala from "../Assets/LOGO/scala.png";
import v from "../Assets/LOGO/v.png";
import elixir from "../Assets/LOGO/elixir.png";
import erlang from "../Assets/LOGO/erlang.png";
import fsharp from "../Assets/LOGO/fsharp.png";
import fortran from "../Assets/LOGO/fortran.png";
import julia from "../Assets/LOGO/julia.png";
import clojure from "../Assets/LOGO/clojure.png";
import groovy from "../Assets/LOGO/groovy.png";
import racket from "../Assets/LOGO/racket.png";
import powershell from "../Assets/LOGO/powershell.png";
import smalltalk from "../Assets/LOGO/smalltalk.png";
import cs from "../Assets/LOGO/cs.png";
import raku from "../Assets/LOGO/raku.png";
import cobol from "../Assets/LOGO/cobol.png";
import prolog from "../Assets/LOGO/prolog.png";
import brainfuck from "../Assets/LOGO/brainfuck.png";
import d from "../Assets/LOGO/d.png";

export const languageOptions = [
  { language: "HTML CSS JS", version: null, img: htmlcssjs },
  {
    language: "python",
    version: "3.10.0",
    code: `print("Hello, World!")`,
    img: python,
  },
  {
    language: "javascript",
    version: "18.15.0",
    runtime: "node",
    code: `console.log("Hello, World!");`,
    img: js,
  },
  {
    language: "typescript",
    version: "5.0.3",
    code: `console.log("Hello, World!");`,
    img: ts,
  },
  {
    language: "java",
    version: "15.0.2",
    code: `public class HelloWorld { public static void main(String[] args) { System.out.println("Hello, World!"); } }`,
    img: java,
  },
  {
    language: "c",
    version: "10.2.0",
    runtime: "gcc",
    code: `#include <stdio.h>\nint main() { printf("Hello, World!\\n"); return 0; }`,
    img: c,
  },
  {
    language: "c++",
    version: "10.2.0",
    runtime: "gcc",
    code: `#include <iostream>\nint main() { std::cout << "Hello, World!" << std::endl; return 0; }`,
    img: cpp,
  },
  {
    language: "ruby",
    version: "3.0.1",
    code: `puts 'Hello, World!'`,
    img: ruby,
  },
  {
    language: "php",
    version: "8.2.3",
    code: `<?php echo 'Hello, World!'; ?>`,
    img: php,
  },
  {
    language: "go",
    version: "1.16.2",
    code: `package main\nimport "fmt"\nfunc main() { fmt.Println("Hello, World!") }`,
    img: go,
  },
  {
    language: "swift",
    version: "5.3.3",
    code: `print("Hello, World!")`,
    img: swift,
  },
  {
    language: "rust",
    version: "1.68.2",
    code: `fn main() { println!("Hello, World!"); }`,
    img: rust,
  },
  {
    language: "kotlin",
    version: "1.8.20",
    code: `fun main() { println("Hello, World!") }`,
    img: kotlin,
  },
  { language: "r", version: "4.1.1", code: `print("Hello, World!")`, img: r },
  {
    language: "perl",
    version: "5.36.0",
    code: `print "Hello, World!\\n";`,
    img: perl,
  },
  {
    language: "lua",
    version: "5.4.4",
    code: `print("Hello, World!")`,
    img: lua,
  },
  {
    language: "bash",
    version: "5.2.0",
    code: `echo "Hello, World!"`,
    img: bash,
  },
  {
    language: "csharp",
    version: "6.12.0",
    runtime: "mono",
    code: `using System; class Program { static void Main() { Console.WriteLine("Hello, World!"); } }`,
    img: csharp,
  },
  {
    language: "dart",
    version: "2.19.6",
    code: `void main() { print('Hello, World!'); }`,
    img: dart,
  },
  {
    language: "haskell",
    version: "9.0.1",
    code: `main = putStrLn "Hello, World!"`,
    img: haskell,
  },
  {
    language: "scala",
    version: "3.2.2",
    code: `@main def hello() = println("Hello, World!")`,
    img: scala,
  },
  { language: "elixir", version: "1.11.3", code: `IO.puts "Hello, World!"`, img: elixir },
  {
    language: "erlang",
    version: "23.0.0",
    code: `io:format("Hello, World!\\n").`,
    img: erlang,
  },
  {
    language: "fortran",
    version: "10.2.0",
    runtime: "gcc",
    code: `program hello\nprint *, "Hello, World!"\nend program hello`,
    img: fortran,
  },
  { language: "julia", version: "1.8.5", code: `println("Hello, World!")`, img: julia },
  { language: "clojure", version: "1.10.3", code: `(println "Hello, World!")`, img: clojure },
  { language: "groovy", version: "3.0.7", code: `println 'Hello, World!'`, img: groovy },
  {
    language: "racket",
    version: "8.3.0",
    code: `#lang racket\n"Hello, World!"`,
    img: racket,
  },
  { language: "raku", version: "6.100.0", code: `say 'Hello, World!';`, img: raku },
  {
    language: "powershell",
    version: "7.1.4",
    runtime: "pwsh",
    code: `Write-Output "Hello, World!"`,
    img: powershell,
  },
  {
    language: "fsharp",
    version: "5.0.201",
    runtime: "dotnet",
    code: `printfn "Hello, World!"`,
    img: fsharp,
  },
  {
    language: "smalltalk",
    version: "3.2.3",
    code: `Transcript show: 'Hello, World!'.`,
    img: smalltalk,
  },
  {
    language: "cs",
    version: "2.5.1",
    code: `console.log 'Hello, World!'`,
    img: cs,
  }, 
  {
    language: "d",
    version: "10.2.0",
    runtime: "gcc",
    code: `import std.stdio; void main() { writeln("Hello, World!"); }`,
    img: d,
  },
  {
    language: "brainfuck",
    version: "2.7.3",
    code: `++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++.>++++.------------.---.>+.>++.`,
    img: brainfuck,
  },
  {
    language: "cobol",
    version: "3.1.2",
    code: `IDENTIFICATION DIVISION.\nPROGRAM-ID. HelloWorld.\nPROCEDURE DIVISION.\nDISPLAY 'Hello, World!'.\nSTOP RUN.`,
    img: cobol,
  },
  {
    language: "prolog",
    version: "8.2.4",
    code: `:- initialization(main).\nmain :- write('Hello, World!'), nl.`,
    img: prolog,
  },
  {
    language: "vlang",
    version: "0.3.3",
    code: `fn main() {\n println('Hello, World!')\n}`,
    img: v,
  },
  {
    language: "ocaml",
    version: "4.12.0",
    code: `print_endline "Hello, World!"`,
    img: ocaml,
  },
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

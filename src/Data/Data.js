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
  { language: "python", version: "3.10.0", code: `print("Hello, World!")` },
  {
    language: "javascript",
    version: "18.15.0",
    runtime: "node",
    code: `console.log("Hello, World!");`,
  },
  {
    language: "typescript",
    version: "5.0.3",
    code: `console.log("Hello, World!");`,
  },
  {
    language: "java",
    version: "15.0.2",
    code: `public class HelloWorld { public static void main(String[] args) { System.out.println("Hello, World!"); } }`,
  },
  {
    language: "c",
    version: "10.2.0",
    runtime: "gcc",
    code: `#include <stdio.h>\nint main() { printf("Hello, World!\\n"); return 0; }`,
  },
  {
    language: "c++",
    version: "10.2.0",
    runtime: "gcc",
    code: `#include <iostream>\nint main() { std::cout << "Hello, World!" << std::endl; return 0; }`,
  },
  { language: "ruby", version: "3.0.1", code: `puts 'Hello, World!'` },
  { language: "php", version: "8.2.3", code: `<?php echo 'Hello, World!'; ?>` },
  {
    language: "go",
    version: "1.16.2",
    code: `package main\nimport "fmt"\nfunc main() { fmt.Println("Hello, World!") }`,
  },
  { language: "swift", version: "5.3.3", code: `print("Hello, World!")` },
  {
    language: "rust",
    version: "1.68.2",
    code: `fn main() { println!("Hello, World!"); }`,
  },
  {
    language: "kotlin",
    version: "1.8.20",
    code: `fun main() { println("Hello, World!") }`,
  },
  { language: "r", version: "4.1.1", code: `print("Hello, World!")` },
  { language: "perl", version: "5.36.0", code: `print "Hello, World!\\n";` },
  { language: "lua", version: "5.4.4", code: `print("Hello, World!")` },
  {
    language: "typescript",
    version: "1.32.3",
    runtime: "deno",
    code: `console.log("Hello, World!");`,
  },
  { language: "python2", version: "2.7.18", code: `print "Hello, World!"` },
  { language: "bash", version: "5.2.0", code: `echo "Hello, World!"` },
  {
    language: "csharp",
    version: "6.12.0",
    runtime: "mono",
    code: `using System; class Program { static void Main() { Console.WriteLine("Hello, World!"); } }`,
  },
  {
    language: "basic",
    version: "6.12.0",
    runtime: "mono",
    code: `PRINT "Hello, World!"`,
  },
  { language: "shell", version: "0.5.11", code: `echo "Hello, World!"` },
  {
    language: "dart",
    version: "2.19.6",
    code: `void main() { print('Hello, World!'); }`,
  },
  {
    language: "haskell",
    version: "9.0.1",
    code: `main = putStrLn "Hello, World!"`,
  },
  {
    language: "scala",
    version: "3.2.2",
    code: `@main def hello() = println("Hello, World!")`,
  },
  { language: "elixir", version: "1.11.3", code: `IO.puts "Hello, World!"` },
  {
    language: "fsharp.net",
    version: "5.0.201",
    runtime: "dotnet",
    code: `printfn "Hello, World!"`,
  },
  {
    language: "csharp.net",
    version: "5.0.201",
    runtime: "dotnet",
    code: `using System; class Program { static void Main() { Console.WriteLine("Hello, World!"); } }`,
  },
  {
    language: "erlang",
    version: "23.0.0",
    code: `io:format("Hello, World!\\n").`,
  },
  {
    language: "fortran",
    version: "10.2.0",
    runtime: "gcc",
    code: `program hello\nprint *, "Hello, World!"\nend program hello`,
  },
  { language: "julia", version: "1.8.5", code: `println("Hello, World!")` },
  { language: "clojure", version: "1.10.3", code: `(println "Hello, World!")` },
  { language: "groovy", version: "3.0.7", code: `println 'Hello, World!'` },
  { language: "emacs", version: "27.1.0", code: `(message "Hello, World!")` },
  { language: "octave", version: "8.1.0", code: `disp("Hello, World!")` },
  { language: "nim", version: "1.6.2", code: `echo "Hello, World!"` },
  {
    language: "pascal",
    version: "3.2.2",
    code: `program HelloWorld; begin writeln('Hello, World!'); end.`,
  },
  {
    language: "awk",
    version: "5.1.0",
    runtime: "gawk",
    code: `BEGIN { print "Hello, World!" }`,
  },
  { language: "matl", version: "22.7.4", code: `disp('Hello, World!')` },
  { language: "japt", version: "2.0.0", code: `⎚"Hello, World!"` },
  {
    language: "racket",
    version: "8.3.0",
    code: `#lang racket\n"Hello, World!"`,
  },
  { language: "raku", version: "6.100.0", code: `say 'Hello, World!';` },
  {
    language: "powershell",
    version: "7.1.4",
    runtime: "pwsh",
    code: `Write-Output "Hello, World!"`,
  },
  {
    language: "fsharp",
    version: "5.0.201",
    runtime: "dotnet",
    code: `printfn "Hello, World!"`,
  },
  { language: "sqlite3", version: "3.36.0", code: `SELECT 'Hello, World!';` },
  {
    language: "smalltalk",
    version: "3.2.3",
    code: `Transcript show: 'Hello, World!'.`,
  },
  {
    language: "coffeescript",
    version: "2.5.1",
    code: `console.log 'Hello, World!'`,
  },
  { language: "jelly", version: "0.1.31", code: `“Hello, World!”` },
  {
    language: "llvm_ir",
    version: "12.0.1",
    code: `@.str = private constant [13 x i8] c"Hello, World!\\00", align 1\ndefine i32 @main() #0 {\n  %1 = call i32 @printf(i8* getelementptr inbounds ([13 x i8], [13 x i8]* @.str, i64 0, i64 0))\n  ret i32 0\n}\ndeclare i32 @printf(i8*, ...) #1`,
  },
  {
    language: "basic.net",
    version: "5.0.201",
    runtime: "dotnet",
    code: `Module HelloWorld\nSub Main()\nConsole.WriteLine("Hello, World!")\nEnd Sub\nEnd Module`,
  },
  {
    language: "fsi",
    version: "5.0.201",
    runtime: "dotnet",
    code: `printfn "Hello, World!"`,
  },
  {
    language: "d",
    version: "10.2.0",
    runtime: "gcc",
    code: `import std.stdio; void main() { writeln("Hello, World!"); }`,
  },
  { language: "brachylog", version: "1.0.0", code: `writeln("Hello, World!")` },
  {
    language: "brainfuck",
    version: "2.7.3",
    code: `++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++.>++++.------------.---.>+.>++.`,
  },
  { language: "cjam", version: "0.6.5", code: `"Hello, World!"` },
  {
    language: "cobol",
    version: "3.1.2",
    code: `IDENTIFICATION DIVISION.\nPROGRAM-ID. HelloWorld.\nPROCEDURE DIVISION.\nDISPLAY 'Hello, World!'.\nSTOP RUN.`,
  },
  { language: "crystal", version: "0.36.1", code: `puts "Hello, World!"` },
  { language: "dragon", version: "1.9.8", code: `print("Hello, World!")` },
  {
    language: "emojicode",
    version: "1.0.2",
    code: `🍇🍉\n🍴 🍇 🍉\n😀 🍦 🔤Hello, World!🔤 🍉`,
  },
  { language: "file", version: "0.0.1", code: `echo "Hello, World!"` },
  { language: "forte", version: "1.0.0", code: `echo("Hello, World!")` },
  { language: "forth", version: "0.7.3", code: `." Hello, World!"` },
  { language: "freebasic", version: "1.9.0", code: `PRINT "Hello, World!"` },
  { language: "golfscript", version: "1.0.0", code: `"Hello, World!"` },
  {
    language: "husk",
    version: "1.0.0",
    code: `main = putStrLn "Hello, World!"`,
  },
  {
    language: "iverilog",
    version: "11.0.0",
    code: `module main;\ninitial begin\n  $display("Hello, World!");\n  $finish;\nend\nendmodule`,
  },
  { language: "lisp", version: "2.1.2", code: `(print "Hello, World!")` },
  {
    language: "lolcode",
    version: "0.11.2",
    code: `HAI 1.2\nVISIBLE "Hello, World!"\nKTHXBYE`,
  },
  { language: "osabie", version: "1.0.1", code: `print("Hello, World!")` },
  { language: "paradoc", version: "0.6.0", code: `print("Hello, World!")` },
  {
    language: "ponylang",
    version: "0.39.0",
    code: `actor Main\n  new create(env: Env) => env.out.print("Hello, World!")`,
  },
  {
    language: "prolog",
    version: "8.2.4",
    code: `:- initialization(main).\nmain :- write('Hello, World!'), nl.`,
  },
  { language: "pure", version: "0.68.0", code: `println("Hello, World!")` },
  { language: "pyth", version: "1.0.0", code: `K"Hello, World!"` },
  { language: "retina", version: "1.2.0", code: `Hello, World!` },
  { language: "rockstar", version: "1.0.0", code: `say "Hello, World!"` },
  { language: "samarium", version: "0.3.1", code: `print("Hello, World!")` },
  {
    language: "vlang",
    version: "0.3.3",
    code: `fn main() {\n println('Hello, World!')\n}`,
  },
  { language: "vyxal", version: "2.4.1", code: `print("Hello, World!")` },
  { language: "yeethon", version: "3.10.0", code: `print("Hello, World!")` },
  {
    language: "zig",
    version: "0.10.1",
    code: `const std = @import("std");\npub fn main() void {\n  std.debug.print("Hello, World!\\n", .{});\n}`,
  },
  {
    language: "nasm",
    version: "2.15.5",
    runtime: "nasm",
    code: `section .data\nhello db 'Hello, World!', 0\nsection .text\nglobal _start\n_start:\nmov edx, len\nmov ecx, hello\nmov ebx, 1\nmov eax, 4\nint 0x80\nmov eax, 1\nint 0x80\nlen equ $ - hello`,
  },
  {
    language: "nasm64",
    version: "2.15.5",
    runtime: "nasm",
    code: `section .data\nhello db 'Hello, World!', 0\nsection .text\nglobal _start\n_start:\nmov edx, len\nmov ecx, hello\nmov ebx, 1\nmov eax, 4\nint 0x80\nmov eax, 1\nint 0x80\nlen equ $ - hello`,
  },
  {
    language: "ocaml",
    version: "4.12.0",
    code: `print_endline "Hello, World!"`,
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

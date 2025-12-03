import fs from "fs";

let html = fs.readFileSync("index.html", "utf8");

// إزالة أي رموز UTF-8 تالفة
html = html.replace(/�/g, "");

// إصلاح رموز \u003C إلى <
html = html.replace(/\\u003C/g, "<");

// إصلاح \u003E إلى >
html = html.replace(/\\u003E/g, ">");

// إزالة أي ترميز غير صالح في script
html = html.replace(/<\/script[^>]*?>/g, "</script>");

// إزالة أي مسافات غريبة داخل وسوم HTML
html = html.replace(/<\s+/g, "<");
html = html.replace(/\s+>/g, ">");

fs.writeFileSync("index.html", html, "utf8");

console.log("✔ index.html تم تنظيفه بالكامل!");

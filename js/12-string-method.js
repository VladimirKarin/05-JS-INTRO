console.clear();

const name = "Petras";

console.log(name.length);
console.log("".length);
console.log("   ".length);
console.log("  ".length);

console.log("Petras"[0]);
console.log("Petras"[1]);
console.log("Petras"[2]);
console.log("Petras"[3]);
console.log("Petras"[4]);
console.log("Petras"[5]);

console.log("");
console.log("# charAt");
console.log("--------------------");

console.log("Petars".charAt(0));

console.log("");
console.log("# AT");
console.log("--------------------");

console.log("Petars".at(-5));
console.log("Petars".at(-4));
console.log("Petars".at(-3));
console.log("Petars".at(-2));
console.log("Petars".at(-1));
console.log("Petars".at(-0));

console.log("");
console.log("# INCLUDE");
console.log("--------------------");

console.log("Maryte".includes("M"));
console.log("Maryte".includes("a"));
console.log("Maryte".includes("x"));
console.log("Maryte".includes("xyz"));
console.log("Maryte".includes("ry"));
console.log("Maryte".includes("re"));
console.log("Maryte".includes("te"));

console.log("");
console.log("# startsWith");
console.log("--------------------");

console.log("Maryte".startsWith("a"));
console.log("Maryte".startsWith("ar"));
console.log("Maryte".startsWith("mar"));
console.log("Maryte".startsWith("Mar"));

console.log("");
console.log("# endsWith");
console.log("--------------------");

console.log("Maryte".endsWith("a"));
console.log("Maryte".endsWith("Mar"));
console.log("Maryte".endsWith("yte"));
console.log("Maryte".endsWith("te"));
console.log("Maryte".endsWith("e"));

console.log("");
console.log("# INCLUDE");
console.log("--------------------");

const istiktukas = "pyst";
const sakinys = "Va tai pyst ir yra Petrui DOVANA";
const sakinys2 = "Pyst par galva su pagaliu.";

console.log("istiktukas lowercase:", sakinys.includes(istiktukas));
console.log("istiktukas2 lowercase:", sakinys2.includes(istiktukas));

console.log(sakinys.toLowerCase());
console.log(sakinys.toUpperCase());

const p1 = sakinys.toLowerCase().includes(istiktukas.toLowerCase());
const p2 = sakinys2.toLowerCase().includes(istiktukas.toLowerCase());
console.log("Istiktukas lovercase: ", p1);
console.log("Istiktukas lovercase: ", p2);

console.log("");
console.log("# Index OF");
console.log("--------------------");

console.log("Jonas".indexOf("J"));
console.log("Jonas".indexOf("o"));
console.log("Jonas".indexOf("n"));
console.log("Jonas".indexOf("a"));
console.log("Jonas".indexOf("s"));
console.log("Jonas".indexOf("x"));
console.log("Jonas".indexOf("g"));
console.log("Jonas".indexOf("on"));
console.log("Jonas".indexOf("na"));
console.log("Jonas".indexOf("onas"));
console.log("Jonas".indexOf("onasss"));

console.log("Ananasas".indexOf("a", 2));
console.log("Vasara".indexOf("a", 3));

console.log("");
console.log("# SLICE");
console.log("--------------------");

const w1 = "Pasimatymas";
const w2 = w1.slice(4);
const w3 = w1.slice(2, -2);
const w4 = w1.slice(-2);
const w5 = w1.slice(1, w1.length - 1);
const w6 = w1.slice(1, -1);
console.log(w2);

console.log("");
console.log("# REPLACE");
console.log("--------------------");

const s1 = "Labas rytas, Pasauli!";
const s2 = s1.replace("rytas", "vakaras");

console.log(s1);
console.log(s2);

const template = "Gera diena, VARDAS!";
const userHi = template.replace("VARDAS", "Ona");

console.log(template);
console.log(userHi);

const song = "na na na na";
const song2 = song.replace("na", "la");
const song3 = song.replaceAll("na", "la");
const song4 = song.replace(/na/g, "la"); /*Regex-  regExp */

console.log(song);
console.log(song2);
console.log(song3);
console.log(song4);

console.log("");
console.log("# REPEAT");
console.log("--------------------");

const superSong = "La" + " la".repeat(10) + "!";

console.log(superSong);

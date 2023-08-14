const { readFile } = require("node:fs/promises");

// IIFE -> Inmediatly Invoked Function Expression
(async () => {
  console.log("Leyendo el primer archivo...");
  const text = await readFile("./archivo1.txt", "utf-8");
  console.log("primer texto:", text);
  console.log("hacer cosas mientras lees el archivo ---->>>>> ");

  console.log("Leyendo el segundo archivo...");
  const secondText = await readFile("./archivo2.txt", "utf-8");
  console.log("segungo texto: ", secondText);
})();

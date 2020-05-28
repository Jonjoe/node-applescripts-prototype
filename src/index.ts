import osascript from "node-osascript";

const filePath = __dirname + "/appleScripts/openIterm.scpt";

console.log(filePath);

osascript.executeFile(filePath, (err: any, result: any, raw: any) => {
  if (err) return console.error(err);
  console.log(result, raw);
});

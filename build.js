require('uglify-es');
const fs = require('fs');
const path = require('path');

const files = [
    "../lib/utils.js",
    "../lib/ast.js",
    "../lib/parse.js",
    "../lib/transform.js",
    "../lib/scope.js",
    "../lib/output.js",
    "../lib/compress.js",
    "../lib/sourcemap.js",
    "../lib/mozilla-ast.js",
    "../lib/propmangle.js",
    "../lib/minify.js",
    "./exports.js",
];

const BASE_PATH = './node_modules/uglify-es/tools/';

let data = "(function(MOZ_SourceMap, exports){";

for (const file of files) {
    data += '\n' + fs.readFileSync(path.resolve(path.join(BASE_PATH, file)), 'utf-8');
}

data += "})(require('source-map'), exports)";

if (!fs.existsSync('./dist/')) {
    fs.mkdirSync('./dist/');
}
fs.writeFileSync('./dist/uglify-es.js', data);

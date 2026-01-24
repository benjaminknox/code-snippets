import mjml2html from 'mjml'
import { readFileSync } from 'fs';

let mjml = readFileSync('./example-email.mjml', 'utf-8');
let translated = mjml2html(mjml);

console.log(translated.html); // Output should be the HTML file above

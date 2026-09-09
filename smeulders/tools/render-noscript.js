/* ==========================================================================
   Regenerates the <noscript> fallbacks from data.js.
   
   The project lists, capabilities, brands and vacancies are client-rendered,
   so without JavaScript those sections would be empty. This writes a static
   Dutch-language equivalent into each page between marker comments.
   
   The site is still served directly with no build step — the output is
   committed HTML. Run this after editing data.js:
   
       node smeulders/tools/render-noscript.js
   
   It rewrites only the text between the <!-- noscript:start X --> and
   <!-- noscript:end X --> markers, and exits non-zero if a marker is missing
   or if a page is already up to date check is requested via --check.
   ========================================================================== */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dir = path.join(__dirname, '..');
const check = process.argv.includes('--check');

// data.js is a plain script that declares top-level consts; run it in a
// sandbox and read them back rather than duplicating the data here.
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(dir, 'data.js'), 'utf8') +
    '\n;this.__out = { projectsData, capabilities, brands, vacancies };', sandbox);
const { projectsData, capabilities, brands, vacancies } = sandbox.__out;

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const nl = v => (v && typeof v === 'object' && !Array.isArray(v)) ? v.nl : v;

const note = text =>
    `<p class="body-copy" style="margin:0 0 2rem"><strong>${esc(text)}</strong></p>`;

// Detail pages are client-rendered too, so these entries carry the substance
// inline instead of linking somewhere that would also be blank.
function projectList(list) {
    return '<ul class="spec-list" style="display:grid;gap:0">' + list.map(p =>
        `<li style="grid-template-columns:1fr"><div>` +
        `<span class="proj-title">${esc(nl(p.title))}</span><br>` +
        `<span class="proj-sub">${esc(nl(p.location))} &middot; ${esc(p.year)}</span>` +
        `<p class="body-copy" style="margin:.5rem 0 0">${esc(nl(p.intro))}</p>` +
        `</div></li>`).join('') + '</ul>';
}

const blocks = {
    works: note('Uitgelicht werk — de volledige projectenlijst staat op de projectenpagina.') +
        projectList(projectsData.filter(p => p.featured)),

    caps: '<ul class="spec-list">' + capabilities.map(c =>
        `<li><span class="k">${esc(c.no)}</span><div><strong>${esc(nl(c.title))}</strong>` +
        `<p style="margin:.4rem 0 0">${esc(nl(c.text))}</p></div></li>`).join('') + '</ul>',

    brands: '<ul class="spec-list">' + brands.map(b =>
        `<li><span class="k">${esc(nl(b.tag))}</span><div><strong>${esc(nl(b.name))}</strong>` +
        `<p style="margin:.4rem 0 0">${esc(nl(b.text))}</p></div></li>`).join('') + '</ul>',

    vacancies: '<ul class="spec-list">' + vacancies.map(v =>
        `<li><div><strong>${esc(nl(v.title))}</strong></div>` +
        `<span class="k">${esc(nl(v.meta))}</span></li>`).join('') + '</ul>',

    index: note('Deze lijst wordt normaal in de browser opgebouwd en op sector gefilterd. ' +
        'Hieronder staan alle projecten.') + projectList(projectsData),

    detail: note('Projectpagina’s worden in de browser opgebouwd. ' +
        'Alle projecten staan met hun omschrijving op de projectenpagina.') +
        '<p><a class="link-arrow" href="projecten.html">Naar alle projecten</a></p>'
};

const targets = {
    'index.html': ['works', 'caps', 'brands', 'vacancies'],
    'projecten.html': ['index'],
    'project.html': ['detail']
};

let stale = [];
for (const [file, keys] of Object.entries(targets)) {
    const full = path.join(dir, file);
    let html = fs.readFileSync(full, 'utf8');
    const before = html;
    for (const key of keys) {
        const start = `<!-- noscript:start ${key} -->`;
        const end = `<!-- noscript:end ${key} -->`;
        const i = html.indexOf(start), j = html.indexOf(end);
        if (i === -1 || j === -1) {
            console.error(`${file}: missing marker for "${key}"`);
            process.exit(2);
        }
        // An end marker sitting before its start would splice from the wrong
        // offset and silently corrupt the page rather than failing.
        if (j < i + start.length) {
            console.error(`${file}: "${key}" end marker precedes its start marker`);
            process.exit(2);
        }
        html = html.slice(0, i + start.length) + '\n' + blocks[key] + '\n' + html.slice(j);
    }
    if (html === before) continue;
    if (check) stale.push(file); else fs.writeFileSync(full, html);
    console.log(`${check ? 'stale' : 'updated'}: ${file}`);
}

if (check && stale.length) {
    console.error('\nnoscript fallbacks are out of date; run: node smeulders/tools/render-noscript.js');
    process.exit(1);
}
console.log(check ? 'noscript fallbacks are up to date' : 'done');

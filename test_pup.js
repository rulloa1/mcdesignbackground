const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  await page.goto('file:///' + __dirname.replace(/\\/g, '/') + '/index.html');
  
  // Output window.GALLERIES keys
  const galleriesKeys = await page.evaluate(() => Object.keys(window.GALLERIES || {}));
  console.log('GALLERIES keys:', galleriesKeys);
  
  await page.click('[data-project="miami-beach-condo"]');
  await new Promise(r => setTimeout(r, 500));
  const html = await page.evaluate(() => document.getElementById('project-modal-overlay').innerHTML);
  console.log('Images rendered:', (html.match(/<img class="project-modal-gallery-img"/g) || []).length);
  await browser.close();
})();

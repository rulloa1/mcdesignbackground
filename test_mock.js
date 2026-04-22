const fs = require('fs');
const code = fs.readFileSync('test_2.js', 'utf8');

const mock = `
const document = { 
  addEventListener: () => {}, 
  body: { 
    insertAdjacentHTML: (pos, html) => { console.log('INSERTED HTML LENGTH:', html.length); }, 
    style: {} 
  }, 
  getElementById: () => ({ addEventListener: () => {} }) 
}; 
const window = { 
  scrollTo: () => {}, 
  GALLERIES: { 
    'miami-beach-condo': { 
      images: ['1.jpg', '2.jpg'] 
    } 
  } 
}; 
function openImageLightbox(){} 
function closeProjectModal(){} 

${code}

openProjectModal('miami-beach-condo');
`;

try {
  eval(mock);
} catch(e) {
  console.error("RUNTIME ERROR:", e);
}

import fs from 'fs/promises';

async function updateHtml() {
  try {
    const metadataJson = await fs.readFile('./metadata.json', 'utf-8');
    const metadata = JSON.parse(metadataJson);

    let indexHtml = await fs.readFile('./index.html', 'utf-8');

    indexHtml = indexHtml.replace(/{DOMAIN}/g, metadata.domain);
    indexHtml = indexHtml.replace(/{EMAIL}/g, metadata.email);

    await fs.writeFile('./index.html', indexHtml, 'utf-8');

    console.log('index.html updated successfully!');
  } catch (error) {
    console.error('Error updating index.html:', error);
  }
}

updateHtml();

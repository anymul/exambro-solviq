// scripts/verify-seo.js
import fs from 'fs';
import path from 'path';

function checkFile(relPath) {
  const content = fs.readFileSync(path.resolve('dist', relPath), 'utf8');
  console.log(`\n========================================`);
  console.log(`PAGE: ${relPath}`);
  console.log(`========================================`);
  console.log(`File size: ${content.length} bytes`);
  
  const hasAppHtml = content.includes('Building the Intelligence Layer') || content.includes('PrepOne') || content.includes('CoachOne') || content.includes('CBSE') || content.includes('Bihar Board');
  console.log(`Pre-rendered DOM Content Present: ${hasAppHtml ? 'YES' : 'NO'}`);

  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  console.log(`Title: ${titleMatch ? titleMatch[1] : 'NONE'}`);

  const descMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
  console.log(`Description: ${descMatch ? descMatch[1] : 'NONE'}`);

  const canonicalMatch = content.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  console.log(`Canonical: ${canonicalMatch ? canonicalMatch[1] : 'NONE'}`);

  const jsonLdMatches = content.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi);
  console.log(`JSON-LD Structured Data Count: ${jsonLdMatches ? jsonLdMatches.length : 0}`);
  if (jsonLdMatches) {
    jsonLdMatches.forEach((tag, idx) => {
      const json = tag.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '');
      try {
        const parsed = JSON.parse(json);
        console.log(`  Schema #${idx + 1} type: ${parsed['@type'] || (parsed['@graph'] ? 'Graph' : 'Custom')} | name: ${parsed.name || parsed.headline || 'N/A'}`);
      } catch (e) {
        console.log(`  Schema #${idx + 1} JSON Parse Error: ${e.message}`);
      }
    });
  }
}

checkFile('index.html');
checkFile('prepone/index.html');
checkFile('coachone/index.html');
checkFile('about/index.html');
checkFile('blog/index.html');
checkFile('study-material/class-12-physics-notes-all-chapters-pdf/index.html');
checkFile('prepone/mock-tests/index.html');
checkFile('prepone/pyqs/index.html');

import puppeteer from 'puppeteer'
import http from 'http'
import fs from 'fs'
import path from 'path'

const distDir = path.resolve('dist')
const PORT = 4567

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
}

const server = http.createServer((req, res) => {
  const url = req.url.split('?')[0]
  let filePath = path.join(distDir, url === '/' ? 'index.html' : url)
  if (!fs.existsSync(filePath)) {
    filePath = path.join(distDir, 'index.html')
  }
  const ext = path.extname(filePath)
  res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' })
  fs.createReadStream(filePath).pipe(res)
})

// Find Chrome: prefer system Chrome (local), fall back to puppeteer's bundled (CI)
function findChrome() {
  const paths = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium-browser',
  ]
  for (const p of paths) {
    if (fs.existsSync(p)) return p
  }
  return undefined // fall back to puppeteer bundled
}

server.listen(PORT, async () => {
  const executablePath = findChrome()
  const browser = await puppeteer.launch({
    headless: true,
    ...(executablePath ? { executablePath } : {}),
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  const page = await browser.newPage()

  page.on('pageerror', err => console.error('Page error:', err.message))

  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0', timeout: 15000 })
  await page.waitForSelector('.app', { timeout: 5000 }).catch(() => {
    console.warn('Warning: .app selector not found after 5s')
  })

  const html = await page.content()
  await browser.close()
  server.close()

  const finalHtml = '<!DOCTYPE html>' + html.replace(/^<!DOCTYPE[^>]*>/i, '')
  fs.writeFileSync(path.join(distDir, 'index.html'), finalHtml)

  const headings = (finalHtml.match(/<h[1-6]/g) || []).length
  const words = finalHtml.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length
  console.log(`Prerendered: ${(finalHtml.length / 1024).toFixed(1)} KB, ${headings} headings, ~${words} words`)
})

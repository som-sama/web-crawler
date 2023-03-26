const { normalizeURL, getURLsFromHTML } = require('./crawl.js')
const { test, expect } = require('@jest/globals')

test('normalizeURL protocol', () => {
  const input = 'https://blog.boot.dev/path'
  const actual = normalizeURL(input)
  const expected = 'blog.boot.dev/path'
  expect(actual).toEqual(expected)
})

test('normalizeURL slash', () => {
  const input = 'https://blog.boot.dev/path/'
  const actual = normalizeURL(input)
  const expected = 'blog.boot.dev/path'
  expect(actual).toEqual(expected)
})

test('normalizeURL capitals', () => {
  const input = 'https://BLOG.boot.dev/path'
  const actual = normalizeURL(input)
  const expected = 'blog.boot.dev/path'
  expect(actual).toEqual(expected)
})

test('normalizeURL http', () => {
  const input = 'http://BLOG.boot.dev/path'
  const actual = normalizeURL(input)
  const expected = 'blog.boot.dev/path'
  expect(actual).toEqual(expected)
})

test('getURLsFromHTML absolute', () => {
  const inputURL = 'https://blog.boot.dev/path/'
  const inputBody = '<html><body><a href="https://blog.boot.dev/path/"><span>Boot.dev></span></a></body></html>'
  const actual = getURLsFromHTML(inputBody, inputURL)
  const expected = [ 'https://blog.boot.dev/path/']
  expect(actual).toEqual(expected)
})




test('getURLsFromHTML relative', () => {
    const inputURL = 'https://blog.boot.dev'
    const inputBody = '<html><body><a href="/path/"><span>Boot.dev></span></a></body></html>'
    const actual = getURLsFromHTML(inputBody, inputURL)
    const expected = [ 'https://blog.boot.dev/path/' ]
    expect(actual).toEqual(expected)
  })


  test('getURLsFromHTML both ', () => {
    const inputURL = 'https://blog.boot.dev'
    const inputBody = `<html>
    <body>
        <a href="https://blog.boot.dev/path1/">
        <span>Boot.dev Path one></span>
        </a>
        <a href="https://blog.boot.dev/path2/">
        <span>Boot.dev Path two></span>
        </a>
    </body>
    </html>`
    const actual = getURLsFromHTML(inputBody, inputURL)
    const expected = [ "https://blog.boot.dev/path1/", "https://blog.boot.dev/path2/" ]
    expect(actual).toEqual(expected)
  })




  test('getURLsFromHTML invalid ', () => {
    const inputURL = 'https://blog.boot.dev'
    const inputBody = `<html>
    <body>
        <a href="invalid">
        <span>Invalid URL</span>
        </a>
    </body>
    </html>`
    const actual = getURLsFromHTML(inputBody, inputURL)
    const expected = []
    expect(actual).toEqual(expected)
  })
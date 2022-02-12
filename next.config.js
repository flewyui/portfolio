/** @type {import('next').NextConfig} */
const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''
const nextConfig = {
    reactStrictMode: true,
    assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
    trailingSlash: true,
}

module.exports = nextConfig

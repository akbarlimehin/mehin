module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/projects',
        permanent: true,
      },
    ]
  },
}

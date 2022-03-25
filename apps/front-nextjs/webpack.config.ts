module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.tsx?$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
}

const path = require('path')
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}

// const path = require('path')

// module.exports = {
//   webpack: {
//     alias: {
//       '@components': path.resolve(__dirname, 'src/components'),
//       '@constants': path.resolve(__dirname, 'src/constants'),
//       '@context': path.resolve(__dirname, 'src/context'),
//       '@hooks': path.resolve(__dirname, 'src/hooks'),
//       '@pages': path.resolve(__dirname, 'src/pages'),
//       '@styles': path.resolve(__dirname, 'src/styles'),
//       // '@utils': path.resolve(__dirname, 'src/utils'),
//       // '@assets': path.resolve(__dirname, 'src/assets'),
//     },
//   },
// }

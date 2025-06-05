/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Permitir imágenes de Unsplash
    domains: ['images.unsplash.com'],

    // Alternativamente, puedes usar remotePatterns (más nuevo y flexible):
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      // Puedes agregar más dominios aquí si necesitas
      {
        protocol: 'https',
        hostname: 'another-domain.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
}

module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
    // ↓ next build を実行する際に Static Export を利用します。
    output: 'export',
    basePath: "/SekaiKura.github.io",
    images: {
      unoptimized: true,
    },
};

export default nextConfig;

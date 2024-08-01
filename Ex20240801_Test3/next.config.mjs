/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites(){
        return [
            {
                source: "/ArpltnInforInqireSvc/:path*",
                destination: "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/:path*"
            }
        ];
    }};

export default nextConfig;

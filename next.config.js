import withMDX from '@next/mdx';

const nextConfig = {
  // Your existing configuration
};

export default withMDX( {
  extension: /\.mdx?$/,
} )( nextConfig );
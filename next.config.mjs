import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

export default (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
    };
  }
  return {
    /* config options for all phases except development here */
    output: "export",
    basePath: "/ericj111.github.io",
    images: {
      unoptimized: true,
    },
  };
};

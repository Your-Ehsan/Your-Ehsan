/**
 * Environmental configuration object for connecting to Sanity
 */
const env = {
  /**
   * Sanity Project ID obtained from environment variables
   */
  sanityProjectId: process.env.SANITY_STUDIO_PROJECT_ID,

  /**
   * Sanity Dataset name obtained from environment variables
   */
  sanityDataset: process.env.SANITY_STUDIO_DATASET,

  /**
   * Sanity API version obtained from environment variables
   */
  sanityApiVersion: process.env.SANITY_STUDIO_API_VERSION,
}

// Export the environmental configuration for use throughout the application
export default env

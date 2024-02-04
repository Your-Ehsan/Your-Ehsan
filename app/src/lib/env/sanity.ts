import type { ClientConfig } from '@sanity/client'
import assertValue from '../handlers/assertValue'

const sanity: ClientConfig = {
  /**
   * Project ID for sanity client
   */
  projectId: assertValue({
    value: import.meta.env.SANITY_PROJECT_ID,
    errorMessage: 'SANITY_PROJECT_ID not found',
  }),
  /**
   * Dataset name for sanityClient
   */
  dataset: assertValue({
    value: import.meta.env.SANITY_DATASET,
    errorMessage: 'SANITY_DATASET not found',
  }),
  /**
   * apiVersion for sanity client
   */
  apiVersion: assertValue({
    value: import.meta.env.SANITY_API_VERSION,
    errorMessage: 'SANITY_API_VERSION not found',
  }),
  /**
   * useCdn @type boolean for sanity client
   */
  useCdn: false,
  /**
   * perspective for the sanity client
   */
  perspective: 'published',
  /**
   * Access token to get data from the sanity dataset
   */
  token: assertValue({
    value: import.meta.env.SANITY_ACCESS_TOKEN,
    errorMessage: 'SANITY_ACCESS_TOKEN not found',
  }),
}

export default sanity

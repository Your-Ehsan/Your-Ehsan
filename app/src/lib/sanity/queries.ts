const queries = {
  /**
   * Define a groq query to fetch site configurations
   * This query will be used to fetch the portfolio details from sanity CMS
   * - title
   * - favicon
   * - Image
   * - social links and more
   */
  siteConfigs: `
  *[_type == 'siteConfigs' && _id == 'f2b48f84-4770-4a63-94a8-40247ddffb0d']
`,
}

export default queries

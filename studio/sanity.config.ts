import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemas'
import env from './lib/env'
import assertValue from './lib/handlers/assertValue'

export default defineConfig({
  title: 'your-ehsan',

  projectId: assertValue({errorMessage: 'projectId not found', value: env.sanityProjectId}),
  dataset: assertValue({errorMessage: 'DataSet not found', value: env.sanityDataset}),
  plugins: [
    structureTool(),
    visionTool(),
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})

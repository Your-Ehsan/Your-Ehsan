import { createClient } from '@sanity/client'
import env from '../env'

export default createClient(env.sanity)

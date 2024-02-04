import { atom } from 'nanostores'
import type { SiteConfigsType } from '../types/siteConfigs.types'

export const state = atom<{ data: null | SiteConfigsType }>({ data: null })

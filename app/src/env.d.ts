/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

interface ImportMetaEnv {
  readonly SANITY_PROJECT_ID: string
  readonly SANITY_DATASET: string
  readonly SANITY_API_VERSION: string
  readonly SANITY_ACCESS_TOKEN: string

  readonly FIREBASE_TYPE: string
  readonly FIREBASE_PROJECT_ID: string
  readonly FIREBASE_PRIVATE_KEY_ID: string
  readonly FIREBASE_PRIVATE_KEY: string
  readonly FIREBASE_CLIENT_EMAIL: string
  readonly FIREBASE_CLIENT_ID: string
  readonly FIREBASE_AUTH_URI: string
  readonly FIREBASE_TOKEN_URI: string
  readonly FIREBASE_AUTH_PROVIDER_X509_CERT_URL: string
  readonly FIREBASE_CLIENT_X509_CERT_URL: string
  readonly FIREBASE_UNIVERSE_DOMAIN: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

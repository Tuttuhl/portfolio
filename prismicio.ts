import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
import { PrismicDocument } from '@prismicio/types'
import sm from './sm.json'

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
// Update the routes array to match your project's route structure
/** @type {prismic.ClientConfig['routes']} **/
const routes = [
  {
    type: 'home',
    path: '/'
  }
]

export function createClient ({
  previewData,
  req,
  ...config
}: prismicNext.CreateClientConfig = {}): prismic.Client<PrismicDocument<Record<string, any>, string, string>> {
  const client = prismic.createClient(sm.apiEndpoint, { routes, ...config })

  prismicNext.enableAutoPreviews({ client, previewData, req })

  return client
}

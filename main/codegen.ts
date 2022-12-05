import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql',
  generates: {
    './src/graphql/generated.ts': {
      plugins: ['typescript']
    }
  }
}
export default config

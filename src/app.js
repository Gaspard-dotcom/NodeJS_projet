import fastify from 'fastify'

import { jwtPlugin } from './plugins/jwt.js'
import { supabasePlugin } from './plugins/supabase.js'
import { routes as indexRoutes } from './routes/index.js'
import { routes as authRoutes } from './routes/auth.js'
import { routes as authorRoutes } from './routes/author.js'
import { routes as categoryRoutes } from './routes/category.js'
import { routes as videoRoutes } from './routes/video.js'

const { JWT_SECRET, SUPABASE_URL, SUPABASE_KEY } = process.env

/**
 * @param { import('fastify').FastifyServerOptions } options
 */
export function build(options = {}) {
  const app = fastify(options)

  app.register(jwtPlugin, { secretKey: JWT_SECRET })
  app.register(supabasePlugin, {
    supabaseUrl: SUPABASE_URL,
    supabaseKey: SUPABASE_KEY,
  })
  
  app.register(indexRoutes)
  app.register(authRoutes)
  app.register(authorRoutes)
  app.register(categoryRoutes)
  app.register(videoRoutes)

  return app
}

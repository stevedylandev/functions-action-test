import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default {
  async fetch(request: Request, env: any, ctx: any) {
    return app.fetch(request, env, ctx)
  }
}

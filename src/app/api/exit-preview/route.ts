import { draftMode } from 'next/headers'

export async function GET(): Promise<Response> {
  draftMode().disable()
  return new Response('Se ha abandonado el modo de previsualización')
}

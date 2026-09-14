import { cookies } from 'next/headers'

export const ADMIN_COOKIE = 'pa_admin'

export function isAuthed() {
  const value = cookies().get(ADMIN_COOKIE)?.value
  const password = process.env.ADMIN_PASSWORD
  return Boolean(password) && value === password
}

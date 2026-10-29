// Small sessionStorage helpers. Every access is guarded: storage can be
// unavailable (private mode, blocked site data) and the site must still work.

const UNLOCKED = 'keepsake:unlocked'
const READ = 'keepsake:read'
const scrollKey = (id: string) => `keepsake:scroll:${id}`

function get(key: string): string | null {
  try {
    return window.sessionStorage.getItem(key)
  } catch {
    return null
  }
}

function set(key: string, value: string) {
  try {
    window.sessionStorage.setItem(key, value)
  } catch {
    /* ignore */
  }
}

let unlockedInMemory = false

export const isUnlocked = () => unlockedInMemory || get(UNLOCKED) === '1'
export const markUnlocked = () => {
  unlockedInMemory = true
  set(UNLOCKED, '1')
}

export const readChapters = (): string[] => {
  try {
    return JSON.parse(get(READ) ?? '[]')
  } catch {
    return []
  }
}
export const markRead = (id: string) => {
  const read = readChapters()
  if (!read.includes(id)) set(READ, JSON.stringify([...read, id]))
}

export const savedScroll = (id: string) => Number(get(scrollKey(id)) ?? 0) || 0
export const saveScroll = (id: string, y: number) => set(scrollKey(id), String(Math.round(y)))

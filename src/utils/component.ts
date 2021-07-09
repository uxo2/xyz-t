import shortUuid from 'short-uuid'

export function newComponent(comp: string) {
  try {
    const newComp = JSON.parse(comp)

    newComp.id = shortUuid.generate()

    return JSON.stringify(newComp)

  } catch {
    throw new Error('drawing board ad component maybe some error.')
  }
}
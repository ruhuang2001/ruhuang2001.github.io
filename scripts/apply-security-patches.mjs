import { readFile, writeFile, readdir, realpath } from 'node:fs/promises'
import { join } from 'node:path'

const patches = JSON.parse(await readFile(new URL('./security-patches/patches.json', import.meta.url), 'utf8'))
const seen = new Set()
const applied = new Set()
async function inspect(directory) {
  let root
  try { root = await realpath(directory) } catch (error) { if (error.code === 'ENOENT') return; throw error }
  if (seen.has(root)) return
  seen.add(root)
  let pkg
  try { pkg = JSON.parse(await readFile(join(root, 'package.json'), 'utf8')) } catch (error) { if (error.code !== 'ENOENT') throw error }
  if (pkg) {
    for (const patch of patches.filter(p => p.package === pkg.name && p.version === pkg.version)) {
      const target = join(root, patch.path)
      let current = null
      try { current = await readFile(target, 'utf8') } catch (error) { if (error.code !== 'ENOENT') throw error }
      if (current !== patch.after) {
        if (current !== patch.before) throw new Error(`Security patch target changed: ${pkg.name}@${pkg.version}/${patch.path}`)
        await writeFile(target, patch.after)
      }
      applied.add(`${pkg.name}@${pkg.version}`)
    }
  }
  await scan(join(root, 'node_modules'))
}
async function scan(directory) {
  let entries
  try { entries = await readdir(directory, { withFileTypes: true }) } catch (error) { if (error.code === 'ENOENT') return; throw error }
  for (const entry of entries) {
    const target = join(directory, entry.name)
    if (entry.name === '.pnpm') {
      for (const item of await readdir(target, { withFileTypes: true })) {
        if (item.isDirectory()) await scan(join(target, item.name, 'node_modules'))
      }
    } else if (entry.name.startsWith('@')) {
      for (const item of await readdir(target)) await inspect(join(target, item))
    } else if (!entry.name.startsWith('.')) await inspect(target)
  }
}
const root = process.argv[2] || process.cwd()
await scan(join(root, 'node_modules'))
for (const name of ['braces@3.0.3']) {
  if (!applied.has(name)) throw new Error(`Expected security patch dependency missing: ${name}; review whether the patch can be retired`)
}
console.log(`Security mitigations verified: ${[...applied].join(', ')}`)

import { readdirSync, existsSync, writeFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const UI_DIR = resolve(__dirname, '../src/shared/ui');
const TIERS = ['atoms', 'molecules'] as const;

const lines: string[] = [
  '// 🔥 generate-barrel 스크립트로 자동 생성됨 — 수동 수정 금지',
  '',
];

for (const tier of TIERS) {
  const tierDir = join(UI_DIR, tier);
  if (!existsSync(tierDir)) continue;

  const components = readdirSync(tierDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .filter(d => existsSync(join(tierDir, d.name, 'index.tsx')))
    .map(d => d.name)
    .sort();

  if (components.length === 0) continue;

  lines.push(`// ${tier}`);
  for (const name of components) {
    lines.push(`export * from './${tier}/${name}';`);
  }
  lines.push('');
}

writeFileSync(join(UI_DIR, 'index.ts'), lines.join('\n'), 'utf-8');
console.log('✅ src/shared/ui/index.ts generated');

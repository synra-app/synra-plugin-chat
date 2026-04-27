# @synra-plugin/chat

Chat plugin for Synra, published as an external npm package.

## Features

- Multi-entry plugin structure under `src/ui`, `src/worker`, `src/shared`, `src/host`
- Built with `vp pack`
- UI pages emitted to `dist/ui/pages/**`
- Worker-focused runtime contract via `@synra/plugin-sdk`

## Development

```bash
vp install
vp run build
vp check
```

## Publishing

1. Bump version with SemVer (`patch` for fixes, `minor` for backward-compatible additions, `major` for breaking changes).
2. Run `vp check`.
3. Publish to npm:

```bash
npm publish --access public
```

## Compatibility

- Package naming follows `@synra-plugin/*`.
- Runtime metadata is exposed via `package.json#synra`.

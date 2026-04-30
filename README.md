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

## Runtime (Electron, Capacitor, peer-to-peer)

- **UI (`entries.ui`)** sends and receives chat frames via `@synra/plugin-sdk/hooks` (`useSynraPluginEnvelope`, `usePairedDevices`). **No Electron main process or `entries.host` is required** for messaging between paired peers on LAN/TCP.
- **`entries.host`** is optional: reserve it for desktop-only actions resolved by the shell (see Synra plugin runtime layers). Mobile-only deployments use UI + shared code paths.
- **`entries.worker`** exposes helpers only; the host decides how (or whether) to load workers on each platform (Phase 2 in the mobile plugin rollout plan).
- **`custom.chat.text`** is the logical event name for chat payloads (on the wire under `_plugin.chat.*`); keep it stable for compatibility with installed hosts.

## Asset Modules

<br />

`asset` is a new module type.  
Current Module types are `javascript/auto`, `javascript/esm`, `json`, and `webassembly`.

<br />

webpack@5 has raw-loader, file-loader, and url-loader as a native feature so unnecessary to install these loaders manually.

<br />

- `asset/resource` -> file-loader
- `asset/inline` -> url-loader
- `asset/source` -> raw-loader
- `asset` -> fallback option of url-loader

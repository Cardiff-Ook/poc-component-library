# document-details



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                              | Default     |
| ---------- | ---------- | ----------- | --------------------------------- | ----------- |
| `policies` | `policies` |             | `PolicyDataInterface[] \| string` | `undefined` |


## Dependencies

### Depends on

- [documents-tile](../../base-components/documents-tile)
- [sub-section-title](../../base-components/sub-section-title)

### Graph
```mermaid
graph TD;
  document-details --> documents-tile
  document-details --> sub-section-title
  documents-tile --> cover-details-container
  cover-details-container --> cover-details-tile
  cover-details-container --> sub-section-title
  cover-details-tile --> details-container
  style document-details fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*ACME documents Inc!*

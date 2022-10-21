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
  documents-tile --> policy-term-container
  documents-tile --> document-details-container
  document-details-container --> document-details-tile
  document-details-container --> sub-section-title
  document-details-tile --> documents-list
  style document-details fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*ACME documents Inc!*

# policy-details



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                                 | Default     |
| ---------- | ---------- | ----------- | ------------------------------------ | ----------- |
| `policies` | `policies` |             | `PolicyDetailsInterface[] \| string` | `undefined` |


## Dependencies

### Depends on

- [policy-tile](../../base-components/policy-tile)
- [sub-section-title](../../base-components/sub-section-title)

### Graph
```mermaid
graph TD;
  policy-details --> policy-tile
  policy-details --> sub-section-title
  policy-tile --> policy-subsection-header
  policy-tile --> tile-container
  policy-tile --> policy-management-tile
  policy-tile --> policy-term-container
  policy-tile --> cover-details-container
  cover-details-container --> cover-details-tile
  cover-details-container --> sub-section-title
  style policy-details fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*ACME documents Inc!*

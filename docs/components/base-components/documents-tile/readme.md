# documents-tile



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute     | Description | Type                  | Default     |
| --------------- | ------------- | ----------- | --------------------- | ----------- |
| `policydetails` | --            |             | `PolicyDataInterface` | `undefined` |
| `policyindex`   | `policyindex` |             | `number`              | `undefined` |


## Dependencies

### Used by

 - [document-details](../../page-layout/document-details)

### Depends on

- [policy-term-container](../../page-layout/policy-term-container)
- [cover-details-container](../../page-layout/cover-details-container)

### Graph
```mermaid
graph TD;
  documents-tile --> policy-term-container
  documents-tile --> cover-details-container
  cover-details-container --> cover-details-tile
  cover-details-container --> sub-section-title
  cover-details-tile --> details-container
  document-details --> documents-tile
  style documents-tile fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*ACME documents Inc!*

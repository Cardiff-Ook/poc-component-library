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
- [document-details-container](../../page-layout/document-details-container)

### Graph
```mermaid
graph TD;
  documents-tile --> policy-term-container
  documents-tile --> document-details-container
  document-details-container --> document-details-tile
  document-details-container --> sub-section-title
  document-details-tile --> documents-list
  document-details --> documents-tile
  style documents-tile fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*ACME documents Inc!*

# documents-tile



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute     | Description                                                      | Type                  | Default     |
| --------------- | ------------- | ---------------------------------------------------------------- | --------------------- | ----------- |
| `policydetails` | --            | Prop: policydetails: PolicyDataInterface Policy Data             | `PolicyDataInterface` | `undefined` |
| `policyindex`   | `policyindex` | Prop: policyindex: number Index number of the policy in the list | `number`              | `undefined` |


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
  documents-list --> documents-list-item
  document-details --> documents-tile
  style documents-tile fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*ACME documents Inc!*

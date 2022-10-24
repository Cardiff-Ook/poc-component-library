# document-details-tile



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute      | Description                                                     | Type                            | Default     |
| -------------- | -------------- | --------------------------------------------------------------- | ------------------------------- | ----------- |
| `coverdetails` | `coverdetails` | Prop: coverdetails: PolicyDataInterface Policy Data             | `PolicyDataInterface \| string` | `undefined` |
| `coverindex`   | `coverindex`   | Prop: coverindex: number Index number of the policy in the list | `number`                        | `undefined` |


## Dependencies

### Used by

 - [document-details-container](../../page-layout/document-details-container)

### Depends on

- [documents-list](../documents-list)

### Graph
```mermaid
graph TD;
  document-details-tile --> documents-list
  documents-list --> documents-list-item
  document-details-container --> document-details-tile
  style document-details-tile fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*ACME documents Inc!*

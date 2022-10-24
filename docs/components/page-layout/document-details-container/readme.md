# document-details-container



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute      | Description                                                                 | Type                              | Default     |
| -------------- | -------------- | --------------------------------------------------------------------------- | --------------------------------- | ----------- |
| `coverdetails` | `coverdetails` | Prop: coverdetails: Array<PolicyDataInterface> Array containing Policy Data | `PolicyDataInterface[] \| string` | `undefined` |


## Dependencies

### Used by

 - [documents-tile](../../base-components/documents-tile)

### Depends on

- [document-details-tile](../../base-components/document-details-tile)
- [sub-section-title](../../base-components/sub-section-title)

### Graph
```mermaid
graph TD;
  document-details-container --> document-details-tile
  document-details-container --> sub-section-title
  document-details-tile --> documents-list
  documents-list --> documents-list-item
  documents-tile --> document-details-container
  style document-details-container fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*ACME documents Inc!*

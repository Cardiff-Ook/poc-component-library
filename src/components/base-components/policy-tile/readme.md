# policy-tile



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute     | Description                                                      | Type                  | Default     |
| --------------- | ------------- | ---------------------------------------------------------------- | --------------------- | ----------- |
| `policydetails` | --            | Prop: policydetails: PolicyDataInterface Policy Data             | `PolicyDataInterface` | `undefined` |
| `policyindex`   | `policyindex` | Prop: policyindex: number Index number of the policy in the list | `number`              | `undefined` |


## Dependencies

### Used by

 - [policy-details](../../page-layout/policy-details/policy-details)

### Depends on

- [policy-subsection-header](../../page-layout/policy-details/policy-subsection-header)
- [tile-container](../../page-layout/tile-container)
- [policy-management-tile](../policy-management-tile)
- [policy-term-container](../../page-layout/policy-term-container)
- [cover-details-container](../../page-layout/cover-details-container)

### Graph
```mermaid
graph TD;
  policy-tile --> policy-subsection-header
  policy-tile --> tile-container
  policy-tile --> policy-management-tile
  policy-tile --> policy-term-container
  policy-tile --> cover-details-container
  cover-details-container --> cover-details-tile
  cover-details-container --> sub-section-title
  cover-details-tile --> details-container
  policy-details --> policy-tile
  style policy-tile fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*ACME documents Inc!*

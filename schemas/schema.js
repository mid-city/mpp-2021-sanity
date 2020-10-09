import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    {
      title: 'Manufacturers',
      name: 'Manufacturer',
      type: 'document',
      fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string',
        },
        {
          title: '2016 Purchases',
          name: 'purch_2016',
          type: 'string',
        },
        {
          title: '2017 Purchases',
          name: 'purch_2017',
          type: 'string',
        },
        {
          title: '2018 Purchases',
          name: 'purch_2018',
          type: 'string',
        },
        {
          title: '2019 Purchases',
          name: 'purch_2019',
          type: 'string',
        },
        {
          title: '2020 YTD Purchases',
          name: 'purch_2020_ytd',
          type: 'string',
        },
        {
          title: '2020 Projected Purchases',
          name: 'purch_2020_projected',
          type: 'string',
        },
      ],
    },
    {
      title: 'Reps',
      name: 'Rep',
      type: 'document',
      fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string',
        },
        {
          title: 'Amount Due',
          name: 'due',
          type: 'string',
        },
      ],
    },
  ]),
})

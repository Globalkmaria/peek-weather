export default {
  name: 'city',
  type: 'document',
  title: 'City',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'lon',
      title: 'Longitude',
      type: 'string',
    },
    {
      name: 'lat',
      title: 'Latitude',
      type: 'string',
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
    },
    {
      name: 'timezone',
      title: 'Timezone',
      type: 'string',
    },
    {
      name: 'priority',
      title: 'Priority',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}

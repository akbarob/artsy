export default {
  name: 'drops',
  title: 'Drops',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {
      name: 'status',
      title: 'Status',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
    },
    {
      name: 'creator',
      title: 'Creator',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
  ],
}

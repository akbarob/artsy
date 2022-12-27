export default {
  name: 'auction',
  title: 'Auction',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLenght: 90,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {name: 'time', title: 'Time', type: 'string'},
  ],
}

export default {
  name: 'marketplace',
  title: 'Marketplace',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
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
      name: 'price',
      title: 'Price',
      type: 'number',
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
    {
      name: 'listing',
      title: 'Listing',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
  ],
  orderings: [
    {
      title: 'price',
      name: 'Price',
      by: [{field: 'price', direction: 'asc'}],
    },
    {
      title: 'creator',
      name: 'Creator',
      by: [{field: 'creator', direction: 'asc'}],
    },
  ],
}

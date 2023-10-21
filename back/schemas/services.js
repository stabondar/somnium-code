import { defineField } from 'sanity'
import {MyCustomStringInput} from './MyCustomStringInput.tsx'

export default {
    name: 'services',
    type: 'document',
    title: 'Services',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'number',
        type: 'string',
        title: 'Order'
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      defineField( 
        {
        name: 'tag',
        type: 'array',
        title: 'Tags',
        of: 
        [
          {
            type: 'reference', 
            to: {type: 'services-tag'},
          }
        ],
        components: MyCustomStringInput,
        // to: [{type: 'categories'}]
      })
    ]
  }
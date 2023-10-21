import { defineField } from 'sanity'
import {MyCustomStringInput} from './MyCustomStringInput.tsx'

export default {
    name: 'work',
    type: 'document',
    title: 'Work',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Project Name'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title',
          maxLength: 96
        }
      },
      defineField( 
        {
        name: 'category',
        type: 'array',
        title: 'Categories',
        of: 
        [
          {
            type: 'reference', 
            to: {type: 'categories'},
          }
        ],
        components: MyCustomStringInput,
        // to: [{type: 'categories'}]
      }),
     
      {
        name: 'img1',
        type: 'image',
        title: 'Image 1'
      },
      {
        name: 'img2',
        type: 'image',
        title: 'Image 2'
      },
      {
        name: 'img3',
        type: 'image',
        title: 'Image 3'
      },
      {
        name: 'img4',
        type: 'image',
        title: 'Image 4'
      },
      {
        name: 'img5',
        type: 'image',
        title: 'Image 5'
      },
      {
        name: 'img6',
        type: 'image',
        title: 'Image 6'
      },
      {
        name: 'show4img',
        type: 'boolean',
        title: 'Show 4 Images'
      },
      {
        name: 'show5img',
        type: 'boolean',
        title: 'Show 5 Images'
      },
      {
        name: 'show6img',
        type: 'boolean',
        title: 'Show 6 Images'
      }
    ]
  }
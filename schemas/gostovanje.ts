import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'gostovanje',
  title: 'Gostovanje',
  type: 'document',
  fields: [
    defineField({
      name: 'naziv',
      title: 'Naziv',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      description: 'Nalepite pun YouTube link, npr. https://www.youtube.com/watch?v=ABC&t=120s',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'redosled',
      title: 'Redosled',
      type: 'number',
      description: 'Manji broj = prikazuje se prvi',
      validation: (Rule) => Rule.required().integer().positive(),
    }),
  ],
  preview: {
    select: {
      title: 'naziv',
      subtitle: 'redosled',
    },
    prepare({ title, subtitle }) {
      return { title, subtitle: `Redosled: ${subtitle}` }
    },
  },
})

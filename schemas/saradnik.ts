import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'saradnik',
  title: 'Saradnik',
  type: 'document',
  fields: [
    defineField({
      name: 'naziv',
      title: 'Naziv',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Link na sajt',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: false },
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
      media: 'logo',
      subtitle: 'redosled',
    },
    prepare({ title, media, subtitle }) {
      return { title, media, subtitle: `Redosled: ${subtitle}` }
    },
  },
})

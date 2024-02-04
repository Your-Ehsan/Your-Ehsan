import {defineField, defineType} from 'sanity'
import {MdSettings as icon, MdLink} from 'react-icons/md'

export default defineType({
  name: 'siteConfigs',
  title: 'Site configurations',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'Icon',
      title: 'favicon',
      type: 'image',
      options: {
        hotspot: false,
      },
    }),
    // defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'title',
    //     maxLength: 100,
    //   },
    // }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
    }),
    // defineField({
    //   name: 'releaseDate',
    //   title: 'Release date',
    //   type: 'datetime',
    // }),
    defineField({
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: 'Social Links',
      type: 'array',
      name: 'socialLinks',
      of: [
        {
          type: 'object',
          name: 'links',
          icon: MdLink,
          fields: [
            {type: 'url', name: 'link'},
            {type: 'image', name: 'icon'},
          ],
          preview: {
            select: {
              title: 'link',
              media: 'icon',
            },
            prepare(selection: {title: string; media: string}) {
              return {
                title: selection.title,
                media: selection.media,
              }
            },
          },
        },
      ],
      options: {
        type: 'dialog',
      },
    }),
    // defineField({
    //   name: 'externalId',
    //   title: 'External ID',
    //   type: 'number',
    // }),
    // defineField({
    //   name: 'popularity',
    //   title: 'Popularity',
    //   type: 'number',
    // }),
    // defineField({
    //   name: 'castMembers',
    //   title: 'Cast Members',
    //   type: 'array',
    //   of: [{type: 'castMember'}],
    // }),
    // defineField({
    //   name: 'crewMembers',
    //   title: 'Crew Members',
    //   type: 'array',
    //   of: [{type: 'crewMember'}],
    // }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'releaseDate',
      media: 'poster',
      castName0: 'castMembers.0.person.name',
      castName1: 'castMembers.1.person.name',
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('-')[0]
      const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')

      return {
        title: `${selection.title} ${year ? `(${year})` : ''}`,
        date: selection.date,
        subtitle: cast,
        media: selection.media,
      }
    },
  },
})

export const appSchema = {
  name: 'app',
  title: 'App',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'App Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'Auto URL — e.g. yono-rummy',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'App Logo',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Top Rated', value: 'top-rated' },
          { title: 'New Games', value: 'new-games' },
          { title: 'Other Games', value: 'other-games' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'bonus',
      title: 'Sign-Up Bonus (₹)',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'minWithdraw',
      title: 'Minimum Withdrawal (₹)',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'version',
      title: 'App Version',
      type: 'string',
    },
    {
      name: 'size',
      title: 'APK Size (MB)',
      type: 'string',
    },
    {
      name: 'downloadLink',
      title: 'Download / Website Link',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      initialValue: 4,
      validation: (Rule: any) => Rule.min(1).max(5),
    },
    {
      name: 'reviewCount',
      title: 'Review Count',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'perRefer',
      title: 'Reward per Refer (₹)',
      type: 'number',
    },
    {
      name: 'developerName',
      title: 'Package Name / Developer',
      type: 'string',
    },
    {
      name: 'metaTitle',
      title: 'SEO Meta Title',
      type: 'string',
      description: 'Leave blank to auto-generate',
    },
    {
      name: 'metaDescription',
      title: 'SEO Meta Description',
      type: 'text',
      rows: 3,
      description: 'Leave blank to auto-generate',
    },
    {
      name: 'appInformation',
      title: 'App Information (HTML allowed)',
      type: 'text',
      rows: 6,
    },
    {
      name: 'screenshots',
      title: 'Screenshots',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'image', title: 'Screenshot', type: 'image', options: { hotspot: true } },
            { name: 'altText', title: 'Alt Text', type: 'string' },
          ],
          preview: {
            select: { media: 'image', title: 'altText' },
          },
        },
      ],
    },
    {
      name: 'telegramLink',
      title: 'Telegram Channel Link',
      type: 'url',
    },
    {
      name: 'isFeatured',
      title: 'Featured App?',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'category', media: 'logo' },
    prepare({ title, subtitle, media }: any) {
      const cats: Record<string, string> = {
        'top-rated': '⭐ Top Rated',
        'new-games': '🆕 New',
        'other-games': '🎮 Other',
      };
      return { title, subtitle: cats[subtitle] || subtitle, media };
    },
  },
};

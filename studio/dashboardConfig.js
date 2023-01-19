export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog',
      },
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61b0c5a3c98f3031f281ab6b',
                  title: 'Sanity Studio',
                  name: 'oo-site-studio',
                  apiId: '4dff324f-689a-45fa-bb53-28cbb05fdec3',
                },
                {
                  buildHookId: '61b0c5a31f63032daf991806',
                  title: 'Blog Website',
                  name: 'oo-site',
                  apiId: '80f9515a-2ee9-4d59-afe5-38e53dad5965',
                },
              ],
            },
          },
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mipodi/oo-site',
            category: 'Code',
          },
          { title: 'Frontend', value: 'https://oo-site.netlify.app', category: 'apps' },
        ],
      },
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' },
    },
  ],
}

export default [
  // Courses
  {
    method: 'GET',
    path: '/courses',
    handler: 'course.find',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/courses/:id',
    handler: 'course.findOne',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/courses',
    handler: 'course.create',
    config: {
      policies: [],
    },
  },
  {
    method: 'PUT',
    path: '/courses/:id',
    handler: 'course.update',
    config: {
      policies: [],
    },
  },
  {
    method: 'DELETE',
    path: '/courses/:id',
    handler: 'course.delete',
    config: {
      policies: [],
    },
  },
  // Lessons
  {
    method: 'GET',
    path: '/lessons',
    handler: 'lesson.find',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/lessons/:id',
    handler: 'lesson.findOne',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/lessons',
    handler: 'lesson.create',
    config: {
      policies: [],
    },
  },
  {
    method: 'PUT',
    path: '/lessons/:id',
    handler: 'lesson.update',
    config: {
      policies: [],
    },
  },
  {
    method: 'DELETE',
    path: '/lessons/:id',
    handler: 'lesson.delete',
    config: {
      policies: [],
    },
  },
  // Comments
  {
    method: 'GET',
    path: '/comments',
    handler: 'comment.find',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/comments/:id',
    handler: 'comment.findOne',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/comments',
    handler: 'comment.create',
    config: {
      policies: [],
      middlewares: ['plugin::strapi-plugin-lms.set-comment-owner'],
    },
  },
  {
    method: 'PUT',
    path: '/comments/:id',
    handler: 'comment.update',
    config: {
      policies: [],
      middlewares: ['plugin::strapi-plugin-lms.is-comment-owner'],
    },
  },
  {
    method: 'DELETE',
    path: '/comments/:id',
    handler: 'comment.delete',
    config: {
      policies: [],
      middlewares: ['plugin::strapi-plugin-lms.is-comment-owner'],
    },
  },
];

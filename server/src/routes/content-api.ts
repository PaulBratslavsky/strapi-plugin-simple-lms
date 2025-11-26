export default [
  // Courses
  {
    method: 'GET',
    path: '/courses',
    handler: 'lms-course.find',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/courses/slug/:slug',
    handler: 'lms-course.findBySlug',
    config: {
      policies: [],
    },
  },
  // Lessons
  {
    method: 'GET',
    path: '/lessons',
    handler: 'lms-lesson.find',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/lessons/slug/:slug',
    handler: 'lms-lesson.findBySlug',
    config: {
      policies: [],
    },
  },
  // Comments
  
  {
    method: 'GET',
    path: '/comments/get-comments',
    handler: 'lms-comment.getComments',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/comments/create-comment',
    handler: 'lms-comment.createComment',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/comments/create-question',
    handler: 'lms-comment.createQuestion',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/comments/create-answer',
    handler: 'lms-comment.createAnswer',
    config: {
      policies: [],
    },
  },
  {
    method: 'PUT',
    path: '/comments/:id',
    handler: 'lms-comment.update',
    config: {
      policies: [],
      middlewares: ['plugin::strapi-plugin-lms.is-comment-owner'],
    },
  },
  {
    method: 'DELETE',
    path: '/comments/:id',
    handler: 'lms-comment.delete',
    config: {
      policies: [],
      middlewares: ['plugin::strapi-plugin-lms.is-comment-owner'],
    },
  },
];

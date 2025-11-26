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
    path: '/courses/:id',
    handler: 'lms-course.findOne',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/courses',
    handler: 'lms-course.create',
    config: {
      policies: [],
    },
  },
  {
    method: 'PUT',
    path: '/courses/:id',
    handler: 'lms-course.update',
    config: {
      policies: [],
    },
  },
  {
    method: 'DELETE',
    path: '/courses/:id',
    handler: 'lms-course.delete',
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
    path: '/lessons/:id',
    handler: 'lms-lesson.findOne',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/lessons',
    handler: 'lms-lesson.create',
    config: {
      policies: [],
    },
  },
  {
    method: 'PUT',
    path: '/lessons/:id',
    handler: 'lms-lesson.update',
    config: {
      policies: [],
    },
  },
  {
    method: 'DELETE',
    path: '/lessons/:id',
    handler: 'lms-lesson.delete',
    config: {
      policies: [],
    },
  },
  // Comments
  {
    method: 'GET',
    path: '/comments',
    handler: 'lms-comment.find',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/comments/:id',
    handler: 'lms-comment.findOne',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/comments',
    handler: 'lms-comment.create',
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
    },
  },
  {
    method: 'DELETE',
    path: '/comments/:id',
    handler: 'lms-comment.delete',
    config: {
      policies: [],
    },
  },
];

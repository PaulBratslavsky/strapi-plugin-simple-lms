import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'plugin::strapi-plugin-lms.lms-comment',
  ({ strapi }) => ({
    // Create a comment with type 'comment'
    async createComment(ctx) {
      const user = ctx.state.user;

      if (!user) {
        return ctx.unauthorized('You must be logged in to comment');
      }

      const { data } = ctx.request.body;

      const entity = await strapi.documents('plugin::strapi-plugin-lms.lms-comment').create({
        data: {
          ...data,
          type: 'comment',
          user: {
            connect: [{ documentId: user.documentId }],
          },
        },
        populate: {
          user: {
            fields: ['username'],
          },
        },
      });

      return { data: entity };
    },

    // Create a comment with type 'question'
    async createQuestion(ctx) {
      const user = ctx.state.user;

      if (!user) {
        return ctx.unauthorized('You must be logged in to ask a question');
      }

      const { data } = ctx.request.body;

      const entity = await strapi.documents('plugin::strapi-plugin-lms.lms-comment').create({
        data: {
          ...data,
          type: 'question',
          user: {
            connect: [{ documentId: user.documentId }],
          },
        },
        populate: {
          user: {
            fields: ['username'],
          },
        },
      });

      return { data: entity };
    },

    // Create a comment with type 'answer'
    async createAnswer(ctx) {
      const user = ctx.state.user;

      if (!user) {
        return ctx.unauthorized('You must be logged in to answer');
      }

      const { data } = ctx.request.body;

      const entity = await strapi.documents('plugin::strapi-plugin-lms.lms-comment').create({
        data: {
          ...data,
          type: 'answer',
          user: {
            connect: [{ documentId: user.documentId }],
          },
        },
        populate: {
          user: {
            fields: ['username'],
          },
        },
      });

      return { data: entity };
    },

    // Custom method: Find comments with user username populated
    async getComments(ctx) {
      const { query } = ctx;

      // Build the query params directly from ctx.query to preserve relation filters
      const queryParams = {
        filters: query.filters || {},
        sort: query.sort || [],
        populate: {
          user: {
            fields: ['username'],
          },
        },
        pagination: query.pagination || { page: 1, pageSize: 25 },
      };

      // Use the service layer to get entities with pagination
      const { results, pagination } = await strapi
        .service('plugin::strapi-plugin-lms.lms-comment')
        .find(queryParams);

      // Sanitize to only include username from user
      const sanitizedEntities = results.map((entity: any) => ({
        ...entity,
        user: entity.user
          ? {
              id: entity.user.id,
              documentId: entity.user.documentId,
              username: entity.user.username,
            }
          : null,
      }));

      return {
        data: sanitizedEntities,
        meta: { pagination },
      };
    },
  })
);

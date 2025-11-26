/**
 * Middleware to check if the authenticated user is the owner of the comment
 * Used for update and delete operations
 */

import type { Core } from '@strapi/strapi';

export default (_config: any, { strapi }: { strapi: Core.Strapi }) => {
  return async (ctx: any, next: any) => {
    const user = ctx.state.user;

    // Check if user is authenticated
    if (!user) {
      return ctx.unauthorized('You must be logged in to perform this action');
    }

    // Get the comment ID from the request params
    const { id } = ctx.params;

    if (!id) {
      return ctx.badRequest('Comment ID is required');
    }

    // Fetch the comment with its user relation
    const comment = await strapi.documents('plugin::strapi-plugin-lms.lms-comment').findOne({
      documentId: id,
      populate: ['user'],
    });

    if (!comment) {
      return ctx.notFound('Comment not found');
    }

    // Check if the authenticated user is the owner of the comment
    if (!comment.user || comment.user.documentId !== user.documentId) {
      return ctx.forbidden('You are not allowed to perform this action on this comment');
    }

    await next();
  };
};
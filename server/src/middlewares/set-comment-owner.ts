/**
 * Middleware to automatically set the user relation on comment creation
 * Sets the authenticated user as the comment owner
 */

export default () => {
  return async (ctx: any, next: any) => {
    const user = ctx.state.user;

    // Check if user is authenticated
    if (!user) {
      return ctx.unauthorized('You must be logged in to create a comment');
    }

    const body = ctx.request.body;

    if (!body || !body.data) {
      return ctx.badRequest('Request body is required');
    }

    // Set the user relation using connect for oneToOne relations
    body.data.user = {
      connect: [{ documentId: user.documentId }],
    };

    await next();
  };
};
'use strict';

/**
 * `landing-page-populate` middleware
 */

const populate={
  metadata:{
  populate:{
  image:{
  populate:true,
  fields:["url"]
  }
  }
  },
  blocks:{
  populate:{
  link:{
  populate:true,
  },
  image:{
  fields:["name","url"],
  }
  }
  }
}
module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In landing-page-populate middleware.');
    ctx.query={
      populate,
      ...ctx.query,
    }
    await next();
  };
};

    // ~/strapi-aws-s3/backend/config/middlewares.js
    
    module.exports = [
      'strapi::errors',
      {
        name: 'strapi::security',
        config: {
          contentSecurityPolicy: {
            useDefaults: true,
            directives: {
              'connect-src': ["'self'", 'https:'],
              'img-src': [
                "'self'",
                'data:',
                'blob:',
                'code-specialist-blog.s3.eu-central-1.amazonaws.com',
              ],
              'media-src': [
                "'self'",
                'data:',
                'blob:',
                'code-specialist-blog.s3.eu-central-1.amazonaws.com',
              ],
              upgradeInsecureRequests: null,
            },
          },
        },
      },
      'strapi::cors',
      'strapi::poweredBy',
      'strapi::logger',
      'strapi::query',
      'strapi::body',
      'strapi::session',
      'strapi::favicon',
      'strapi::public',
    ];
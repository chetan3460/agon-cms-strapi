module.exports = () => ({
    "strapi-plugin-populate-deep": {
        config: {
            defaultDepth: 3,
            maxDepth: 10,
        },
    },
    seo: {
        enabled: true,
    },

    navigation: {
        enabled: true,
        config: {
            allowedContentTypes: ['api::sitemap.sitemap'], // Allow linking to the Sitemap collection type
        },
    },
    upload: {
        // Update your cloudinary credentials here
        config: {
            provider: "cloudinary",
            providerOptions: {
                cloud_name: "dipjj6azr",
                api_key: "553969573594997",
                api_secret: "IcuzLpetdqW0qooidsaf6Z2T-k8",
            },
            actionOptions: {
                upload: {
                    folder: "strapi-uploads",
                    use_filename: true,
                    unique_filename: false,
                    resource_type: "auto",
                },
                delete: {
                    invalidate: true,
                },
            },
        },
    },
    // CORS settings
    'strapi::cors': {
        enabled: true,
        origin: ['http://localhost:3000', 'https://agon-cms-strapi.onrender.com'],
    },

});

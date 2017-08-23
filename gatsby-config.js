module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
  	`gatsby-plugin-react-helmet`,
  	`gatsby-plugin-sass`,
  	{
	    resolve: `gatsby-plugin-google-analytics`,
	    options: {
	      trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
	    },
  	},
  	{
	    resolve: `gatsby-transformer-remark`,
	    options: {
	      plugins: [
	        {
	          resolve: `gatsby-remark-images`,
	          options: {
	            // It's important to specify the maxWidth (in pixels) of
	            // the content container as this plugin uses this as the
	            // base for generating different widths of each image.
	            maxWidth: 1000,
	            // Remove the default behavior of adding a link to each
	            // image.
	            linkImagesToOriginal: false,
	          },
	        },
	      ]
	    }
  	},
  ],
}

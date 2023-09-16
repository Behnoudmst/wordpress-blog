# wordpress-blog
wordpress blog with nextjs.
This is a fully functional front end for wordpress websites with a sqlite data base for comments and user authentication with facebook and google.


To use this template add the following environment variables to the root of your project in a .env file:

<!-- I used sqlite database this is the path to the data base file -->

DATABASE_URL="file:./database.db" 

<!-- api endpoint of wordpress -->

WEBSITEURL="The link to your wordpress backend" 

<!-- website url  -->

NEXTAUTH_URL=your_websote_domain

NEXTAUTH_SECRET=Generate_a_secrete_key

<!-- provider details for next auth -->

GOOGLE_ID=

GOOGLE_SECRET=

FACEBOOK_CLIENT_ID=

FACEBOOK_CLIENT_SECRET=

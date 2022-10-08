# wordpress-blog
wordpress blog with nextjs.
This is a fully functional front end for wordpress websites with a sqlite and user authentication with facebook and google for comments.
It has comment functionality with a sqlite database and user authentication with google and facebook.


To use this template add the following environment variables to the root of your project:

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

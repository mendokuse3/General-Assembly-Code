
# Build a Blog API with NodeJS and Strapi

First we want to make a directory in our root called projects

Then we ant to cd into projects and make a directory called webpack-blog-app and cd into it

then we want to make our API with a cool tool called STRAPI which does alot of the same things Rails does just better and for NodeJs

yarn create strapi-app my-project --quickstart


We will end up on an admin screen after this is done

create your admin account


Now lets create a Blog Content type


Navigate to PLUGINS - Content Type Builder, in the left-hand menu.

Click the "+ Create New Content Type" link
Enter blog, and click Done
A window opens with fields options:
Select the type as TEXT
Type title in the Name field
Click over to the ADVANCED SETTINGS tab, and check the Required field and the Unique field
Click the "+ Add New Field" button
Click the Rich Text field
Type description under the BASE SETTINGS tab, in the Name field
Click Done
Click the Save button and wait for Strapi to restart

After I'm done I will have a text field for title
A Rich text field for content
A date for date
and A text field for Author with your name as the default value

Then we will repeat this with a Category Content type that only has a name thats required and unique and a relation to blog posts that is many to many

Navigate to CONTENT TYPES - Blog, in the left-hand menu.

Click on + Add New Blog button. Type Hello World in the title field. Type anything you want into the content field you'll see that this actually set up to accept markdown
Click Save.
You will see your blog listed in the entries.


Click on + Add New Category button. Add a Category and click save


Click the Public Role.
Scroll down under Permissions, find Blog. Click the checkbox next to find and findone.
Repeat and find Category. Click the checkbox next to find and findone.
Click Save.

Localhost:1337/blogs

So we now have created the api for our blog


No we need to create our React App that will consume the data






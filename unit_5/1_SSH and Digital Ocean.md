# SSH The EASY WAY 1hr
- When you get tired of always entering your github password, you can use the ssh URL (as opposed to the https URL) when cloning a repo
- You'll need to also add what's called an ssh key to github https://help.github.com/articles/generating-an-ssh-key/
- Now you can use the ssh url when cloning instead of https
- We can now also use this SSH KEY to securely log in to Digital Ocean Droplets

# Digital Ocean SetUp 45min
- Creating an Account
- Making a Droplet
- Adding SSH Keys
- Installing node, yarn , ranger, vim, neovim, nginx and git

## Go to to digitalocean.com using this link [__get $100 free__](https://try.digitalocean.com/frontend-masters/) 
  1. Go through the signup process you will have to enter a credit card but you won't be charged until your 100$ credit is used up which is 20 months of developer access
  2. After you set that up we are going to create a droplet
  3. We want to select the cheapest version of everything and select the data center that is closest to you
  
  ### Click Droplets in the left hand side of the screen
  
  ![screenshot from 2020-02-03 19-53-11](https://media.git.generalassemb.ly/user/15881/files/40ea0d80-46bf-11ea-91e1-2ebf43a3b72a)
  
  ### Select Ubuntu as your server and the standard plan

![screenshot from 2020-02-03 19-53-31](https://media.git.generalassemb.ly/user/15881/files/3d568680-46bf-11ea-9ad5-90263c03e32b)

### Select the 5$ per month because that is all we need

![screenshot from 2020-02-03 19-54-09](https://media.git.generalassemb.ly/user/15881/files/39c2ff80-46bf-11ea-876e-7c551bd932b5)

### Choose the datacenter nearest to you and select ssh keys for how we will login and name your server

![screenshot from 2020-02-03 19-54-30](https://media.git.generalassemb.ly/user/15881/files/36c80f00-46bf-11ea-856b-b865c044bfe9)

# Now lets login to our very own cloud server
  - Locate your ip by clicking the name of your project in the left hand side of the screen 

```bash
$ ssh root@YOUR_IP
```

### Congrats we are in lets have an install fest with all the essential software

```bash
$ sudo apt-get update
$ apt-get update -qq && apt-get install -y build-essential
$ apt-get install -y libpq-dev
$ apt-get install -y libxml2-dev libxslt1-dev
$ apt-get install -y libqt4-webkit libqt4-dev xvfb
$ apt-get install -y nodejs vi vim ranger


```

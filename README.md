# Vagrant - Dev Environment Boiler Plate

This boiler-plate sets up a basic development environment using Virtual Box and Vagrant

## Prerequisites

* GitHub account
* Vagrant
* Virtual box
* Vagrant Hosts Updater

#### Vagrant Installation

To install Vagrant go to - https://www.vagrantup.com/downloads.html. Choose your relevant OS and install.

<!-- Once you have done this we are also going to install a vagrant package which will allow us update the Hosts list via a vagrant file. Run the following command to install `vagrant-hostsupdater`:-

```bash
vagrant plugin install vagrant-hostsupdater
``` -->

#### VirtualBox Installation

To install VirtualBox go to - https://www.virtualbox.org/ and hit download.

## Running Dev Machine

```bash
# Clone this repo
git clone https://github.com/richgurney/UbuntuDevEnvironment.git

# Provision the box
vagrant up

# Log onto the box
vagrant ssh
```
These commands below will set the Ubuntu machine up using the Vagrant file located in the repo. After a successful log in you should be able to see the guest terminal:-

```
Welcome to Ubuntu 16.04.3 LTS (GNU/Linux 4.4.0-93-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  Get cloud support with Ubuntu Advantage Cloud Guest:
    http://www.ubuntu.com/business/services/cloud

113 packages can be updated.
54 updates are security updates.


Last login: Mon Jan 29 14:40:13 2018 from 10.0.2.2
ubuntu@ubuntu-xenial:~$```


#### Installing NGINX

This is now provisioned to be installed in the Vagrant File

<!-- Once you can see your command prompt for the Guest machine. We need to update the list of packages and install NGINX.

```bash
# Update packages
sudo apt-get update -y

# install NGINX
sudo apt-get install nginx -y
``` -->

#### Checking the environment is setup correct

You should now be able to go to `http://dev.local` and see the welcome screen for NGINX.

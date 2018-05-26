---
layout: post
title: Setup TeamTalk 5 on a Debian server
tags: debian, teamtalk, cc by-nc-sa
---

Download TeamTalk:

```
wget http://bearware.dk/teamtalk/v5.0/teamtalk-v5.0-debian7-x86_64.tgz
```

Extract package:

```
tar -xvzf teamtalk-v5.0-debian7-x86_64.tgz
```

Add file sharing folder:

```
sudo mkdir -p /home/tt/tt5/files
```

Copy server binary:

```
sudo cp teamtalk-v5.0-debian7-x86_64/server/tt5srv /home/tt/tt5/
```

Copy server daemon script:

```
sudo cp teamtalk-v5.0-debian7-x86_64/server/daemon-script/tt5server /etc/init.d/
```

Fix server daemon script:

```
sudo sed -i ’s/teamtalk5/tt5server/’ /etc/init.d/tt5server
```

Register server daemon script:

```
sudo update-rc.d tt5server defaults
```

Add user “tt”:

```
sudo adduser –disabled-login tt
```

Fix permissions:

```
sudo chown -cR tt:tt /home/tt
```

Run setup wizard:

```
sudo su -c “/home/tt/tt5/tt5server -wizard” tt
```

When asked for file sharing folder, use “/home/tt/tt5/files”.

You need to create at least one user with admin rights!

And it is suggested to create an anonymous user.

Finally, start the server:

```
sudo service tt5server start
```

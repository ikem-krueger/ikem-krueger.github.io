---
layout: post
title: Here comes the title
tags: tag
---

## Register on GitLab

Register on [GitLab](https://gitlab.xfce.org/).


## Add an SSH key in GitLab
 
Click on Settings on the top right drop-down, which will appear once you select the icon.

Click on SSH Keys:  
![](https://i.stack.imgur.com/q2QuV.png)

### Generate the ssh key
 
1.	Open a terminal on Linux or macOS, or Git Bash / WSL on Windows.  
2.	Generate a new ED25519 SSH key pair:

        ssh-keygen -t ed25519 -C "Name Surname <email@example.com>"

    It will generate the key in:

  	 - Linux: `/home/user/.ssh`
    - macOS: `/Users/name/.ssh`
    - Windows: `C:\Users\name\.ssh`

4. Copy the public key to the clipboard:

  	 - Linux: `xclip -sel clip < ~/.ssh/id_ed25519.pub`
    - macOS: `pbcopy < ~/.ssh/id_ed25519.pub`
    - Windows: `type %userprofile%\.ssh\id_ed25519.pub | clip`

5. Paste in the GitLab location: 

    ![enter image description here](https://i.stack.imgur.com/MDE0W.png)

## Register on Element

Register on [Element](https://app.element.io/#/register).

## Join Matrix channel and ask for permissions

Join [Matrix channel #xfce-dev](https://matrix.to/#/#xfce-dev:matrix.org)

On the "Element" tile click on "Continue":

![](https://raw.githubusercontent.com/ikem-krueger/ikem-krueger.github.io/master/_drafts/2024-02-27-here-comes-the-title/Screenshot%202024-02-27%20at%2015-56-44%20You're%20invited%20to%20talk%20on%20Matrix.png)

When you've joined the chat, write something like:

"I want to contribute and need to be able to create forks and make merge requests."

## Links

 - [How do I add an SSH key in gitlab - Stack Overflow](https://stackoverflow.com/questions/35901982/how-do-i-add-an-ssh-key-in-gitlab/58561659#58561659)
 - [How do I add an SSH key in gitlab - Stack Overflow](https://stackoverflow.com/questions/35901982/how-do-i-add-an-ssh-key-in-gitlab/54361066#54361066)
 - [Xfce Development Information](https://docs.xfce.org/contribute/dev/start)
 - [The Ultimate Contributor's Guide to Xfce](https://andreldm.com/2018/12/03/xfce-contributor-guide.html)
 - [xfce4-dev-tools](https://docs.xfce.org/xfce/xfce4-dev-tools/start)
 - [Using Git within the Xfce development workflow](https://docs.xfce.org/contribute/dev/git/start)

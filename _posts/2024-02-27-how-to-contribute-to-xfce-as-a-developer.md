---
layout: post
title: How to contribute to XFCE as a developer
tags: tag
---

## Register on GitLab

Register on [XFCE's GitLab](https://gitlab.xfce.org/).

## Add an SSH key in GitLab
 
On the top right drop-down click on Settings.

On the left sidebar click on SSH Keys:  

![](https://raw.githubusercontent.com/ikem-krueger/ikem-krueger.github.io/master/_posts/2024-02-27-how-to-contribute-to-xfce-as-a-developer/q2QuV.png)

### Generate the SSH key
 
1.	Open a terminal on Linux or macOS, or Git Bash / WSL on Windows.  
2.	Generate a new ED25519 SSH key pair:

```
ssh-keygen -t ed25519 -C "Name Surname <email@example.com>"
```

It will generate the key in:

 - Linux: `/home/user/.ssh`
 - macOS: `/Users/name/.ssh`
 - Windows: `C:\Users\name\.ssh`

4. Copy the public key to the clipboard:

 - Linux: `xclip -sel clip < ~/.ssh/id_ed25519.pub`
 - macOS: `pbcopy < ~/.ssh/id_ed25519.pub`
 - Windows: `type %USERPROFILE%\.ssh\id_ed25519.pub | clip`

5. In GitLab paste the key in this location: 

![](https://raw.githubusercontent.com/ikem-krueger/ikem-krueger.github.io/master/_posts/2024-02-27-how-to-contribute-to-xfce-as-a-developer/MDE0W.png)

Give them a title and click on "Add key".

## Register on Element

Register on [Element](https://app.element.io/#/register).

## Join Matrix channel and ask for permissions

Join the Matrix channel [#xfce-dev](https://matrix.to/#/#xfce-dev:matrix.org).

On the tile "Element" click on the button "Continue":

![](https://raw.githubusercontent.com/ikem-krueger/ikem-krueger.github.io/master/_posts/2024-02-27-how-to-contribute-to-xfce-as-a-developer/Matrix.png)

When you've joined the chat, write something like:

"I want to contribute and want to be able to create forks and make merge requests."

Wait for a response. When you've got the permissions...

## Make changes

The workflow is roughly as follows:

1. Go to GitLab and fork a repo
2. Clone the repo to your local machine
3. Push your changes to GitLab
4. Go to GitLab and the repo and make a merge request

## Links

 - [How do I add an SSH key in gitlab - Stack Overflow](https://stackoverflow.com/questions/35901982/how-do-i-add-an-ssh-key-in-gitlab/58561659#58561659)
 - [How do I add an SSH key in gitlab - Stack Overflow](https://stackoverflow.com/questions/35901982/how-do-i-add-an-ssh-key-in-gitlab/54361066#54361066)
 - [Xfce Development Information](https://docs.xfce.org/contribute/dev/start)
 - [The Ultimate Contributor's Guide to Xfce](https://andreldm.com/2018/12/03/xfce-contributor-guide.html)
 - [xfce4-dev-tools](https://docs.xfce.org/xfce/xfce4-dev-tools/start)
 - [Using Git within the Xfce development workflow](https://docs.xfce.org/contribute/dev/git/start)

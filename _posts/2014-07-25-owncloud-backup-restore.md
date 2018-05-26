---
layout: post
title: Owncloud backup restore
tags: owncloud, cc by-nc-sa
---

Install owncloud:

```
apt-get install owncloud
```

Run the setup wizard.

Remove config and data folder:

```
rm -fR /var/www/owncloud/{config,data}
```

Copy config and data folder:

```
cp -aR /var/www/owncloud-dirbkp/{config,data} /var/www/owncloud
```

Export sqlite database:

```
sqlite3 /var/www/owncloud-dirbkp/owncloud.db .dump>/var/www/owncloud/owncloud-sqlbkp.bak
```
Import sqlite database:

```
sqlite3 /var/www/owncloud/owncloud.db .dump</var/www/owncloud/owncloud-sqlbkp.bak
```

---
layout: post
title: Building Caddy with Netcup module on the Raspberry Pi 4
tags: raspberry pi, caddy
---

```
sudo apt install golang-1.21-go
echo 'export PATH=$PATH:/usr/lib/go-1.21/bin' >> ~/.bashrc
bash
xcaddy build --with github.com/caddy-dns/netcup@a811da94403509715bd149669b07544706fd6d46
sudo mv /usr/bin/caddy /usr/bin/caddy.old
sudo cp ~/caddy /usr/bin
sudo nano /etc/caddy/Caddyfile
sudo HOME=/var/lib/caddy caddy trust
sudo systemctl restart caddy
```

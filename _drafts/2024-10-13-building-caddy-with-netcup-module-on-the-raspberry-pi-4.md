---
layout: post
title: Building Caddy with Netcup module on the Raspberry Pi 4
tags: raspberry pi, caddy
---

```
sudo apt install golang-1.21-go
echo 'export PATH=$PATH:$HOME/go/bin:/usr/lib/go-1.21/bin' >> ~/.bashrc
bash
go install github.com/caddyserver/xcaddy/cmd/xcaddy@latest
xcaddy build --with github.com/caddy-dns/netcup@a811da94403509715bd149669b07544706fd6d46
sudo mv /usr/bin/caddy /usr/bin/caddy.old
sudo cp ~/caddy /usr/bin
sudo nano /etc/caddy/Caddyfile
sudo HOME=/var/lib/caddy caddy trust
sudo systemctl restart caddy
```

Sources:

- [Error during parsing_ getting module named 'dns.providers.cloudflare'_ module not registered_ dns.providers.cloudflare, import chain_ [''] - Help - Caddy Community](https://caddy.community/t/error-during-parsing-getting-module-named-dns-providers-cloudflare-module-not-registered-dns-providers-cloudflare-import-chain/20863/3)
- [Build failed · Issue #7 · caddy-dns_netcup](https://github.com/caddy-dns/netcup/issues/7#issuecomment-2169575408)
- [Caddy fails to install root certificate on linux when using caddy.service · Issue #4248 · caddyserver_caddy](https://github.com/caddyserver/caddy/issues/4248#issuecomment-882895673)

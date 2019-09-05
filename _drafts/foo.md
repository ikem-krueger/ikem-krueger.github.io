Fritzbox 6590 Cable mit alternativen DNS Server

Cloudflare DNS

https://1.1.1.1/dns/

Replace those addresses with the 1.1.1.1 DNS addresses:
For IPv4: 1.1.1.1 and 1.0.0.1
For IPv6: 2606:4700:4700::1111 and 2606:4700:4700::1001

Öffne die `config.export` mit einem Texteditor.

Und ändere `lan_dns4_server = 0.0.0.0;` zu `lan_dns4_server = 1.1.1.1;` und `lan_dns6_server = ::;` zu `lan_dns6_server = 2606:4700:4700::1111;`.


```
fritzchecksum -c config.export
```

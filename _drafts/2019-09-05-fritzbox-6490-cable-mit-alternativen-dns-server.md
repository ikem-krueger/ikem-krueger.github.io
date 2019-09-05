---
layout: post
title: Fritzbox 6490 Cable mit alternativen DNS Server
tags: mac os x, fritzbox, dns, kabel deutschland, vodafone
---

Die Kabel Deutschland/Vodafone DNS Server haben teilweise massive Probleme Namen in IP-Adressen aufzulösen.

Dadurch brauchen manche Seiten sehr lange bis sie geladen sind. Und das trotz schneller Leitung!

Also was tun? DNS Server wechseln!

Eigentlich lässt sich der DNS Server sehr leicht in der Fritz!Box Oberfläche ändern:

-Bild-

Nicht so bei der Fritz!Box von Kabel Deutschland/Vodafone. Da gibt es dieses Menü nicht. 

Aber es gibt trotzdem einen Weg das zu ändern. Über das exportieren/editieren/importieren der Einstellungen.

# Exportieren

-Todo-

# Editieren

Laut eigener Aussage bietet [Cloudflare](https://1.1.1.1/dns/) den schnellsten und sichersten DNS Dienst an. Deswegen nutze ich den.

Die Cloudflare Adressen für die DNS Server sind:

* für IPv4: 1.1.1.1 und 1.0.0.1
* für IPv6: 2606:4700:4700::1111 und 2606:4700:4700::1001

Um Cloudflare als DNS Server zu benutzen, musst du die exportierte Konfigurationsdatei mit einem Texteditor bearbeiten.

Dann änderst du `lan_dns4_server = 0.0.0.0;` zu `lan_dns4_server = 1.1.1.1;`.

Und `lan_dns6_server = ::;` zu `lan_dns6_server = 2606:4700:4700::1111;`.

## Prüfsumme reparieren

In der Konfigurationsdatei gibt es eine Prüfsumme. Die muss repariert werden, bevor die Konfigurationsdatei importiert werden kann.

Dafür braucht man das Tool "[fritzchecksum](https://github.com/mementum/fritzchecksum)". Das muss man installieren.

### Fritzchecksum installieren

#### Mac OS X

Pip installieren:

```
sudo easy_install pip
```

Fritzchecksum installieren:

```
sudo pip install fritzchecksum
```

#### Linux

Fritzchecksum installieren:

```
sudo pip install fritzchecksum
```

Die Prüfsumme repariert man dann mit:

```
fritzchecksum -c "FRITZ.Box 6490 Cable (kdg) 141.07.01_04.09.19_2255.export"
```

# Importieren

-Todo-

Die Fritz!Box lädt jetzt die Konfigurationsdatei, und startet danach neu.

Nachdem Neustart werden die neuen DNS Server benutzt.

---
layout: post
title: Fritzbox 6490 Cable mit alternativen DNS Server
tags: mac os x, fritzbox, dns, kabel deutschland, vodafone
---

Die Kabel Deutschland/Vodafone DNS Server haben teilweise massive Probleme Namen in IP-Adressen aufzulösen.

Dadurch brauchen manche Seiten sehr lange bis sie geladen sind. Und das trotz schneller Leitung!

Also was tun? DNS Server wechseln!

Eigentlich lässt sich der DNS Server sehr leicht in der Fritz!Box Oberfläche ändern:

* In der [Fritz!Box Oberfläche](http://192.168.178.1/) anmelden
* In der Seitenleiste auf "Internet", "Zugangsdaten"
* Dann auf den Reiter "DNS Server"

![Fritz!Box > Internet > Zugangsdaten > DNS Server](https://github.com/ikem-krueger/ikem-krueger.github.io/raw/master/_posts/2019-09-05-fritzbox-6490-cable-mit-alternativen-dns-server/FritzBox-DNS-1024x465.png)

Nicht so bei der Fritz!Box von Kabel Deutschland/Vodafone. Da gibt es dieses Menü nicht. 

Aber es gibt trotzdem einen Weg das zu ändern. Über das sichern/editieren/wiederherstellen der Einstellungen.

# Sichern

* In der [Fritz!Box Oberfläche](http://192.168.178.1/) anmelden
* In der Seitenleiste auf "System", "Sicherung"
* Dann auf den Reiter "Sichern"
* Kennwort eingeben
* Auf "Sichern" klicken

![Fritz!Box > System > Sicherung > Sichern](https://github.com/ikem-krueger/ikem-krueger.github.io/raw/master/_posts/2019-09-05-fritzbox-6490-cable-mit-alternativen-dns-server/Bildschirmfoto%202019-09-05%20um%2015.40.02.png)

Als Kennwort benutze ich das Anmelde-Kennwort der Fritz!Box Oberfläche. So muss ich mir kein Extra Kennwort merken.

Ich empfehle eine Kopie von der Konfigurationsdatei zu machen. Dann kann man die Einstellungen bei Bedarf wieder zurücksetzen.

# Editieren

Laut eigener Aussage bietet [Cloudflare](https://1.1.1.1/dns/) den schnellsten und sichersten DNS Dienst an. Deswegen nutze ich diesen DNS Dienst.

Die Cloudflare Adressen für die DNS Server sind:

* für IPv4: 1.1.1.1 und 1.0.0.1
* für IPv6: 2606:4700:4700::1111 und 2606:4700:4700::1001

Um Cloudflare als DNS Server zu benutzen, musst du die gesicherte Konfigurationsdatei mit einem Texteditor bearbeiten.

Dann änderst du im Abschnitt `servercfg` die Werte von:

* `use_user_dns_for_ipv4` von "no" auf "yes"
* `user_dns1_for_ipv4` von "0.0.0.0" auf "1.1.1.1"
* `user_dns2_for_ipv4` von "0.0.0.0" auf "1.0.0.1"
* `use_user_dns_for_ipv6` von "no" auf "yes"
* `user_dns1_for_ipv6` von "::" auf "2606:4700:4700::1111"
* `user_dns2_for_ipv6` von "::" auf "2606:4700:4700::1001"

Das Ergebnis sieht dann so aus:

```
servercfg {
        hostname = "(none)";
        dhcpc_hostname = "fritz.box";
        dns1 = 192.168.180.1;
        dns2 = 192.168.180.2;
        use_user_dns_for_ipv4 = yes;
        user_dns1_for_ipv4 = 1.1.1.1;
        user_dns2_for_ipv4 = 1.0.0.1;
        use_user_dns_for_ipv6 = yes;
        user_dns1_for_ipv6 = 2606:4700:4700::1111;
        user_dns2_for_ipv6 = 2606:4700:4700::1001;
        wpad_protection = yes;
}
```

## Prüfsumme reparieren

In der Konfigurationsdatei gibt es eine Prüfsumme. Die muss repariert werden, bevor die Konfigurationsdatei benutzt werden kann.

Dafür braucht man das Tool "[fritzchecksum](https://github.com/mementum/fritzchecksum)".

#### Windows

Für 32-Bit Systeme [fritzchecksum-0.0.3.zip](https://github.com/mementum/fritzchecksum/releases/download/0.0.3/fritzchecksum-0.0.3.zip), für 64-Bit Systeme [fritzchecksum-amd64-0.0.3.zip](https://github.com/mementum/fritzchecksum/releases/download/0.0.3/fritzchecksum-amd64-0.0.3.zip) herunterladen.

Datei entpacken und `fritzchecksum.exe` starten.

* Auf "Browse" klicken
* "FRITZ.Box 6490 Cable (kdg) 141.07.01_04.09.19_2255.export" auswählen
* Auf "Re-Calculate" und "Save" klicken

#### Mac OS X

Pip installieren:

```
sudo easy_install pip
```

Fritzchecksum installieren:

```
sudo pip install fritzchecksum
```

Reparatur:

```
fritzchecksum -c "FRITZ.Box 6490 Cable (kdg) 141.07.01_04.09.19_2255.export"
```

#### Linux

Fritzchecksum installieren:

```
sudo pip install fritzchecksum
```

Reparatur:

```
fritzchecksum -c "FRITZ.Box 6490 Cable (kdg) 141.07.01_04.09.19_2255.export"
```

# Wiederherstellen

* In der [Fritz!Box Oberfläche](http://192.168.178.1/) anmelden
* In der Seitenleiste auf "System", "Sicherung"
* Dann auf den Reiter "Wiederherstellen"
* Datei auswählen
* Auf "Wiederherstellen" klicken

![Fritz!Box > System > Sicherung > Wiederherstellen](https://github.com/ikem-krueger/ikem-krueger.github.io/raw/master/_posts/2019-09-05-fritzbox-6490-cable-mit-alternativen-dns-server/Bildschirmfoto%202019-09-05%20um%2015.40.23.png)

Die Fritz!Box lädt jetzt die Konfigurationsdatei, und startet danach neu.

Nachdem Neustart werden die neuen DNS Server Einstellungen benutzt.

# Fazit

Es ist ein bischen umständlich. Aber es lohnt sich. Die Seiten laden jetzt sehr sehr schnell.

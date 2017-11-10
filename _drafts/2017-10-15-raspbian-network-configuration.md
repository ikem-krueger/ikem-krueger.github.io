---
layout: post
title: Raspbian network configuration
tags: debian, raspbian, raspberry-pi
---

I have a Raspberry Pi 3. And it took me a while to find out how to configure the network.

After a lot of tinkering, and thinking, I came up with this:

Configure your network via `/etc/network/interfaces`:

    auto lo wlan0

    iface lo inet loopback
    iface eth0 inet dhcp
    iface wlan0 inet dhcp
    wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf

And create a `/etc/wpa_supplicant/wpa_supplicant.conf` via:

    wpa_passphrase $SSID $PSK|sudo tee -a /etc/wpa_supplicant/wpa_supplicant.conf

If you now run "sudo ifup wlan0", the interface comes up.

Also when you boot.

The only thing when it doesn't come up is, when the wlan lost connection.

That's something I still have to find out.

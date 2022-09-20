Raspberry Pi 3B+ with LibreElec

## Files

### /flash/config.txt

    dtoverlay=disable-bt
    
    disable_splash=1
    
    arm_freq=1200
    
    decode_MPG2=0x00000000
    decode_WVC1=0x00000000

Disable Bluetooth, because it interferes with WiFi.

Disable the colored bootsplash, because I don't like it.

The Raspberry Pi 3B+ is overclocked to 1.4GHz by the manufacturer. The Raspberry Pi 3B is clocked at 1.2GHz. I changed it to that.

The last two lines enables the hardware encoding units of the GPU for MPEG2 and VC1. You need to adjust the hex values.

### /etc/modprobe.d/brcmfmac.conf

    options brcmfmac roamoff=1

Disable roaming, so the WiFi module sticks with whatever access point it connected to. Makes the WiFi connection more reliable.

### /etc/sysctl.d/20-network.conf

    net.ipv4.tcp_timestamps = 0
    net.ipv4.tcp_sack = 1
    net.ipv4.tcp_window_scaling = 1
    net.core.rmem_default = 31457280
    net.core.rmem_max = 12582912
    net.core.wmem_default = 31457280
    net.core.wmem_max = 12582912
    net.core.somaxconn = 65536
    net.core.netdev_max_backlog = 65536
    net.core.optmem_max = 25165824
    net.ipv4.tcp_mem = 65536 131072 262144
    net.ipv4.udp_mem = 65536 131072 262144
    net.ipv4.tcp_rmem = 8192 87380 16777216
    net.ipv4.udp_rmem_min = 16384
    net.ipv4.tcp_wmem = 8192 65536 16777216
    net.ipv4.udp_wmem_min = 16384

Tweaks the network stack for more throughput and reliability.

### ~/.config/autostart.sh

    #!/bin/sh
     
    vcgencmd arbiter set arm_uc 12 0
    
    # disable wifi power saving
    iw wlan0 set power_save off
    
    # reverse status leds: green "power on", red "writing data"
    echo "default-on" > /sys/class/leds/led0/trigger
    echo "mmc0" > /sys/class/leds/led1/trigger

### ~/.config/shutdown.sh

    #!/bin/sh
    
    # disable all leds
    echo "none" > /sys/class/leds/led0/trigger
    echo "none" > /sys/class/leds/led1/trigger

The way the leds are configured, let you know at which state the system is.

1. Boot phase (Kernel): green "writing data", red "power on"
2. Boot phase (GUI): green "power on", red "writing data"
3. Shutdown: green/red off

### ~/.kodi/userdata/advancedsettings.xml

    <advancedsettings>
      <splash>false</splash>
    </advancedsettings>

Disable Kodi splash screen.

## LibreElec

### Configuration

## Kodi

### Configuration

### Skins

* [Arctic Horizon 2](https://forum.kodi.tv/showthread.php?tid=367352)
* [Unity](https://kodi.tv/addons/matrix/skin.unity)

## TVHeadEnd

### Configuration

## Sources:

* [WiFi lost, auto-reconnects only after minutes - General Support - LibreELEC Forum](https://forum.libreelec.tv/thread/24173-wifi-lost-auto-reconnects-only-after-minutes/?postID=157235#post157235)
* [Codesys RPI HOWTO.md](https://gist.github.com/kmpm/bc7e0bb4a99f38fb4206#tune-system)
* [Continuity counter error - PVR & DVB Support - LibreELEC Forum](https://forum.libreelec.tv/thread/4878-continuity-counter-error/?postID=34178#post34178)

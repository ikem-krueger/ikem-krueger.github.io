Compile the kernel module:

```
git clone git@github.com:daringer/asus-fan.git
cd asus-fan/misc
./ubuntu_dkms_sudo_install.sh
```

Create the file `/usr/local/bin/modprobe.sh`:

```bash
#!/bin/bash

modprobe asus_fan force_load=1

echo 1 > /sys/devices/system/cpu/intel_pstate/hwp_dynamic_boost
echo 1 > /sys/devices/system/cpu/intel_pstate/no_turbo
```

Create the file `/etc/systemd/system/modprobe.service`:

```ini
[Unit]
Description=Run modprobe

[Service]
Type=simple
ExecStart=/usr/local/bin/modprobe.sh

[Install]
WantedBy=multi-user.target
```

Set permissions:

```
sudo chmod +x /usr/local/bin/modprobe.sh
sudo chmod 644 /etc/systemd/system/modprobe.service
```

Enable the service:

```
sudo systemctl enable modprobe.service
```

## Links

 - [daringer_asus-fan Kernel module to get_set (both) fan speed(s) on ASUS Zenbooks](https://github.com/daringer/asus-fan?tab=readme-ov-file#ubuntu)

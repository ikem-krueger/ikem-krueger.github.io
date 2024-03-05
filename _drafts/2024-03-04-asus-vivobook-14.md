## Asus fan kernel module

Compile the kernel module:

```
git clone git@github.com:daringer/asus.git
cd asus-fan/misc
./ubuntu_dkms_sudo_install.sh
```

Create the file `/usr/local/bin/asus.sh`:

```bash
#!/bin/bash

modprobe asus_fan force_load=1
```

Create the file `/etc/systemd/system/asus.service`:

```ini
[Unit]
Description=Force loading asus_fan kernel module

[Service]
Type=simple
ExecStart=/usr/local/bin/asus.sh

[Install]
WantedBy=multi-user.target
```

Enable the service:

```
sudo systemctl enable asus.service
```

## Intel CPU tweaks

Create the file `/usr/local/bin/intel.sh`:

```bash
#!/bin/bash

echo 1 > /sys/devices/system/cpu/intel_pstate/hwp_dynamic_boost
echo 1 > /sys/devices/system/cpu/intel_pstate/no_turbo
```

Create the file `/etc/systemd/system/intel.service`:

```ini
[Unit]
Description=Intel CPU tweaks

[Service]
Type=simple
ExecStart=/usr/local/bin/intel.sh

[Install]
WantedBy=multi-user.target
```

Set permissions:

```
sudo chmod +x /usr/local/bin/intel.sh
sudo chmod 644 /etc/systemd/system/intel.service
```

Enable the service:

```
sudo systemctl enable intel.service
```

## Links

 - [daringer_asus-fan Kernel module to get_set (both) fan speed(s) on ASUS Zenbooks](https://github.com/daringer/asus-fan?tab=readme-ov-file#ubuntu)

Bring smartphone into recovery mode

On the smartphone in recovery mode, tap on "Advanced" and "Enable ADB"

Connect the smartphone with the pc.

Open a terminal and type:

adb push e2fsprogs.tar /
adb shell

On the shell type:

# extract e2fsprogs
tar xfv e2fsprogs

# show available partitions
cat /proc/partitions

# check ext filesystem
e2fsck -p -C0 /dev/block/mmcblk1p1

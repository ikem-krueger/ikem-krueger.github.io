---
layout: post
title: Decrypt ecryptfs home
tags: linux mint, ecryptfs
---

In Linux Mint you can enable home folder encryption. I had the need to access them from another distribution.

That's the steps I followed to get access to my data:

```bash
# show passphrase
ecryptfs-unwrap-passphrase ~/.ecryptfs/wrapped-passphrase

# add passphrase to keyring
sudo ecryptfs-add-passphrase --fnek

# show signatures
cat ~/.ecryptfs/Private.sig

# mount ecryptfs drive
sudo mount -t ecryptfs -o ecryptfs_sig=${FEK_SIG},ecryptfs_fnek_sig=${FNEK_SIG},ecryptfs_cipher=aes,ecryptfs_key_bytes=16,ecryptfs_unlink_sigs ~/.Private /mnt
```

In the file "Private.sig" the first line is "ecryptfs_sig", the second line "ecryptfs_fnek_sig".

When you mount the ecryptfs drive, use the passphrase shown by "ecryptfs-unwrap-passphrase".

Glossar:

- FEK: File Encryption Key
- FNEK: File Name Encryption Key

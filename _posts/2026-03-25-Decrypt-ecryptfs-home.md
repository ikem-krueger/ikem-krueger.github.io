---
layout: post
title: Decrypt ecryptfs home
tags: linux mint, ecryptfs
---

```bash
# show passphrase
ecryptfs-unwrap-passphrase ~/.ecryptfs/wrapped-passphrase

# show signatures
cat ~/.ecryptfs/Private.sig

# mount ecryptfs drive
sudo mount -t ecryptfs -o ecryptfs_sig=${FEK_SIG},ecryptfs_fnek_sig=${FNEK_SIG},ecryptfs_cipher=aes,ecryptfs_key_bytes=16,ecryptfs_unlink_sigs ~/.Private /mnt
```

When you get asked for the passphrase, use the passphrase shown by "ecryptfs-unwrap-passphrase".

In the file "Private.sig" the first line is "ecryptfs_sig", the second line "ecryptfs_fnek_sig".

Glossar:

- FEK: File Encryption Key
- FNEK: File Name Encryption Key

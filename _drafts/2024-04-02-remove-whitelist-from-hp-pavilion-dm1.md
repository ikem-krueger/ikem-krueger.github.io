I try to remove the whitelist from the UEFI for my HP Pavilion dm1 3101sg.

I extracted the "sp54026.exe" with 7-Zip.

I used Phoenixtool to decrypt "01611.bin".

I opened  "01611.bin.DEC" with UEFITool and found the module which shows the string "104-Unsupported wireless network device" and extracted the "PE32 image section" body.

I opened them with IDA Free and searched for the string via "Search..." "Sequence of bytes".

I tried to find the cross references with "X".

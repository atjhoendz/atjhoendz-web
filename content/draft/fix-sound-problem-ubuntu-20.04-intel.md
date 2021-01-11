---
title: Fix Sound Problem Ubuntu 20.04 on Intel Soundcard
description:
tags: ubuntu
author:
  name: Moh Achun Armando
---

Pada saat pertama kali install ubuntu 20.04 di laptop saya yaitu Acer Swift 3 SF313-51-514S terdapat beberapa permasalahan yang cukup krusial, berikut penjabaran dan penyelesaiannya.

# Microphone Bawaan Tidak terdeteksi

Pada permasalahan pertama ini, dari pengalaman saya mencari informasi solving masih belum ditemukan solusi untuk menjalankannya. Namun terdapat alternatif lain yaitu dengan memakai mic external, yang sebelumnya harus dikonfigurasi terlebih dahulu pada ubuntu nya supaya dapat mendeteksinya.

1. Edit alsa-base conf.
```sh
sudo vi /etc/modprobe.d/alsa-base.conf
```
![ss isi alsa-base.conf](../img/ss-alsa-conf.jpg)

2. Masukan config berikut pada line paling bawah

```sh
options snd-hda-intel model=dell-headset-multi
```

3. Reload alsa dan pulsaudio

```sh
pulse-audio -k && sudo alsa force-reload
```

4. Kemudian inputkan headset/mic-external lalu akan muncul popup pilihan seperti ini
![ss pilihan config mic](../img/ss-pilihan-config-mig.jpg)
lalu pilih sesuai keinginan, namun jika tidak berfungsi sesuai pilihan maka pilih saja yang bagian **sound settings**
![ss sound settings](../img/ss-sound-setting.jpg)
pilih input device ke **Headset Microphone** dan pastikan pilihannya terpilih 

5. Selesai, nanti ketika menginputkan kembali headset/mic-external silahkan lakukan kembali **Step no. 4**.

# Suara tidak keluar sama sekali, Output Device **Dummy Output**

Ketika terjadi hal seperti ini, silahkan lakukan beberapa langkah berikut:
1. Edit alsa-base.conf
```sh
sudo vi /etc/modprobe.d/alsa-base.conf
```

2. Masukan config berikut pada line paling bawah
*(catatan: apabila sebelumnya terdapat config mengenai permasalah microphone, maka tempatkan config ini di atas config microphone)*
```sh
options snd-hda-intel dmic_detect=0
```
Contoh penempatan config jika terdapat config mic
```sh
options snd-hda-intel dmic-detect=0
options snd-hda-intel model=dell-headset-multi
```

3. Kemudian reload alsa dan pulseaudio
```sh
pulse-audio -k && sudo alsa force-reload
```

4. selesai, suara sudah berjalan dengan normal

```

> Good Luck!

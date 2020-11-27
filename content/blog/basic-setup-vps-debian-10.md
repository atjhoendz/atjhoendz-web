---
title: Basic Setup VPS Debian 10
description: Konfigurasi awal vps
tags: vps
author:
  name: Moh Achun Armando
---

## Table of Contents

- [Login Via SSH](#login-via-ssh)
- [Mengganti Password](#mengganti-password)
- [Membuat User Baru](#membuat-user-baru)
- [Login SSH Dengan User baru](#login-ssh-dengan-user-baru)
- [Disable Root Login SSH](#disable-root-login-ssh)
- To be continued

<br>

---

<br>
Pada konfigurasi ini menggunakan user root, yaitu tipe user pada saat pertama kali vps dibuat.

## Login Via SSH

```sh
$ ssh root@alamatipvps
```

## Mengganti Password

```sh
# passwd
```

## Membuat User Baru

Membuat user baru dengan perintah berikut, silahkan ganti "namauserbaru" dengan nama user yang diinginkan

```sh
# adduser namauserbaru
```

Menambahkan user baru kedalam sudo group. Agar dapat melakukan perintah menggunakan sudo

```sh
# usermod -aG sudo namauserbaru
```

## Login SSH Dengan User baru

```sh
$ ssh namauserbaru@alamatipvps
```

Setelah login menggunakan user baru maka untuk perintah selanjutnya harus menggunakan sudo ketika ingin mengubah konfigurasi sistem.

## Disable Root Login SSH

```sh
$ sudo nano /etc/ssh/sshd_config
```

kemudian cari kalimat **PermitRootLogin** menggunakan **ctrl+w** lalu ubah menjadi **PermitRootLogin no**

save lalu restart ssh server

```sh
$ sudo systemctl restart sshd
```

## To be continued

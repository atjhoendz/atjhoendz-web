---
title: Setup Neovim di Ubuntu 20.04
description: 
tags: neovim
author:
  name: Moh Achun Armando
---

# install neovim

# Healtcheck

:healthcheck

# Migrasi Vim ke Neovim

:help nvim-from-vim

# Membuat .vimrc

vi ~/.vimrc

# Konfigurasi vim

## Menampilkan Line Number
	set number
## Mengaktifkan Syntax Highlighting
	syntax on
## Membuka File Baru di Window Sebelah kanan
	let g:netrw_altv=1

# Apply File Changes
	didalam vim ketikan perintah:
	:autocmd SessionLoadPost * source ~/.vimrc

# For More Further
https://linuxhint.com/configure_vim_vimrc/#:~:text=Vim%20Configuration%20Files%3A,Ubuntu%2FDebian%20based%20operating%20systems.

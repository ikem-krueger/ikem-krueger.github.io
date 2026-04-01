---
layout: post
title: Papra on the Raspberry Pi 4
tags: raspberry pi, docker, papra, paperlessngx
---

[Papra](https://github.com/papra-hq/papra) is a lightweight alternative to PaperlessNGX.

I run them on a Raspberry Pi 4 in a Docker container.

If you want that too:

Create an `.env` file with an auth secret:

```bash
echo "AUTH_SECRET=$(openssl rand -base64 36)" > .env
```

Create `app-data` and `ingestion` folder:

```bash
mkdir app-data ingestion
```

Create `docker-compose.yml` file:

```yml
services:
  papra:
    image: ghcr.io/papra-hq/papra:latest-root
    container_name: papra
    restart: unless-stopped
    ports:
      - 1221:1221
    env_file: ".env"
    environment:
      - APP_BASE_URL=http://homelab:1221
      - INGESTION_FOLDER_IS_ENABLED=true
      - DOCUMENTS_OCR_LANGUAGES=deu
    volumes:
      - ./app-data:/app/app-data
      - ./ingestion:/app/ingestion
    user: 1000:1000
```

Substitute `homelab` with the hostname of your Raspberry Pi 4!

Change the `DOCUMENTS_OCR_LANGUAGES` to the languages you want (see the [documentation](https://docs.papra.app/self-hosting/configuration/#documents_ocr_languages) for it).

If you want "ingestion" to work you need to create a folder in it like `org_1GAP1Miap135XEcbKuBQF948`!

You find the name of the organization in the url after "organizations".

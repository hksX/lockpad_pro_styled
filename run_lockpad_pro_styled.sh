#!/usr/bin/env bash
ZIP="lockpad_pro_styled.zip"
DEST="lockpad_pro_styled"
if [ ! -f "$ZIP" ]; then echo "$ZIP not found"; exit 1; fi
unzip -o "$ZIP" -d "$DEST"
cd "$DEST"
npm install
npm run dev

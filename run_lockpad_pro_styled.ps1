\
$zip = "lockpad_pro_styled.zip"; $dest = "lockpad_pro_styled"; if(-not (Test-Path $zip)) { Write-Error "$zip not found"; exit 1 } Expand-Archive -Path $zip -DestinationPath $dest -Force; Set-Location $dest; npm install; npm run dev

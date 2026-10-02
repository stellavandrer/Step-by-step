#!/bin/bash
# Double-clique sur ce fichier pour ouvrir ton site d'anglais.
# (Le micro et la reconnaissance vocale ont besoin d'une adresse « localhost ».)
cd "$(dirname "$0")"
PORT=8765
if ! lsof -i :$PORT >/dev/null 2>&1; then
  nohup python3 serve.py $PORT >/dev/null 2>&1 &
  disown
  sleep 1
fi
open "http://localhost:$PORT"
echo "Ton site est ouvert dans le navigateur : http://localhost:$PORT"
echo "Tu peux fermer cette fenêtre, le site reste accessible tant que le Mac est allumé."

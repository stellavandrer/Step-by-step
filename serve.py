"""Serveur local du site : comme `python3 -m http.server`, mais le navigateur
revérifie chaque fichier à chaque visite (sinon il peut garder une ancienne
version des leçons pendant des heures après une mise à jour)."""
import http.server
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8765


class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-cache")
        super().end_headers()

    def log_message(self, *args):
        pass


http.server.ThreadingHTTPServer(("", PORT), Handler).serve_forever()

# 📋 DEPLOYMENT CHECKLISTE

Folge dieser Checkliste Schritt für Schritt!

## ☐ PHASE 1: GitHub Setup (10 Minuten)

### GitHub Repository erstellen
- [ ] GitHub.com öffnen und einloggen
- [ ] Neues Repository erstellen: "elektroauto-rechner"
- [ ] Repository auf "Public" setzen
- [ ] NICHT "Initialize with README" aktivieren
- [ ] Repository erstellen

### Dateien hochladen
- [ ] Alle Projekt-Dateien in einen Ordner packen
- [ ] Über GitHub Website hochladen ("uploading an existing file")
- [ ] Alle Dateien markieren und hochziehen
- [ ] Commit Message: "Initial commit"
- [ ] "Commit changes" klicken
- [ ] ✅ Prüfen: Alle Dateien sind sichtbar auf GitHub

---

## ☐ PHASE 2: Netlify Deployment (15 Minuten)

### Netlify Account
- [ ] Netlify.com öffnen
- [ ] "Sign up with GitHub" wählen
- [ ] Autorisierung bestätigen
- [ ] Dashboard öffnet sich

### Site deployen
- [ ] "Add new site" → "Import an existing project"
- [ ] "Deploy with GitHub" wählen
- [ ] Repository "elektroauto-rechner" auswählen
- [ ] Build settings prüfen:
  - [ ] Build command: `npm run build`
  - [ ] Publish directory: `dist`
- [ ] "Deploy site" klicken
- [ ] Warten (2-5 Minuten)
- [ ] ✅ Status zeigt "Published"
- [ ] ✅ Site-URL testen (funktioniert?)

---

## ☐ PHASE 3: Domain kaufen & verbinden (30 Minuten)

### Domain kaufen
- [ ] Domain-Anbieter wählen (Namecheap oder IONOS)
- [ ] Passenden Domain-Namen suchen
- [ ] Domain kaufen (~10-15€/Jahr)
- [ ] ✅ Bestätigungs-Email erhalten

### Domain mit Netlify verbinden
- [ ] In Netlify: "Domain settings" öffnen
- [ ] "Add custom domain" klicken
- [ ] Domain eingeben und verifizieren
- [ ] Nameserver von Netlify kopieren (4 Stück)
- [ ] Bei Domain-Anbieter: Nameserver ändern
- [ ] Warten (1-48 Stunden)
- [ ] ✅ Domain funktioniert
- [ ] ✅ HTTPS ist aktiv (grünes Schloss)

---

## ☐ PHASE 4: SEO Setup (20 Minuten)

### Dateien anpassen
- [ ] `public/sitemap.xml` öffnen
- [ ] "ihredomain.de" durch echte Domain ersetzen
- [ ] Zu GitHub hochladen (Edit → Commit)
- [ ] `public/robots.txt` öffnen
- [ ] "ihredomain.de" durch echte Domain ersetzen
- [ ] Zu GitHub hochladen

### Google Search Console
- [ ] search.google.com/search-console öffnen
- [ ] "Property hinzufügen" → "Domain"
- [ ] Domain eingeben
- [ ] TXT Record bei DNS-Anbieter hinzufügen
- [ ] In Search Console verifizieren
- [ ] ✅ Verifizierung erfolgreich
- [ ] Sitemap einreichen: `sitemap.xml`
- [ ] ✅ Sitemap akzeptiert

---

## ☐ PHASE 5: Testing (15 Minuten)

### Funktionstest
- [ ] Site auf Desktop aufrufen
- [ ] Site auf Smartphone aufrufen
- [ ] Rechner testen: Eingaben funktionieren?
- [ ] Navigation testen: Alle Links funktionieren?
- [ ] Footer-Links testen (Impressum, Datenschutz)
- [ ] ✅ Alles funktioniert

### Performance-Test
- [ ] PageSpeed Insights öffnen: https://pagespeed.web.dev
- [ ] Deine URL eingeben
- [ ] Score prüfen (sollte >80 sein)
- [ ] ✅ Performance gut

### Mobile-Test
- [ ] Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- [ ] Deine URL eingeben
- [ ] ✅ "Page is mobile-friendly"

---

## ☐ PHASE 6: Launch! (Optional)

### Promotion
- [ ] Domain-Namen mit Freunden/Familie teilen
- [ ] In relevanten Facebook-Gruppen posten
- [ ] Reddit-Post in r/elektroautos (authentisch!)
- [ ] Product Hunt Launch vorbereiten
- [ ] Twitter/X Post
- [ ] LinkedIn-Artikel

### Analytics (Optional)
- [ ] Google Analytics Account erstellen
- [ ] Tracking-Code kopieren
- [ ] In `index.html` einfügen (vor </head>)
- [ ] Zu GitHub hochladen
- [ ] ✅ Analytics funktioniert

---

## ☐ PHASE 7: Monitoring (Ongoing)

### Wöchentlich prüfen
- [ ] Google Search Console: Neue Klicks?
- [ ] Google Analytics: Wie viel Traffic?
- [ ] Netlify Dashboard: Build-Fehler?
- [ ] Site selbst testen: Alles funktioniert?

### Monatlich prüfen
- [ ] Google Search Console: Position der Keywords?
- [ ] Gibt es Fehlerseiten (404)?
- [ ] Funktioniert HTTPS noch?
- [ ] Domain-Verlängerung nötig?

---

## 🎉 FERTIG!

Wenn alle Checkboxen abgehakt sind, ist deine Site:
✅ Live und erreichbar
✅ SEO-optimiert
✅ Bei Google angemeldet
✅ Bereit für Traffic und Einnahmen

---

## 🆘 Bei Problemen

1. **README.md** lesen (ausführliche Anleitung)
2. Google Search Console Fehler prüfen
3. Netlify Deploy Logs ansehen
4. GitHub Issues erstellen
5. Email: osman.goebel@gmail.com

---

**Viel Erfolg! 🚀**

# 🚗⚡ Elektroauto-Rechner

Ein kostenloser Online-Rechner zum Vergleich der Gesamtkosten von Elektroautos mit Verbrennern.

## 📋 Über das Projekt

Dieser Rechner hilft Nutzern dabei, die wahren Kosten eines Elektroautos über die gesamte Nutzungsdauer zu berechnen und mit einem Verbrenner zu vergleichen. Berücksichtigt werden:

- ✅ Anschaffungskosten
- ✅ Energie-/Benzinkosten
- ✅ Wartungskosten
- ✅ Versicherung
- ✅ Steuern
- ✅ THG-Quote
- ✅ Parkgebühren-Ersparnis
- ✅ CO₂-Bilanz

---

## 🚀 SCHRITT-FÜR-SCHRITT ANLEITUNG

### **Teil 1: GitHub Setup (Über den Browser - KEIN Terminal nötig!)**

#### Schritt 1: Dateien vorbereiten
1. Lade alle Projekt-Dateien auf deinen Computer herunter
2. Packe sie in einen Ordner namens `elektroauto-rechner`

#### Schritt 2: GitHub Repository erstellen
1. Gehe zu **https://github.com**
2. Logge dich ein
3. Klicke oben rechts auf das **"+" Symbol** → **"New repository"**
4. Repository-Name: `elektroauto-rechner`
5. Beschreibung: "Elektroauto Kostenrechner - Vergleich E-Auto vs Verbrenner"
6. Wähle **"Public"** (wichtig für kostenloses Hosting!)
7. ❌ NICHT "Initialize with README" anklicken
8. Klicke **"Create repository"**

#### Schritt 3: Dateien hochladen (Browser-Methode)
1. Auf der Repository-Seite siehst du **"uploading an existing file"** - klicke darauf
2. Ziehe ALLE Dateien aus deinem `elektroauto-rechner` Ordner in das Upload-Feld
3. Warte bis alle Dateien hochgeladen sind (zeigt grüne Häkchen)
4. Gib unten eine Commit-Message ein: "Initial commit - Elektroauto Rechner"
5. Klicke **"Commit changes"**

**✅ FERTIG! Dein Code ist jetzt auf GitHub!**

---

### **Teil 2: Netlify Deployment**

#### Schritt 1: Netlify Account erstellen
1. Gehe zu **https://www.netlify.com**
2. Klicke **"Sign up"**
3. Wähle **"Sign up with GitHub"**
4. Autorisiere Netlify (grüner Button)

#### Schritt 2: Site von GitHub deployen
1. Im Netlify Dashboard: Klicke **"Add new site"** → **"Import an existing project"**
2. Wähle **"Deploy with GitHub"**
3. Falls gefragt: Autorisiere Netlify für GitHub
4. Wähle dein Repository: **"elektroauto-rechner"**
5. **Build settings:**
   - Branch to deploy: `main` (oder `master`)
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Klicke **"Deploy site"**

#### Schritt 3: Warten und testen
1. Netlify baut deine Site (dauert 2-5 Minuten)
2. Status wird oben angezeigt: "Site deploy in progress" → dann "Published"
3. Du bekommst eine URL wie: `random-name-12345.netlify.app`
4. **Klicke auf die URL** - deine Site ist live! 🎉

---

### **Teil 3: Custom Domain verbinden**

#### Schritt 1: Domain kaufen
1. Gehe zu **Namecheap.com** oder **IONOS.de**
2. Suche nach einem verfügbaren Namen (z.B. `elektroauto-kostenrechner.de`)
3. Kaufe die Domain (~10-15€/Jahr)

#### Schritt 2: Domain mit Netlify verbinden
1. In deinem Netlify Site-Dashboard: **"Domain settings"**
2. Klicke **"Add custom domain"**
3. Gib deine Domain ein (z.B. `elektroauto-kostenrechner.de`)
4. Klicke **"Verify"** → dann **"Add domain"**

#### Schritt 3: DNS konfigurieren

**Option A: Netlify DNS (Empfohlen - Einfacher!)**

1. Netlify zeigt dir 4 Nameserver, z.B.:
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```

2. Gehe zu deinem Domain-Anbieter (Namecheap/IONOS):
   - Bei **Namecheap**: Domain → "Manage" → "Nameservers" → "Custom DNS"
   - Bei **IONOS**: Domain → "DNS Einstellungen" → "Nameserver"

3. Ersetze die vorhandenen Nameserver mit den 4 von Netlify

4. **Speichern!**

**Option B: Eigener DNS (Wenn du bei deinem Anbieter bleiben willst)**

1. Füge bei deinem Domain-Anbieter folgende DNS-Records hinzu:

   **A-Record:**
   - Type: `A`
   - Name: `@`
   - Value: `75.2.60.5`
   - TTL: `3600`

   **CNAME-Record:**
   - Type: `CNAME`
   - Name: `www`
   - Value: `deine-site-name.netlify.app`
   - TTL: `3600`

#### Schritt 4: Warten
- DNS-Änderungen dauern 1-48 Stunden (meist nur 1-2 Stunden)
- Netlify aktiviert automatisch **HTTPS/SSL** (kostenlos!)
- Check Status unter: https://dnschecker.org

---

### **Teil 4: Google Search Console einrichten (SEO!)**

#### Schritt 1: Property hinzufügen
1. Gehe zu **https://search.google.com/search-console**
2. Klicke **"Property hinzufügen"**
3. Wähle **"Domain"** (empfohlen)
4. Gib deine Domain ein: `elektroauto-kostenrechner.de`

#### Schritt 2: Ownership verifizieren
1. Google zeigt dir einen **TXT Record** zum Verifizieren
2. Kopiere diesen TXT Record
3. Füge ihn bei deinem DNS-Anbieter hinzu:
   - Type: `TXT`
   - Name: `@`
   - Value: (der von Google kopierte Code)
4. Klicke in Google Search Console auf **"Verify"**

#### Schritt 3: Sitemap einreichen
1. In Google Search Console: **"Sitemaps"** (linkes Menü)
2. Gib ein: `sitemap.xml`
3. Klicke **"Submit"**
4. ✅ Fertig! Google indexiert jetzt deine Seite

---

### **Teil 5: Updates machen (Später)**

Wenn du Änderungen an deiner Site machen willst:

**Methode 1: Über GitHub Website (Einfach)**
1. Gehe zu deinem GitHub Repository
2. Navigiere zur Datei die du ändern willst
3. Klicke auf das Stift-Symbol (Edit)
4. Mache deine Änderungen
5. Scrolle runter → "Commit changes"
6. Netlify deployed automatisch die Änderungen (2-3 Minuten)

**Methode 2: Neue Dateien hochladen**
1. Im Repository: "Add file" → "Upload files"
2. Ziehe neue/geänderte Dateien rein
3. "Commit changes"
4. Netlify deployed automatisch

---

## 📊 SEO-Optimierung (Wichtig für Traffic!)

### Dinge die SCHON erledigt sind ✅
- Meta-Tags in `index.html`
- `robots.txt` vorhanden
- `sitemap.xml` vorhanden
- Schnelle Ladezeiten durch Vite
- Mobile-optimiert durch Tailwind

### Dinge die DU machen musst:

1. **Keywords-Recherche**
   - Tool: Google Keyword Planner (kostenlos)
   - Suche nach: "elektroauto rechner", "e-auto kosten", "elektroauto kostenvergleich"
   - Notiere dir Long-Tail Keywords (3-5 Wörter)

2. **Sitemap.xml anpassen**
   - Öffne `public/sitemap.xml`
   - Ersetze `https://ihredomain.de` mit deiner echten Domain
   - Speichern & zu GitHub hochladen

3. **robots.txt anpassen**
   - Öffne `public/robots.txt`
   - Ersetze `https://ihredomain.de` mit deiner echten Domain

4. **Google Analytics hinzufügen (Optional)**
   - Erstelle Account bei Google Analytics
   - Füge Tracking-Code in `index.html` ein (vor </head>)

---

## 🎯 Content-Strategie (Optional aber empfohlen)

Obwohl dein Rechner alleine funktionieren kann, helfen 5-10 zusätzliche Seiten enorm:

### Mögliche zusätzliche Seiten:
1. **Blog-Artikel:** "Die 10 häufigsten Mythen über Elektroautos"
2. **Vergleichsseite:** "Tesla Model 3 vs. VW ID.3 - Kostenvergleich"
3. **Ratgeber:** "Elektroauto kaufen: Der ultimative Guide 2025"
4. **FAQ-Seite:** "Häufige Fragen zum Elektroauto"
5. **Ladeinfrastruktur:** "Wo kann ich mein E-Auto laden? Karte Deutschland"

**Diese musst du NICHT sofort machen!** Starte erst mal mit dem Rechner.

---

## 🔧 Technische Details

### Tech Stack:
- **Frontend:** React 18
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Hosting:** Netlify
- **Versionskontrolle:** GitHub

### Browser Support:
- Chrome, Firefox, Safari, Edge (moderne Versionen)
- Mobile responsive

---

## 💰 Kosten-Übersicht

| Service | Kosten |
|---------|--------|
| GitHub | **Kostenlos** |
| Netlify Hosting | **Kostenlos** (100GB Bandwidth/Monat) |
| Domain | ~1€/Monat (~12€/Jahr) |
| SSL/HTTPS | **Kostenlos** (durch Netlify) |
| **GESAMT** | **~1€/Monat** 🎉 |

---

## ❓ Häufige Probleme & Lösungen

### Problem: "Build failed" auf Netlify
**Lösung:** 
- Prüfe ob alle Dateien hochgeladen wurden
- In Netlify: "Deploys" → "Trigger deploy" → "Clear cache and deploy"

### Problem: Seite lädt aber ist weiß/leer
**Lösung:**
- Öffne Browser Console (F12)
- Suche nach Fehlern
- Meist: Pfad-Probleme in imports

### Problem: Domain funktioniert nicht
**Lösung:**
- DNS braucht Zeit (bis 48h)
- Prüfe auf https://dnschecker.org
- Prüfe ob Nameserver korrekt gesetzt sind

### Problem: CSS funktioniert nicht
**Lösung:**
- Prüfe ob `index.css` in `main.jsx` importiert ist
- Build neu triggern auf Netlify

---

## 📞 Support & Kontakt

- **GitHub Issues:** Für technische Probleme
- **Email:** osman.goebel@gmail.com

---

## 📄 Lizenz

© 2025 Osman Göbel. Alle Rechte vorbehalten.

---

## 🎉 Nächste Schritte

Nach erfolgreichem Deployment:

1. ✅ Site testen auf allen Geräten
2. ✅ Google Search Console verifizieren
3. ✅ Google Analytics einrichten (optional)
4. ✅ Social Media Links teilen
5. ✅ In Foren/Reddit erwähnen (authentisch!)
6. ✅ Product Hunt Launch vorbereiten
7. ✅ Google AdSense beantragen (bei genug Traffic)

---

**Viel Erfolg mit deinem Elektroauto-Rechner! 🚗⚡**

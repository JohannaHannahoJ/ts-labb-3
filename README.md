# Labb 3 i kursen Programmering i TypeScript, DT208G

Länk till applikationen: https://ts-labb-3.netlify.app/hem

**Genomförd av joha2102**

Det här är ett Angular-projekt skapat som en del av en uppgift där målet är att lära sig grunderna i Angular och hur en Angular-applikation konstrueras samt hur de olika delarna interagerar med varandra. Syftet är också att kunna använda CLI-verktyg för att testköra och publicera optimerade filer.

## Webbplatsen innehåller

- Navigationsmeny som separat komponent som sköts med Angulars Router-modul
- Startsida med kort info och bild
- Konverteringssida med två olika konverterare som är två separata komponenter
- Aboutsida med information om projektet
- Footer i separat komponent

## Tekniker

- Angular
- TypeScript
- HTML & CSS (global samt på komponent-nivå)
- Angular Router
- Angular Forms (ngModel)
- Git & GitHub


## Kör projektet lokalt

```bash
ng serve
```

Gå sedan till: http://localhost:4200

Sidan laddas om vid uppdateringar i koden.

## Bygg projektet

```bash
ng build
```
Detta kompilerar projektet och placerar de färdiga filerna i mappen `dist/`. 
Som standard optimeras applikationen för bästa möjliga prestanda och hastighet.

## Routing

Eftersom Angular är en Single Page Application (SPA) hanteras routing på klientsidan.  
För att direktlänkar och siduppdatering ska fungera korrekt i produktion krävs en `_redirects`-regel vid publicering på Netlify.

Filen ska innehålla följande rad: `/* /index.html 200`
(https://docs.netlify.com/manage/routing/redirects/rewrites-proxies/#history-pushstate-and-single-page-apps)


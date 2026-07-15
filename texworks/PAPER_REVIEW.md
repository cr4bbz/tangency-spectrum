# Paper Review: ``Von gleichmaessigen Punkten zu projektiver Tangenzdynamik''

## Urteil

Der Entwurf hat einen ungewoehnlich guten ideellen Kern: Eine harmlose
Verteilungsfrage auf `[0,1]` wird sauber zu einer Frage nach der richtigen
Metrik, dann zu symbolischer Dynamik, Arithmetik und Multifraktalitaet. Die
Gegenueberstellung von dyadischer und projektiver Gleichmaessigkeit ist die
tragende Einsicht und eine tragfaehige Einleitung fuer ein Paper.

In der aktuellen Form ist die Arbeit aber eine starke Forschungsnotiz, noch
kein beweisfertiger mathematischer Artikel. Mehrere wichtige Aussagen sind
richtig plausibel und teils standardnah, doch die geometrische Verbindung
zwischen der konkreten Tangenzfigur und dem Stern--Brocot-Modell ist noch
nicht als Satz mit Voraussetzungen und Beweis formuliert. Genau dort liegt
der entscheidende naechste Arbeitsblock.

## Fortschritt vom 15. Juli 2026

Die erste Hauptkritik ist inzwischen ausgeraeumt: Der Entwurf definiert die
Ausgangsgeometrie als obere Haelfte des Einheitskreises ueber seinem
Durchmesser. Daraus werden die Rekonstruktionsformel
`r(p)=2p(1-p)` und das konstante Kreuzverhaeltnis mit
`lambda=(1+sqrt(2))^2` direkt bewiesen. Eine neue TikZ-Abbildung zeigt diese
Konfiguration.

Auch das arithmetische Stern--Brocot-Woerterbuch ist jetzt im
Referenzmodell exakt: Woerter, teilerfremde Nennerpaare und Referenzintervalle
sind bijektiv verknuepft, mit exakter Laenge `1/(uv)`. Offen bleibt die
entscheidende geometrische Erweiterung: der uniforme Vergleich zwischen
den Tangenzluecken und diesen Referenzintervallen.

### Zweite Forschungsrunde: konkrete Randfamilie

Das Paper `kreise_im_halbkreis.pdf` liefert die fehlende geometrische
Eingabe: Die Skelettkette besitzt die exakten Radien

\[
r_n=\frac{1}{2\cosh^2(n\log(1+\sqrt2))}.
\]

Fuer die an der Halbierungsgeraden verbleibenden Luecken ist die
Stern--Brocot-Rekursion jetzt direkt aus den Kreisradien bewiesen. Schreibt
man zwei Randradien als `a^{-2},b^{-2}`, so hat der eingesetzte Kreis Radius
`(a+b)^{-2}`. Damit werden die Kindpaare exakt zu `(a,a+b)` und `(a+b,b)`;
die geometrische Lueckenlaenge ist `2/(ab)`.

Folglich sind fuer die gesamte rechte Randfamilie zwei neue Saetze erreicht:

\[
Z_\partial^+(s) \text{ konvergiert genau fuer } s>1,
\qquad
N_\partial^+(\varepsilon)=
\Theta\!\left(\varepsilon^{-1}\log\frac1\varepsilon\right).
\]

Die linke Spiegelung aendert nur einen Faktor zwei. Die zweite, am
Aussenkreis verlaufende Randfamilie ist inzwischen ebenfalls erledigt: Die
Cayley-Abbildung linearisiert sie und liefert dieselbe Stern--Brocot-
Rekursion. Offen bleibt die vollstaendige zweidimensionale Packung.

### Dritte Forschungsrunde: erste Binnenebene

Als kontrollierter Schritt in die zweidimensionale Packung wurde nun aus
jeder unteren Randluecke der erste wirklich freie Descartes-Kreis isoliert.
Hat die zugehoerige Randluecke die Parameter `(a,b)`, dann besitzt dieser
Binnenkreis die exakte Kruemmung

\[
4(a^2+ab+b^2).
\]

Fuer seine Radien gilt daher, mit dem Stern--Brocot-Paar `(u,v)`, der
uniforme Vergleich

\[
\rho_{n,w}\asymp \frac{r_n}{(u+v)^2}.
\]

Das erzeugt eine andere, aber ebenso explizite Referenzzeta:

\[
\sum_{\gcd(u,v)=1}(u+v)^{-2s}
=\frac{\zeta(2s-1)}{\zeta(2s)}.
\]

Damit ist fuer die erste Binnenebene bewiesen:

\[
s_c=1,
\qquad
Z_{\mathrm{seed}}^+(s)=\Theta((s-1)^{-1}),
\qquad
N_{\mathrm{seed}}^+(\varepsilon)=\Theta(\varepsilon^{-1}).
\]

Das ist ein echter Unterschied zur Randfamilie: Der kritische Exponent
bleibt gleich, der Doppelpol und der logarithmische Zaehlfaktor verschwinden.
Die vollen, unterhalb dieser ersten Kreise wachsenden Apollonischen
Teilbaeume sind davon noch nicht erfasst und bilden jetzt den klaren
naechsten Block.

### Vierte Forschungsrunde: offene Fragen geschaerft

Die volle Figur ist jetzt mit einer eindeutigen Zaehlkonvention versehen:
Skelettkreise und die in jeder offenen Geraden- oder Aussenkreisluecke
geborenen Kreise bilden eine disjunkte Vereinigung. Dadurch ist die globale
Radiuszeta eindeutig definiert.

Fuer jede einzelne dieser Apollonischen Dreieckspackungen ist der kritische
Exponent der klassische Gasket-Exponent

\[
\delta=1.305686728\ldots.
\]

Die Gesamtzeta reduziert sich auf eine einzige technische Bedingung: eine
gleichmaessige Form des lokalen Kreis-Zaehlsatzes fuer den kompakten
Parameterbereich `theta in [sqrt(2),1+sqrt(2)]`. Unter dieser Bedingung gilt
global erneut der Exponent `delta`, mit Residuum als konvergenter Summe der
lokalen Zaehldichten, gewichtet durch `r_n^delta`.

Die Frage nach dem fairen Randmass ist dagegen beantwortet. Es ist bis auf
eine glatte projektive Koordinatenaenderung das Minkowski-
Fragezeichenmass: singulaer-stetig, voller Traeger und exakt dimensional.
Rigorose Schranken fuer seine Massdimension sind

\[
0.874716305108207<d_{\rm typ}<0.874716305108213.
\]

Schliesslich besitzt die Beobachtungsfrage einen kanonischen abstrakten
Abschluss. Der Quotient, der genau jene Konfigurationen identifiziert, die
unter jedem zukuenftigen Generatorwort dieselbe Projektion haben, ist der
kleinste generatorstabile Beobachtungsraum. Offen bleibt nur, ob er hier
eine kleine konkrete geometrische Realisierung besitzt.

### Fuenfte Forschungsrunde: globaler Zeta-Satz

Die noch fehlende Uniformitaet ist jetzt elementar gewonnen. Die explizite
Möbius-Familie

\[
M_\theta(z)=\frac{z}{1+\frac{\theta-2}{2}z}
\]

identifiziert alle normalisierten unteren Wurzelluecken mit der Referenzform
`theta=2`. Da ihre Pole vom kompakten Referenzdreieck gleichmaessig getrennt
bleiben, ist die Familie zusammen mit ihren Inversen gleichmaessig
bi-Lipschitz. Alle Kreisradien einer lokalen Packung sind damit uniform mit
denen der Referenzpackung vergleichbar.

Folglich gilt nun fuer die gesamte Halbkreispackung, einschliesslich
Aussenkreisfamilie und Spiegelung,

\[
s_c(\mathcal P)=\delta,
\qquad
N_{\mathcal P}(\varepsilon)=\Theta(\varepsilon^{-\delta}).
\]

Der offene Teil dieser Frage ist nur noch fein: die explizite globale
Residuenkonstante am einfachen Pol bei `s=delta`.

### Sechste Forschungsrunde: Hauptkonstante und Restterm

Die globale Zaehlordnung laesst sich jetzt auf eine einzige, klar
identifizierte technische Hypothese reduzieren. Fuer die unteren
Wurzelparameter gilt exakt

\[
r_n=\frac{2q^{-2n}}{(1+q^{-2n})^2},
\qquad
\theta_n=q\frac{1+q^{-2n-2}}{1+q^{-2n}},
\]

also konvergiert theta_n gegen q exponentiell. Nach Normierung jeder lokalen
Luecke mit r_n^{-1} lautet die globale Hauptkonstante

\[
C_{\mathrm{glob}}
=2\sum_{n\ge0}r_n^\delta
\bigl(c_{n,\mathrm G}+c_{n,\mathrm K}\bigr).
\]

Die Reihe konvergiert absolut. Kesseboehmer--Kombrink behandeln die
analytische Abhaengigkeit der Apollonischen Hauptkonstante von den
Anfangskreisen. Kontorovich--Lutsko liefern effektive Zaehlungen fuer feste
Kleinsche Packungen. Was fuer unsere Packung noch explizit nachzuweisen ist,
ist die uniforme Fassung des Restterms auf dem kompakten Formraum.

Unter genau dieser Hypothese folgt bereits vollstaendig:

\[
N_{\mathcal P}(\varepsilon)
=C_{\mathrm{glob}}\varepsilon^{-\delta}
+O\bigl(\varepsilon^{-(\delta-\eta)}\bigr),
\qquad
\operatorname*{Res}_{s=\delta}Z_{\mathcal P}(s)
=\delta C_{\mathrm{glob}}.
\]

Das ist Fortschritt statt Verschiebung: Die globale Residuenfrage ist nun
nicht mehr diffus, sondern eine konkrete Uniformitaetsfrage fuer eine
einparametrige kompakte Moebius-Familie.

### Siebte Forschungsrunde: Hauptasymptotik ohne uniformen Fehlerterm

Die zentrale Beobachtung ist ein Kopf-Schwanz-Argument. Fuer die scharfe
globale Zaehlhauptasymptotik ist kein uniformer effektiver Restterm noetig.
Die bereits bewiesene uniforme grobe Schranke

\[
N_{\mathcal A_{n,\sigma}}(\varepsilon)
\ll \left(\frac{r_n}{\varepsilon}\right)^\delta
\]

kontrolliert alle tiefen Wurzelluecken gleichzeitig. Fuer endlich viele
flache Luecken darf man dagegen die jeweilige lokale Asymptotik einzeln
anwenden. Zuerst geht man mit epsilon gegen null, danach laesst man die
Kopftiefe gegen unendlich gehen.

Damit ist nun unbedingter Satz:

\[
N_{\mathcal P}(\varepsilon)
\sim C_{\mathrm{glob}}\varepsilon^{-\delta},
\qquad
C_{\mathrm{glob}}
=2\sum_{n\ge0}r_n^\delta
\bigl(c_{n,\mathrm G}+c_{n,\mathrm K}\bigr).
\]

Auch die Zeta-Funktion hat damit einen unbedingten Abel-Grenzwert

\[
\lim_{s\downarrow\delta}(s-\delta)Z_{\mathcal P}(s)
=\delta C_{\mathrm{glob}}.
\]

Die effektive Uniformitaet ist noch nicht verschwunden, aber ihre Rolle ist
jetzt kleiner und genauer: Sie wird nur fuer einen Potenzrestterm und eine
meromorphe Fortsetzung durch die kritische Gerade benoetigt.

### Achte Forschungsrunde: globale Hauptasymptotik und periodisches Spektrum

Zwei offene Fragen konnten substantiell verschaerft werden.

Erstens gilt die scharfe globale Zaehlasymptotik jetzt unbedingt:

\[
N_{\mathcal P}(\varepsilon)
\sim C_{\mathrm{glob}}\varepsilon^{-\delta}.
\]

Das Kopf-Schwanz-Argument braucht nur lokale Asymptotik fuer endlich viele
Wurzelluecken und die uniforme grobe obere Schranke fuer den Rest. Daraus
folgt auch der Abel-Grenzwert

\[
\lim_{s\downarrow\delta}(s-\delta)Z_{\mathcal P}(s)
=\delta C_{\mathrm{glob}}.
\]

Zweitens ist die Formel fuer positive periodische Adressen nun bewiesen:

\[
d(q^\infty)=\frac{|q|\log2}{2\log\rho_q}.
\]

Mit Perron--Frobenius-Mischungen der positiven Bloecke
\(U=LR\) und \(V_m=L^{m-1}R\) werden periodische Dimensionswerte dicht in

\[
\left[\frac{\log2}{2\log\varphi},+\infty\right).
\]

Die Frage nach der Dichte periodischer Werte ist damit ersetzt durch die
schaerfere Frage, ob nichtperiodische Adressen noch unter den alternierenden
Wert fallen koennen.

### Neunte Review-Runde: Aussagenstaerke und Zaehlinvarianz

Die erneute Pruefung hat drei konkrete Risiken ergeben und behoben.

1. Die Formulierung \(Z_\theta(s)\sim\delta c(\theta)/(s-\delta)\) war
   staerker als der herangezogene Kreiszahlsatz. Sie ist jetzt durch die
   unbedingte Abel-Grenze
   \(\lim_{s\downarrow\delta}(s-\delta)Z_\theta(s)=\delta c(\theta)\)
   ersetzt. Ein echter meromorpher Pol bleibt korrekt als effektive,
   weitergehende Frage markiert.

2. Die Beschraenktheit der lokalen Konstanten war nur ueber einen
   Literaturhinweis motiviert. Sie folgt nun unmittelbar aus der uniformen
   Moebius- beziehungsweise Cayley-Normierung durch Vergleich mit einer
   Referenzpackung.

3. Die fruehere disjunkte Skelettzerlegung konnte den Mittelpunkt unter
   Spiegelung doppelt lesen. Sie trennt jetzt explizit
   \(\mathcal S^+=\{C_n:n\ge0\}\) und
   \(\mathcal S^-=\{C_{-n}:n\ge1\}\).

Zusaetzlich ist die Sprache der periodischen Dimensionswerte praezisiert:
Die Werte enthalten eine dichte Teilmenge des angegebenen Halbstrahls; es
wird nicht behauptet, dass keine weiteren Werte ausserhalb auftreten.

### Zehnte Forschungsrunde: scharfer linker Spektrumsrand

Die zuvor offene Frage nach Dimensionswerten unter dem alternierenden Wert
ist jetzt beantwortet. Fuer jedes Wort der Laenge n erfuellen die
Stern--Brocot-Paare die Fibonacci-Schranken

\[
\max(u_w,v_w)\le F_{n+2},
\qquad
u_w+v_w\le F_{n+3}.
\]

Folglich kann kein geometrischer Zylinder schneller als
\(\varphi^{-2n}\) schrumpfen. Mit der Bernoulli-Masse \(2^{-n}\) ergibt das
fuer jede existierende lokale Dimension

\[
d(x)\ge\frac{\log2}{2\log\varphi}.
\]

Die alternierende Adresse \((LR)^\infty\) erreicht die Gleichheit. Damit
ist der linke Rand des vollstaendigen lokalen Dimensionsspektrums exakt
bestimmt. Als naechste Spektrumsfrage bleibt nicht mehr der Rand, sondern
die Realisierung und Hausdorff-Dimension der einzelnen Niveauklassen.

### Elfte Forschungsrunde: Korollare und Tiefenstatistik

Aus der Dichte der periodischen Werte und der Fibonacci-Schranke folgt nun
der Abschluss des gesamten lokalen Spektrums im erweiterten Sinn:

\[
\overline{\operatorname{Spec}_{\mathrm{loc}}}
=\left[\frac{\log2}{2\log\varphi},+\infty\right].
\]

Der linke Rand ist dabei nicht isoliert. Eine explizite Familie mit
exponentiell wachsenden alternierenden Bloecken und nur logarithmisch vielen
Doppelbuchstaben liefert ueberabzaehlbar viele nichtperiodische Minimierer.
Die konstruierte Teilmenge hat Hausdorff-Dimension null. Da die
Wurzelkarten bi-Lipschitz sind, sind Spektrum und Niveauklassendimensionen
von der gewaehlten geometrischen Wurzelluecke unabhaengig.

Als naechster Block ist die Tiefenstatistik festgelegt. Auf jeder Ebene
erhaelt die Randverfeinerung die Gesamtlänge exakt; die groesste Luecke hat
Ordnung \(k^{-1}\), die kleinste Ordnung \(\varphi^{-2k}\). Fuer \(s>1\)
folgt damit bereits

\[
 c_{n,s}k^{-s}\le\mathcal Z_{n,k}(s)\le C_{n,s}k^{1-s}.
\]

Die verbleibende Aufgabe ist die scharfe Verteilung der beinahe
parabolischen Luecken und daraus die Asymptotik
\(\mathcal Z_{n,k}(s)\sim C_{n,s}k^{-s}\).

### Zwoelfte Forschungsrunde: Randstrahlen, volle Realisierung und Kusp

Die drei gesetzten Bloecke haben jeweils einen konkreten Fortschritt
geliefert.

1. **Ebenensummen:** Die maximalen parabolischen Endlaeufe liefern im
   Referenzmodell den rigorosen Liminf
   \[
   \liminf_{k\to\infty}k^s\mathcal Z_k^{\mathrm{ref}}(s)
   \ge2^{s+1}\frac{\zeta(2s-1)}{\zeta(2s)}.
   \]
   Daraus entsteht eine explizite Konjektur fuer die volle
   Ebenenasymptotik. Die Auswertung bis Tiefe 26 ist als Evidenz, nicht
   als Beweis, dokumentiert.

2. **Endliche Niveauwerte:** Durch Makroblockmischungen positiver Woerter
   wird jetzt jeder endliche Wert des Spektrums von einer
   nichtperiodischen Adresse realisiert. Offen bleibt die Hausdorff-
   Dimension der entsprechenden Niveauklassen.

3. **Kusp:** Eine separierte Moran-Konstruktion mit Schrittweiten
   \(a_j\asymp j^2\) beweist
   \[
   \dim_H E(+\infty)\ge\frac12.
   \]
   Die Gleichheit bleibt eine klar formulierte obere-Schranken-Frage.

### Dreizehnte Forschungsrunde: Zeta-Normierung und Erneuerungsreduktion

Die parabolische Kandidatenkonstante hat nun drei voneinander unabhaengige
Anker: den rigorosen Randstrahl-Liminf, die exakte Baumrechnung bis Tiefe
26 und die richtige Zeta-Normierung am kritischen Punkt. Fuer

\[
C_s=2^{s+1}\frac{\zeta(2s-1)}{\zeta(2s)}
\]

gilt (C_s\zeta(s)\sim 12\pi^{-2}(s-1)^{-2}), exakt passend zum
Doppelpol der vollstaendigen Referenzzeta. Das beweist die Konjektur nicht,
schliesst aber eine inkonsistente Normierung aus.

Der noch fehlende obere Schritt ist jetzt als einzelne Aussage isoliert:
Nach Zerlegung eines Wortes in Praefix und maximalen terminalen Lauf muss
der Anteil mit wachsender Praefixtiefe nach Skalierung mit (k^s)
verschwinden. Das ist eine induzierte parabolische Erneuerungsfrage, keine
unspezifische Schranke ueber den gesamten Baum. Die Tiefenstatistik stuetzt
diese Reduktion deutlich: Bei Tiefe 26 und (s=2) tragen die Woerter ohne
Wechsel (87{,}61\%\) der Ebenensumme, jene mit genau einem Wechsel weitere
(8{,}73\%\).

## Zentrale Befunde

### 1. Die Ausgangsgeometrie ist jetzt spezifiziert

Die Formel

\[
p\mapsto ((2p-1,2p(1-p)),2p(1-p))
\]

ist sehr stark, aber im bisherigen Text bleibt offen, welche zwei
Randkreise, welche Normierung und welche Tangenzbedingungen sie exakt
voraussetzt. Ein Leser kann daher nicht pruefen, ob die Rekonstruktion fuer
die ganze beabsichtigte Skelettklasse oder nur fuer eine spezielle
Konfiguration gilt.

**Erledigt:** Die Einheitskreis-Konfiguration, die Normierung
`p=(x+1)/2` und ein direkter Rekonstruktionsbeweis stehen jetzt am Anfang
des Geometrieabschnitts. Als naechster Feinschliff sollte noch festgelegt
werden, welche Teilmenge dieser Skelettkreise als ``Skelettkette''
bezeichnet wird.

### 2. Das Woerter--Luecken-Woerterbuch ist zur Haelfte bewiesen

Die Matrizen `L,R`, die teilerfremden Paare `(u,v)` und die geometrischen
Lueckenlaengen `ell_w` erscheinen derzeit nebeneinander. Entscheidend ist
aber die eine praezise Aussage, die sie verbindet:

\[
w\longleftrightarrow (u_w,v_w)\longleftrightarrow I_w,
\qquad
\ell_w\asymp (u_wv_w)^{-1}.
\]

Ohne einen uniformen Vergleich mit Konstanten, die nicht vom Wort abhaengen,
folgen weder der kritische Exponent noch die Dimensionsformeln fuer die
konkrete Geometrie. Mit ihm werden grosse Teile des zweiten Papierabschnitts
beinahe automatisch.

**Neuer Stand:** Die exakte Wirkung von `L,R`, die Wort--Paar-Bijektion und
die Referenzlaenge `1/(uv)` sind bewiesen. Fuer die Randluecken an der
Halbierungsgeraden ist der geometrische Vergleich nun ebenfalls bewiesen,
sogar aus einer exakten Radiusrekursion. Offen bleibt nur die Erweiterung auf
die vom Rand geloesten Teilpackungen.

### 3. Zeta-Aussagen brauchen eine feste Zaehlnormierung

Die Referenzidentitaet

\[
\sum_{\gcd(u,v)=1}(uv)^{-s}=\zeta(s)^2/\zeta(2s)
\]

ist korrekt. Der angegebene Doppelpol-Koeffizient ist jedoch je nach
Konvention verschieden: Ohne zusaetzlichen Faktor ist er `6/pi^2`, mit dem
in der Notiz genannten Faktor `2^s` ist er `12/pi^2`. Die Arbeit darf hier
nicht beide Normierungen zugleich implizit verwenden.

**Neuer Stand:** Die Zeta-Summe ist jetzt als Summe ueber die rechte
Randfamilie `(n,w)` definiert; die linke Familie liefert den Faktor zwei.
Der Doppelpol-Koeffizient bleibt konventionsabhaengig, aber kritischer
Exponent und Zaehlordnung sind fuer diese konkrete Definition rigoros.

### 4. Einige Multifraktal-Aussagen sind derzeit Vermutungen, keine Resultate

Der Stand hat sich hier deutlich verbessert: Die Formel fuer positive
periodische Adressen, die Dichte periodischer Werte auf dem Halbstrahl und
der scharfe linke Spektrumsrand folgen nun aus dem geometrischen
Langenvergleich, Perron--Frobenius und der Fibonacci-Schranke.

**Verbleibender Risikobereich:** Die typische Dimension ist durch
Literaturzitate abgesichert. Die Kuspbehauptung
\(\dim_H E(+\infty)=1/2\), die Ebenensummen und die Dimension allgemeiner
Niveaumengen bleiben jedoch echte Forschungsfragen und muessen als
Vermutung beziehungsweise offene Frage markiert bleiben.

### 5. ``Konjugiert'' sollte vorsichtiger verwendet werden

Der dyadische Baum und der Stern--Brocot-Baum sind kombinatorisch derselbe
volle geordnete Binaerbaum. Auf den Intervallraendern gibt es jedoch
Doppelkodierungen, und die beiden metrischen Realisierungen haben sehr
verschiedenes Verhalten. ``Topologische Konjugation'' ist ohne explizite
Quotientenraeume zu stark.

**Erforderliche Revision:** Schreibe zunaechst: ``Die Modelle besitzen
denselben symbolischen Baum; ihre Randabbildungen sind unterschiedliche
metrische Realisierungen derselben Kodierung.'' Eine echte Konjugation kann
spaeter als praezise Proposition folgen.

## Was bereits sehr gut funktioniert

- Die Motivation ist klar und nicht kuenstlich: Die Metrikfrage entsteht
  wirklich aus der Geometrie.
- Die Logit-Koordinate ist die richtige einfache Sprache fuer die
  Moebius-Dynamik. Sie macht die Silberzahl als Schrittweite sichtbar.
- Die Zeta-Funktion und der kritische Exponent sind eine produktive
  Verengung: Sie machen aus vielen Beobachtungen ein pruefbares Programm.
- Die parabolische Kusp verbindet die elementaren Randlaeufe direkt mit
  einem nichttrivialen multifraktalen Phanomen.

## Empfohlene Paper-Architektur

1. **Geometrie und Hauptsatz:** exakte Skelettkonfiguration, Projektion,
   Rekonstruktionsformel und Moebius-Schritt.

2. **Symbolische Kodierung:** Randverfeinerung, Matrizen, eindeutige
   Kodierung bis auf Endpunkte und das Woerter--Luecken-Woerterbuch.

3. **Arithmetische Folgen:** Zeta-Funktion, kritischer Exponent und
   Lueckenzaehlung. Hier nur Resultate, die wirklich aus Abschnitt 2
   folgen.

4. **Multifraktale Fragen:** periodische Punkte als Propositionen; typische
   Dimension, Kusp und Spektrum als sauber getrennte Vermutungen oder als
   zweites Projekt.

## Konkrete naechste Beweise

1. Entscheiden, ob die nicht an einen Rand gebundenen Dreiecksluecken einen
   eigenen kritischen Exponenten beitragen.
2. Die Teilfamilien in eine wohldefinierte Zeta-Funktion der vollstaendigen
   zweidimensionalen Packung zusammensetzen.
3. Erst danach: die Multifraktal-Aussagen an den nun echten Randbaum
   anschliessen.

## Editoriale Hinweise

Der LaTeX-Entwurf verwendet nun UTF-8, das deutsche `babel`-Paket und eine
geometrische TikZ-Hauptabbildung. Vor einer Einreichung sollten Autorenschaft,
ein kurzer Literaturteil und eine zweite Abbildung mit Logit-Achse und den
ersten `L/R`-Verfeinerungen ergaenzt werden.

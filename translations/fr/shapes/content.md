# Aires et Formes Géométriques

## Introduction

> section: introduction
> id: intro
> color: "#0F82F2"
> level: Foundations

::: column.grow

Dans la vie quotidienne, nous avons souvent besoin de mesurer des surfaces : la taille d'un appartement, la surface d'un terrain de football, ou la quantité de peinture nécessaire pour un mur.

L'**aire** d'une figure est la mesure de la surface qu'elle occupe. L'aire s'exprime en unités carrées : cm², m², km²...

Le **périmètre** d'une figure est la longueur de son contour. Le périmètre s'exprime en unités de longueur : cm, m, km...

::: column(width=300)

    x-img(src="images/park.jpg" width=300 height=200)

{.caption} Calculer l'aire d'un parc permet de savoir combien de gazon il faut acheter.

:::

---
> id: perimeter-vs-area

### Périmètre ou Aire ?

Dans chaque situation, détermine s'il faut calculer le périmètre ou l'aire :

::: column.grow
1. Pour savoir combien de moquette acheter pour couvrir le sol d'une pièce, on calcule l'[[aire|périmètre]] de la pièce.
::: column(width=200)
    x-img(width=200 height=133 src="images/carpet.jpg")
:::

::: column.grow
2. Pour savoir quelle longueur de clôture acheter pour entourer un jardin, on calcule le [[périmètre|aire]] du jardin.
::: column(width=200)
    x-img(width=200 height=133 src="images/fence.jpg")
:::

::: column.grow
3. Pour savoir combien de peinture acheter pour peindre un mur, on calcule l'[[aire|périmètre]] du mur.
::: column(width=200)
    x-img(width=200 height=133 src="images/paint.jpg")
:::

---
> id: units

### Unités de mesure

Pour mesurer des longueurs, on utilise le **mètre** et ses multiples :
- 1 kilomètre (km) = 1000 mètres
- 1 mètre (m) = 100 centimètres
- 1 centimètre (cm) = 10 millimètres

Pour mesurer des aires, on utilise le **mètre carré** et ses multiples :
- 1 m² = 10 000 cm² (car 100 × 100 = 10 000)
- 1 km² = 1 000 000 m² (car 1000 × 1000 = 1 000 000)

Un **mètre carré** (m²) est l'aire d'un carré de 1 mètre de côté.
Un **centimètre carré** (cm²) est l'aire d'un carré de 1 centimètre de côté.

---

## Rectangles et Carrés

> section: rectangles
> id: rectangle-area

### Aire d'un rectangle

::: column.grow

Pour calculer l'aire d'un rectangle, on peut le remplir de carrés unitaires et les compter.

Un rectangle de 5 cm de longueur et 3 cm de largeur contient 5 × 3 = [[15]] carrés d'un centimètre carré.

Donc l'**aire du rectangle** = longueur × largeur

{.text-center} `A = L × l`

::: column(width=280)

    x-geopad(width=280 height=200): svg
      - var x0 = 20
      - var y0 = 20
      - var cellSize = 40
      - for (var i = 0; i < 5; i++)
        - for (var j = 0; j < 3; j++)
          rect(x=x0+i*cellSize y=y0+j*cellSize width=cellSize height=cellSize fill="rgba(15,130,242,0.3)" stroke="#0F82F2")
      path.blue(x=`polygon(point(${x0},${y0}),point(${x0+5*cellSize},${y0}),point(${x0+5*cellSize},${y0+3*cellSize}),point(${x0},${y0+3*cellSize}))` stroke-width=2)

:::

---
> id: rectangle-perimeter

### Périmètre d'un rectangle

::: column.grow

Le périmètre d'un rectangle est la somme des longueurs de ses quatre côtés.

Un rectangle a deux longueurs égales et deux largeurs égales.

Donc le **périmètre du rectangle** = 2 × longueur + 2 × largeur

{.text-center} `P = 2L + 2l` ou `P = 2(L + l)`

::: column(width=280)

    x-geopad(width=280 height=180): svg
      circle(name="a" x="point(30,30)")
      circle(name="b" x="point(250,30)")
      circle(name="c" x="point(250,150)")
      circle(name="d" x="point(30,150)")
      path.blue(x="segment(a,b)" label="L")
      path.red(x="segment(b,c)" label="l")
      path.blue(x="segment(c,d)" label="L")
      path.red(x="segment(d,a)" label="l")

:::

---
> id: square

### Le carré

Un carré est un rectangle particulier dont tous les côtés sont égaux.

::: column.grow

Si le côté du carré mesure _c_, alors :

- **Aire du carré** = côté × côté = c²
- **Périmètre du carré** = 4 × côté = 4c

::: column(width=200)

    x-geopad(width=200 height=200): svg
      circle(name="a" x="point(20,20)")
      circle(name="b" x="point(180,20)")
      circle(name="c" x="point(180,180)")
      circle(name="d" x="point(20,180)")
      path.blue(x="polygon(a,b,c,d)")
      path.blue(x="segment(a,b)" label="c")
      path.blue(x="segment(b,c)" label="c")

:::

---
> id: rectangle-exercises

### Exercices

{.text-center} Un rectangle mesure 8 cm de longueur et 5 cm de largeur.

Son aire est : `8 × 5 =` [[40]] cm²

Son périmètre est : `2 × (8 + 5) =` [[26]] cm

---

## Parallélogrammes

> section: parallelograms
> id: parallelogram

Un **parallélogramme** est un quadrilatère dont les côtés opposés sont parallèles.

::: column.grow

Pour calculer l'aire d'un parallélogramme, on peut le transformer en rectangle :

1. On "coupe" un triangle à droite
2. On le "colle" à gauche
3. On obtient un rectangle !

L'**aire du parallélogramme** = base × hauteur

{.text-center} `A = b × h`

Attention : la hauteur est [[perpendiculaire|parallèle|égale]] à la base !

::: column(width=300)

    x-geopad(width=300 height=200): svg
      circle(name="a" x="point(40,150)")
      circle(name="b" x="point(260,150)")
      circle(name="c" x="point(220,50)")
      circle(name="d" x="point(0,50)")
      path.fill.blue.light(x="polygon(a,b,c,d)")
      path.blue(x="polygon(a,b,c,d)")
      path.red(x="segment(d,a)" label="h" arrows="both")
      path.green(x="segment(a,b)" label="b")

:::

---

## Triangles

> section: triangles
> id: triangle-area

### Aire d'un triangle

::: column.grow

Un triangle est la moitié d'un parallélogramme (ou d'un rectangle).

Si on double un triangle, on obtient un parallélogramme d'aire base × hauteur.

Donc l'**aire du triangle** = (base × hauteur) ÷ 2

{.text-center} `A = (b × h) / 2`

::: column(width=300)

    x-geopad(width=300 height=200): svg
      circle(name="a" x="point(150,30)")
      circle(name="b" x="point(40,170)")
      circle(name="c" x="point(260,170)")
      path.fill.red.light(x="triangle(a,b,c)")
      path.red(x="triangle(a,b,c)")
      path.blue.dashed(x="segment(a,point(150,170))" label="h")
      path.green(x="segment(b,c)" label="b")

:::

---
> id: triangle-example

### Exemple

{.text-center} Un triangle a une base de 6 cm et une hauteur de 4 cm.

Son aire est : `(6 × 4) ÷ 2 =` [[12]] cm²

---

## Polygones

> section: polygons
> id: polygons-intro

Un **polygone** est une figure plane fermée délimitée par des segments de droite.

::: column(width=180)

    x-geopad(width=180 height=150): svg
      circle(name="a" x="point(90,20)")
      circle(name="b" x="point(160,80)")
      circle(name="c" x="point(140,140)")
      circle(name="d" x="point(40,140)")
      circle(name="e" x="point(20,80)")
      path.fill.blue.light(x="polygon(a,b,c,d,e)")
      path.blue(x="polygon(a,b,c,d,e)")

{.caption} Pentagone (5 côtés)

::: column(width=180)

    x-geopad(width=180 height=150): svg
      circle(name="a1" x="point(90,20)")
      circle(name="b1" x="point(160,50)")
      circle(name="c1" x="point(160,110)")
      circle(name="d1" x="point(90,140)")
      circle(name="e1" x="point(20,110)")
      circle(name="f1" x="point(20,50)")
      path.fill.green.light(x="polygon(a1,b1,c1,d1,e1,f1)")
      path.green(x="polygon(a1,b1,c1,d1,e1,f1)")

{.caption} Hexagone (6 côtés)

::: column(width=180)

    x-geopad(width=180 height=150): svg
      circle(name="a2" x="point(90,15)")
      circle(name="b2" x="point(145,35)")
      circle(name="c2" x="point(165,90)")
      circle(name="d2" x="point(145,140)")
      circle(name="e2" x="point(90,155)")
      circle(name="f2" x="point(35,140)")
      circle(name="g2" x="point(15,90)")
      circle(name="h2" x="point(35,35)")
      path.fill.orange.light(x="polygon(a2,b2,c2,d2,e2,f2,g2,h2)")
      path.orange(x="polygon(a2,b2,c2,d2,e2,f2,g2,h2)")

{.caption} Octogone (8 côtés)

:::

Un polygone **régulier** a tous ses côtés égaux et tous ses angles égaux.

---

## Cercles et Circonférence

> section: circles
> id: circle-intro

### Le cercle

::: column.grow

Un **cercle** est l'ensemble des points situés à égale distance d'un point central appelé le **centre**.

Cette distance constante s'appelle le **rayon** (_r_).

Le **diamètre** (_d_) est un segment qui passe par le centre et relie deux points du cercle. Le diamètre est [[deux fois|égal à|la moitié du]] le rayon.

{.text-center} `d = 2r`

::: column(width=280)

    x-geopad(width=280 height=280): svg
      circle(name="o" x="point(140,140)")
      circle(name="p" x="point(240,140)")
      circle(name="q" x="point(40,140)")
      path.blue(x="circle(o,100)")
      path.red(x="segment(o,p)" label="r")
      path.green(x="segment(q,p)" label="d")
      circle.red(x="o" label="O")

:::

---
> id: circumference

### Périmètre du cercle (circonférence)

Le périmètre d'un cercle s'appelle la **circonférence**.

Les mathématiciens ont découvert que le rapport entre la circonférence et le diamètre est toujours le même, quel que soit le cercle. Ce nombre s'appelle **Pi** (π).

{.text-center} `π ≈ 3,14159...`

La **circonférence** = π × diamètre = 2 × π × rayon

{.text-center} `C = π × d = 2πr`

---
> id: circumference-example

### Exemple

{.text-center} Un cercle a un rayon de 5 cm.

Sa circonférence est : `2 × π × 5 = 10π ≈` [[31,4]] cm (arrondi au dixième)

---

## Aire du Cercle

> section: circle-area
> id: circle-area

### Aire d'un disque

::: column.grow

Pour trouver l'aire d'un disque (l'intérieur d'un cercle), on peut le découper en secteurs et les réarranger pour former approximativement un rectangle.

Plus on découpe de secteurs, plus la forme ressemble à un rectangle de :
- largeur = rayon (_r_)
- longueur = moitié de la circonférence = πr

L'**aire du disque** = π × rayon²

{.text-center} `A = πr²`

::: column(width=280)

    x-geopad(width=280 height=280): svg
      circle(name="o" x="point(140,140)")
      path.fill.blue.light(x="circle(o,100)")
      path.blue(x="circle(o,100)")

:::

---
> id: circle-area-example

### Exemple

{.text-center} Un disque a un rayon de 3 cm.

Son aire est : `π × 3² = 9π ≈` [[28,3]] cm² (arrondi au dixième)

---

## Résumé des Formules

> section: summary
> id: formulas

| Figure | Aire | Périmètre |
|--------|------|-----------|
| Rectangle | `L × l` | `2(L + l)` |
| Carré | `c²` | `4c` |
| Parallélogramme | `b × h` | Somme des côtés |
| Triangle | `(b × h) / 2` | Somme des côtés |
| Cercle/Disque | `πr²` | `2πr` |

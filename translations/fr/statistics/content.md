# Statistiques

## Introduction

> id: intro
> section: introduction
> description: Apprends à collecter, organiser et analyser des données avec les outils statistiques.
> color: "#8E44AD"
> level: Foundations
> next: probability

::: column.grow

Les **statistiques** sont partout dans notre vie quotidienne : notes de classe, résultats sportifs, sondages, météo, données de santé…

Savoir lire et interpréter des données est une compétence essentielle. Les statistiques nous permettent de **résumer** de grandes quantités d'informations en quelques nombres clés.

::: column(width=300)

    x-img(src="images/statistics.jpg" width=300 height=200)

:::

---
> id: exemple-intro

### Un exemple concret

Voici les notes obtenues par 10 élèves à un contrôle de mathématiques :

{.text-center} 12, 8, 15, 14, 10, 12, 16, 9, 12, 11

Comment résumer ces données ? Quelle est la note « typique » de cette classe ? Les statistiques vont nous donner les outils pour répondre à ces questions.

---

## Vocabulaire statistique

> id: vocabulaire
> section: vocabulaire

### Série statistique

Une **série statistique** est un ensemble de données collectées lors d'une étude ou d'une enquête.

::: column(width=200)

    x-img(src="images/survey.jpg" width=200 height=150)

::: column.grow

**Exemple :** On interroge les élèves d'une classe sur leur sport préféré. Les réponses forment une série statistique.

:::

---
> id: population

### Population et individu

- La **population** est l'ensemble des personnes ou objets étudiés.
- Chaque élément de la population est appelé **individu**.

**Exemple :** On étudie les tailles des élèves d'un collège.
- Population : [[tous les élèves du collège|un seul élève|les professeurs]]
- Individu : [[un élève|le collège|la classe]]

---
> id: caractere

### Caractère

Le **caractère** est la propriété étudiée sur chaque individu.

::: column.grow

Un caractère peut être :
- **Quantitatif** : il s'exprime par un nombre (âge, taille, note…)
- **Qualitatif** : il s'exprime par un mot ou une catégorie (couleur des yeux, sport préféré…)

::: column(width=200)

    x-img(src="images/data-types.png" width=200 height=150)

:::

**Exercice :** Classe ces caractères :

| Caractère | Type |
|-----------|------|
| La taille en cm | [[Quantitatif|Qualitatif]] |
| La couleur préférée | [[Qualitatif|Quantitatif]] |
| Le nombre de frères et sœurs | [[Quantitatif|Qualitatif]] |
| La nationalité | [[Qualitatif|Quantitatif]] |

---
> id: effectif

### Effectif et effectif total

L'**effectif** d'une valeur est le nombre de fois où cette valeur apparaît dans la série.

L'**effectif total** est le nombre total d'individus de la série.

**Exemple :** Notes d'un contrôle : 12, 8, 15, 12, 10, 12, 16, 9, 12, 11

| Note | Effectif |
|------|----------|
| 8 | 1 |
| 9 | 1 |
| 10 | 1 |
| 11 | 1 |
| 12 | [[4]] |
| 15 | 1 |
| 16 | 1 |
| **Total** | **[[10]]** |

---
> id: frequence

### Fréquence

La **fréquence** d'une valeur est le rapport de son effectif à l'effectif total.

{.text-center.formula} `"Fréquence" = "Effectif de la valeur"/"Effectif total"`

La fréquence peut s'exprimer en **pourcentage** en multipliant par 100.

**Exemple :** Dans la série précédente, la note 12 apparaît 4 fois sur 10.

- Fréquence de 12 : `4/10 = 0.4` soit [[40]]%

---

## Représentations graphiques

> id: graphiques
> section: graphiques

### Diagramme en bâtons

Le **diagramme en bâtons** est utilisé pour représenter des données discrètes (qui prennent des valeurs isolées).

::: column(width=400)

    x-img(src="images/bar-chart.png" width=400 height=250)

::: column.grow

Chaque bâton représente une valeur. La hauteur du bâton correspond à l'effectif de cette valeur.

:::

---
> id: diagramme-circulaire

### Diagramme circulaire

Le **diagramme circulaire** (ou « camembert ») représente les fréquences sous forme de parts de disque.

::: column(width=250)

    x-img(src="images/pie-chart.png" width=250 height=250)

::: column.grow

L'angle de chaque secteur est proportionnel à la fréquence :

{.text-center} `"Angle" = "Fréquence" × 360°`

**Exemple :** Si une catégorie représente 25% des données, son angle sera :

`0.25 × 360° =` [[90]]°

:::

---
> id: histogramme

### Histogramme

L'**histogramme** est utilisé pour représenter des données regroupées en classes.

::: column(width=400)

    x-img(src="images/histogram.png" width=400 height=250)

::: column.grow

Contrairement au diagramme en bâtons, les rectangles sont **collés** les uns aux autres car les classes sont continues.

L'**aire** de chaque rectangle est proportionnelle à l'effectif de la classe.

:::

---

## La moyenne

> id: moyenne
> section: moyenne

### Définition

La **moyenne** d'une série statistique est le quotient de la somme de toutes les valeurs par l'effectif total.

{.text-center.formula} `"Moyenne" = "Somme des valeurs"/"Effectif total"`

---
> id: moyenne-exemple

### Exemple de calcul

Calculons la moyenne des notes : 12, 8, 15, 14, 10, 12, 16, 9, 12, 11

**Étape 1 :** Calculer la somme des valeurs
`12 + 8 + 15 + 14 + 10 + 12 + 16 + 9 + 12 + 11 =` [[119]]

**Étape 2 :** Diviser par l'effectif total
`"Moyenne" = 119/10 =` [[11.9]]

La moyenne de la classe est donc **11,9**.

---
> id: moyenne-ponderee

### Moyenne pondérée

Quand on connaît les effectifs de chaque valeur, on peut utiliser la **moyenne pondérée** :

{.text-center.formula} Moyenne = (n₁ × v₁ + n₂ × v₂ + …) / (n₁ + n₂ + …)

où _n_ est l'effectif de la valeur _v_.

**Exemple :**

| Note | Effectif |
|------|----------|
| 10 | 5 |
| 12 | 8 |
| 15 | 7 |

`"Moyenne" = (5×10 + 8×12 + 7×15)/(5 + 8 + 7) = (50 + 96 + 105)/20 = 251/20 =` [[12.55±0.01]]

---
> id: moyenne-proprietes

### Propriétés de la moyenne

::: column.grow

**Attention aux valeurs extrêmes !**

La moyenne est sensible aux valeurs très grandes ou très petites.

**Exemple :** Salaires dans une entreprise :
1500€, 1600€, 1700€, 1800€, 15000€

Moyenne = `(1500 + 1600 + 1700 + 1800 + 15000)/5 =` [[4320]]€

::: column(width=200)

    x-img(src="images/outlier.png" width=200 height=150)

:::

{.reveal(when="blank-0")} Cette moyenne de 4320€ ne représente pas bien les salaires « typiques » car une seule valeur extrême (15000€) la tire vers le haut.

---

## La médiane

> id: mediane
> section: mediane

### Définition

La **médiane** d'une série statistique est la valeur qui partage la série ordonnée en deux parties de même effectif.

- 50% des valeurs sont inférieures ou égales à la médiane
- 50% des valeurs sont supérieures ou égales à la médiane

---
> id: mediane-methode

### Méthode de calcul

**Étape 1 :** Ranger les valeurs dans l'ordre croissant.

**Étape 2 :**
- Si l'effectif total `n` est **impair** : la médiane est la valeur de rang `(n+1)/2`
- Si l'effectif total `n` est **pair** : la médiane est la moyenne des valeurs de rang `n/2` et `n/2 + 1`

---
> id: mediane-exemple1

### Exemple avec effectif impair

Série : 3, 7, 2, 9, 5, 1, 8

**Étape 1 :** Ordre croissant → 1, 2, 3, [[5]], 7, 8, 9

**Étape 2 :** Effectif = 7 (impair)
- Rang de la médiane : `(7+1)/2 = 4`
- La médiane est la 4ème valeur : **5**

---
> id: mediane-exemple2

### Exemple avec effectif pair

Série : 12, 8, 15, 14, 10, 12, 16, 9, 12, 11

**Étape 1 :** Ordre croissant → 8, 9, 10, 11, 12, 12, 12, 14, 15, 16

**Étape 2 :** Effectif = 10 (pair)
- Rangs : `10/2 = 5` et `10/2 + 1 = 6`
- Valeurs aux rangs 5 et 6 : 12 et 12
- Médiane : `(12 + 12)/2 =` [[12]]

---
> id: mediane-vs-moyenne

### Médiane vs Moyenne

::: column.grow

Reprenons l'exemple des salaires :
1500€, 1600€, 1700€, 1800€, 15000€

- **Moyenne** = 4320€
- **Médiane** = [[1700]]€ (valeur centrale)

La médiane de 1700€ représente mieux le salaire « typique » car elle n'est pas influencée par la valeur extrême.

::: column(width=200)

    x-img(src="images/median-vs-mean.png" width=200 height=150)

:::

{.reveal(when="blank-0")} La médiane est plus **robuste** que la moyenne face aux valeurs extrêmes.

---

## L’étendue

> id: etendue
> section: etendue

### Définition

L'**étendue** d'une série statistique est la différence entre la plus grande valeur et la plus petite valeur.

{.text-center.formula} `"Étendue" = "Valeur maximale" - "Valeur minimale"`

L'étendue mesure la **dispersion** des données.

---
> id: etendue-exemple

### Exemple

Série de notes : 8, 9, 10, 11, 12, 12, 12, 14, 15, 16

- Valeur maximale : [[16]]
- Valeur minimale : [[8]]
- Étendue : `16 - 8 =` [[8]]

---
> id: etendue-interpretation

### Interprétation

::: column.grow

**Série A :** 10, 11, 12, 13, 14 → Étendue = 4
**Série B :** 2, 8, 12, 16, 22 → Étendue = 20

Les deux séries ont la même moyenne (12), mais :
- Série A : valeurs **regroupées** (faible étendue)
- Série B : valeurs **dispersées** (grande étendue)

::: column(width=200)

    x-img(src="images/spread.png" width=200 height=150)

:::

Plus l'étendue est [[grande|petite]], plus les valeurs sont dispersées.

---

## Les quartiles

> id: quartiles
> section: quartiles

### Définition

Les **quartiles** divisent une série ordonnée en quatre parties égales.

- **Premier quartile Q₁** : 25% des valeurs lui sont inférieures
- **Deuxième quartile Q₂** : c'est la médiane (50%)
- **Troisième quartile Q₃** : 75% des valeurs lui sont inférieures

---
> id: quartiles-methode

### Méthode de calcul

Pour trouver Q₁ et Q₃ :

1. Ranger les valeurs dans l'ordre croissant
2. Q₁ est la médiane de la première moitié
3. Q₃ est la médiane de la seconde moitié

---
> id: quartiles-exemple

### Exemple

Série ordonnée : 2, 4, 5, 7, 8, 9, 10, 12, 14, 15, 18, 20

Effectif = 12

**Première moitié :** 2, 4, 5, 7, 8, 9
- Q₁ = médiane de cette moitié = `(5 + 7)/2 =` [[6]]

**Seconde moitié :** 10, 12, 14, 15, 18, 20
- Q₃ = médiane de cette moitié = `(14 + 15)/2 =` [[14.5]]

**Médiane (Q₂) :** `(9 + 10)/2 = 9.5`

---
> id: ecart-interquartile

### Écart interquartile

L'**écart interquartile** est la différence entre Q₃ et Q₁ :

{.text-center.formula} `"Écart interquartile" = Q_3 - Q_1`

Il mesure la dispersion des 50% des valeurs centrales.

**Dans notre exemple :** `14.5 - 6 =` [[8.5]]

---
> id: boite-moustaches

### Diagramme en boîte (boîte à moustaches)

Le **diagramme en boîte** résume les données avec 5 valeurs :

::: column(width=400)

    x-img(src="images/box-plot.png" width=400 height=150)

::: column.grow

1. Minimum
2. Premier quartile Q₁
3. Médiane Q₂
4. Troisième quartile Q₃
5. Maximum

:::

---

## Résumé

> id: resume
> section: resume

### Ce qu'il faut retenir

::: .box.blue

#### Vocabulaire
- **Série statistique** : ensemble de données
- **Effectif** : nombre d'occurrences d'une valeur
- **Fréquence** : effectif / effectif total

:::

::: .box.green

#### Indicateurs de position

{.text-center} `"Moyenne" = "Somme des valeurs"/"Effectif total"`

La **médiane** est la valeur centrale d'une série ordonnée.

:::

::: .box.red

#### Indicateurs de dispersion

{.text-center} `"Étendue" = "Maximum" - "Minimum"`

{.text-center} `"Écart interquartile" = Q_3 - Q_1`

:::

::: .box.yellow

#### Quand utiliser quoi ?
- **Moyenne** : données sans valeurs extrêmes
- **Médiane** : données avec valeurs extrêmes
- **Étendue** : vision globale de la dispersion
- **Quartiles** : analyse plus fine de la répartition

:::

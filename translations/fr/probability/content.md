# Probabilités

## Introduction

> id: intro
> section: introduction
> description: Dés, pièces et cartes – découvre les probabilités, un domaine des mathématiques plein de surprises et d'applications dans la vie réelle.
> color: "#CD0E66"
> level: Foundations
> next: statistics

Les probabilités sont partout autour de nous : météo, jeux de société, loterie… Mais qu'est-ce qu'une probabilité exactement ?

::: column.grow
Imagine que tu joues à pile ou face avec un ami. Si la pièce tombe sur _pile_, tu gagnes un point. Si elle tombe sur _face_, ton ami gagne un point.

Ce jeu est-il équitable ? Intuitivement, tu sens que oui : chaque joueur a autant de chances de gagner.

Mais comment peut-on **mesurer** ces chances ? C'est exactement ce que font les **probabilités** !
::: column(width=300)

    x-img(src="images/coins.jpg" width=300 height=200)

:::

---
> id: vocab
> section: vocabulary

## Vocabulaire des probabilités

> id: experience-aleatoire

### Expérience aléatoire

Une **expérience aléatoire** est une expérience dont on ne peut pas prévoir le résultat à l'avance. Le résultat dépend du hasard.

::: column(width=160)

    x-img(src="images/dice.png" width=160 height=160)

{.caption} Lancer un dé
::: column(width=160)

    x-img(src="images/coins.jpg" width=160 height=160)

{.caption} Lancer une pièce
::: column(width=160)

    x-img(src="images/cards.jpg" width=160 height=160)

{.caption} Tirer une carte
:::

Exemples d'expériences aléatoires :
- Lancer un dé et regarder le numéro obtenu
- Lancer une pièce et regarder si c'est pile ou face
- Tirer une carte dans un jeu de 32 cartes

---
> id: issues

### Issues

Les **issues** sont tous les résultats possibles d'une expérience aléatoire.

{.text-center} Quand on lance un dé à 6 faces, les issues possibles sont : **1, 2, 3, 4, 5, 6**

Il y a donc [[6]] issues possibles.

---
> id: evenement

### Événement

Un **événement** est un ensemble d'issues. On dit qu'un événement est **réalisé** quand l'issue obtenue fait partie de cet ensemble.

**Exemple :** On lance un dé. L'événement « obtenir un nombre pair » est réalisé si on obtient [[2, 4 ou 6|1, 3 ou 5|seulement 2]].

::: column.grow

**Événement certain** : Un événement qui se réalise toujours.
- _Exemple : « Obtenir un nombre entre 1 et 6 » avec un dé._

**Événement impossible** : Un événement qui ne se réalise jamais.
- _Exemple : « Obtenir 7 » avec un dé à 6 faces._

::: column(width=200)

    x-img(src="images/line-2.png" width=200 height=200)

:::

---
> id: equiprobabilite

### Équiprobabilité

Des événements sont **équiprobables** quand ils ont tous la même chance de se produire.

Quand on lance un dé équilibré, chaque face a la même chance de sortir. On dit que les 6 issues sont [[équiprobables|impossibles|certaines]].

---

## Calculer une probabilité

> id: prob-def
> section: calcul

### Définition

La **probabilité** d'un événement est un nombre entre **0** et **1** qui mesure les chances que cet événement se réalise.

    .p-line.clearfix
      .p-line-label(style="left: 0%") 0
      .p-line-label(style="left: 50%") 0.5
      .p-line-label(style="left: 100%") 1
      .p-line-desc(style="left: 0%") Impossible
      .p-line-desc(style="left: 50%") 1 chance sur 2
      .p-line-desc(style="left: 100%") Certain

- Une probabilité de **0** signifie que l'événement est [[impossible|certain]].
- Une probabilité de **1** signifie que l'événement est [[certain|impossible]].
- Une probabilité de **0.5** (ou 1/2) signifie qu'on a une chance sur deux.

---
> id: formule

### Formule fondamentale

Dans une situation d'**équiprobabilité**, la probabilité d'un événement se calcule avec la formule :

{.text-center.formula} `P(événement) = ("Nombre d'issues favorables")/("Nombre total d'issues")`

**Exemple :** On lance un dé équilibré. Quelle est la probabilité d'obtenir un 6 ?

- Nombre d'issues favorables : [[1]] (seulement le 6)
- Nombre total d'issues : [[6]]
- Probabilité : `P("obtenir 6") = 1/6 ≈ 0.167`

---
> id: exemple-de

### Exemples avec un dé

On lance un dé équilibré à 6 faces. Calcule les probabilités suivantes :

**1. Probabilité d'obtenir un nombre pair**
- Issues favorables : 2, 4, 6 → il y en a [[3]]
- `P("pair") = 3/6 =` [[0.5]]

**2. Probabilité d'obtenir un nombre supérieur à 4**
- Issues favorables : 5, 6 → il y en a [[2]]
- `P("supérieur à 4") = 2/6 =` [[0.33±0.01]]

**3. Probabilité d'obtenir un nombre entre 1 et 6**
- Issues favorables : 1, 2, 3, 4, 5, 6 → il y en a [[6]]
- `P("entre 1 et 6") = 6/6 =` [[1]] (événement certain !)

---
> id: exemple-piece

### Exemple avec une pièce

On lance une pièce équilibrée.

- Nombre d'issues possibles : [[2]] (pile ou face)
- Probabilité d'obtenir pile : `P("pile") = 1/2 =` [[0.5]]
- Probabilité d'obtenir face : `P("face") = 1/2 =` [[0.5]]

{.reveal(when="blank-0 blank-1 blank-2")} Remarque : `P("pile") + P("face") = 1`. C'est normal car pile et face sont les seules issues possibles !

---

## Somme de deux dés

> id: deux-des
> section: deux-des

### Lancer deux dés

Quand on lance **deux dés** en même temps et qu'on additionne les résultats, on peut obtenir des sommes allant de [[2]] à [[12]].

Mais attention : toutes ces sommes ne sont **pas équiprobables** !

---
> id: tableau-des

### Tableau des possibilités

Ce tableau montre toutes les façons d'obtenir chaque somme :

    include mixins
    table.dice-table
      tr
        td #[.dice.outline 2]
        td #[.dice.outline 3]
        td #[.dice.outline 4]
        td #[.dice.outline 5]
        td #[.dice.outline 6]
        td #[.dice.outline 7]
        td #[.dice.outline 8]
        td #[.dice.outline 9]
        td #[.dice.outline 10]
        td #[.dice.outline 11]
        td #[.dice.outline 12]
      tr
        td #[.dice #[+dice(1)]] #[.dice #[+dice(1)]]
        td #[.dice #[+dice(1)]] #[.dice #[+dice(2)]]
        td #[.dice #[+dice(1)]] #[.dice #[+dice(3)]]
        td #[.dice #[+dice(1)]] #[.dice #[+dice(4)]]
        td #[.dice #[+dice(1)]] #[.dice #[+dice(5)]]
        td #[.dice #[+dice(1)]] #[.dice #[+dice(6)]]
        td #[.dice #[+dice(2)]] #[.dice #[+dice(6)]]
        td #[.dice #[+dice(3)]] #[.dice #[+dice(6)]]
        td #[.dice #[+dice(4)]] #[.dice #[+dice(6)]]
        td #[.dice #[+dice(5)]] #[.dice #[+dice(6)]]
        td #[.dice #[+dice(6)]] #[.dice #[+dice(6)]]
      tr
        td
        td #[.dice #[+dice(2)]] #[.dice #[+dice(1)]]
        td #[.dice #[+dice(2)]] #[.dice #[+dice(2)]]
        td #[.dice #[+dice(2)]] #[.dice #[+dice(3)]]
        td #[.dice #[+dice(2)]] #[.dice #[+dice(4)]]
        td #[.dice #[+dice(2)]] #[.dice #[+dice(5)]]
        td #[.dice #[+dice(3)]] #[.dice #[+dice(5)]]
        td #[.dice #[+dice(4)]] #[.dice #[+dice(5)]]
        td #[.dice #[+dice(5)]] #[.dice #[+dice(5)]]
        td #[.dice #[+dice(6)]] #[.dice #[+dice(5)]]
        td
      tr
        td(colspan=2)
        td #[.dice #[+dice(3)]] #[.dice #[+dice(1)]]
        td #[.dice #[+dice(3)]] #[.dice #[+dice(2)]]
        td #[.dice #[+dice(3)]] #[.dice #[+dice(3)]]
        td #[.dice #[+dice(3)]] #[.dice #[+dice(4)]]
        td #[.dice #[+dice(4)]] #[.dice #[+dice(4)]]
        td #[.dice #[+dice(5)]] #[.dice #[+dice(4)]]
        td #[.dice #[+dice(6)]] #[.dice #[+dice(4)]]
        td(colspan=2)
      tr
        td(colspan=3)
        td #[.dice #[+dice(4)]] #[.dice #[+dice(1)]]
        td #[.dice #[+dice(4)]] #[.dice #[+dice(2)]]
        td #[.dice #[+dice(4)]] #[.dice #[+dice(3)]]
        td #[.dice #[+dice(5)]] #[.dice #[+dice(3)]]
        td #[.dice #[+dice(6)]] #[.dice #[+dice(3)]]
        td(colspan=3)
      tr
        td(colspan=4)
        td #[.dice #[+dice(5)]] #[.dice #[+dice(1)]]
        td #[.dice #[+dice(5)]] #[.dice #[+dice(2)]]
        td #[.dice #[+dice(6)]] #[.dice #[+dice(2)]]
        td(colspan=4)
      tr
        td(colspan=5)
        td #[.dice #[+dice(6)]] #[.dice #[+dice(1)]]
        td(colspan=5)

---
> id: analyse-tableau

### Analyse du tableau

En comptant dans le tableau :

- La somme la plus probable est _{span.dice.outline}7_ avec [[6]] façons de l'obtenir.
- Les sommes les moins probables sont _{span.dice.outline}2_ et _{span.dice.outline}12_ avec [[1]] seule façon chacune.

Il y a **36** combinaisons possibles au total (6 × 6).

Donc : `P("obtenir 7") = 6/36 = 1/6 ≈ 0.167`

Et : `P("obtenir 2") = 1/36 ≈ 0.028`

---

## Simulation et fréquences

> id: simulation
> section: simulation

### L'approche fréquentiste

On peut **estimer** une probabilité en répétant une expérience aléatoire un grand nombre de fois et en calculant la **fréquence** de l'événement.

{.text-center} `"Fréquence" = ("Nombre de fois où l'événement se réalise")/("Nombre total d'expériences")`

---
> id: dice-simulation
> goals: roll
> title: Simulation de lancers de dés

### Simulation interactive

Lance des dés virtuels et observe comment les fréquences se rapprochent des probabilités théoriques :

::: .box.red

#### Lancer de dés

    .probTable.var(:html="probTable(d)")

Nous lançons ${d}{d|2|1,6,1} dé(s) en même temps et enregistrons la _{span.dice(style="width: auto; padding: 0 4px;")} SOMME_ des scores. Les __{.m-green} lignes vertes__ représentent les probabilités théoriques et les __{.m-blue} barres bleues__ montrent les fréquences observées.

    p.btn-row.no-voice
      button.btn Lancer 1 fois
      button.btn Lancer 100 fois
      button.btn Lancer 1000 fois

:::

{.reveal(when="roll")} Observe : plus on lance de fois, plus les fréquences (barres bleues) se rapprochent des probabilités théoriques (lignes vertes).

{.reveal(when="roll")} C'est la **loi des grands nombres** : en répétant une expérience un grand nombre de fois, la fréquence observée se rapproche de la probabilité théorique.

---

## Arbres de probabilités

> id: arbres
> section: arbres

### Représenter avec un arbre

Un **arbre de probabilités** permet de représenter toutes les issues d'une expérience aléatoire.

**Exemple :** On lance une pièce deux fois de suite.

::: column(width=300)

```
                    Pile (1/2)
        Pile (1/2) <
                    Face (1/2)
Départ <
                    Pile (1/2)
        Face (1/2) <
                    Face (1/2)
```

::: column.grow

Les issues possibles sont :
- Pile puis Pile (PP)
- Pile puis Face (PF)
- Face puis Pile (FP)
- Face puis Face (FF)

Chaque issue a une probabilité de `1/2 × 1/2 = 1/4`

:::

---
> id: arbre-exercice

### Exercice

On lance une pièce deux fois. Quelle est la probabilité d'obtenir exactement une fois pile ?

- Issues favorables : PF et FP → [[2]] issues
- Nombre total d'issues : [[4]]
- Probabilité : `2/4 =` [[0.5]]

---

## Résumé

> id: resume
> section: resume

### Ce qu'il faut retenir

::: .box.blue

#### Vocabulaire
- **Expérience aléatoire** : expérience dont le résultat dépend du hasard
- **Issue** : résultat possible d'une expérience
- **Événement** : ensemble d'issues
- **Équiprobabilité** : toutes les issues ont la même probabilité

:::

::: .box.green

#### Calcul de probabilité

{.text-center} `P(événement) = ("Nombre d'issues favorables")/("Nombre total d'issues")`

- La probabilité est toujours comprise entre **0** et **1**
- Probabilité 0 = événement impossible
- Probabilité 1 = événement certain
- Probabilité 0.5 = une chance sur deux

:::

::: .box.red

#### Loi des grands nombres
Plus on répète une expérience, plus la fréquence observée se rapproche de la probabilité théorique.

:::

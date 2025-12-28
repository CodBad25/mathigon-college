# Divisibilité et Nombres Premiers

## Facteurs et Multiples

> section: factors-and-multiples
> id: divisibility1
> description: Les nombres premiers représentent à la fois les propriétés les plus fondamentales et les problèmes non résolus les plus complexes. Découvrez ici les briques de base des mathématiques.
> color: "#1AA845"
> level: Foundations

Tu maîtrises maintenant l'addition, la soustraction et la multiplication des nombres entiers. La division est un peu différente, car on ne peut pas toujours diviser un entier par un autre. Par exemple, 17 divisé par 3 ne donne pas un nombre entier - le résultat est entre 5 et 6. On peut soit donner un reste (2), soit exprimer le résultat sous forme décimale (5,66...).

    .row.padded
      .grow
        include svg/divisibility-1.svg
        p.caption 12 est divisible par 3
      .grow
        include svg/divisibility-2.svg
        p.caption 10 n'est pas divisible par 4

Si on peut diviser un nombre __{.m-red}A__ par un nombre __{.m-blue}B__ sans reste, on dit que __{.m-blue}B__ est un __facteur__ (ou __diviseur__) de __{.m-red}A__, et que __{.m-red}A__ est un __multiple__ de __{.m-blue}B__. On écrit souvent __{.m-blue}B__|__{.m-red}A__, où la barre verticale signifie simplement _"divise"_.

Par exemple, __{.m-green}7__ × 3 = __{.m-orange}21__, donc __{.m-green}7__ est un [[facteur|multiple]] de __{.m-orange}21__. De même, __{.m-orange}21__ est un [[multiple|facteur]] de __{.m-green}7__, et on peut écrire __{.m-green}7__|__{.m-orange}21__.

---
> id: divisibility-game

Dans ce petit jeu, tu dois déterminer quels nombres sont des facteurs ou des multiples :

::: .box.blue.no-padding
#### Quiz Facteurs et Multiples

    x-gameplay.factors-quiz
      .circled ${x}
      | est un
      .factor-value
        .factor-bubble: .btn.btn-blue facteur
        .factor-bubble: .btn.btn-blue multiple
        .factor-bubble: .btn.btn-blue ni l'un ni l'autre
      | de
      .circled ${y}

:::

---
> id: factors

Il est souvent utile de trouver _tous_ les facteurs d'un nombre. Par exemple, les facteurs de 60 sont 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30 et 60.

Bien sûr, tu ne veux pas vérifier tous les nombres jusqu'à 60. Il existe une technique simple qui repose sur le fait que les facteurs apparaissent toujours par [[paires|triplets|moitiés]].

---
> id: factors1

Dans le cas de 60, nous avons 60 = 1 × 60 = 2 × 30 = 3 × 20 = 4 × 15 = 5 × 12 = 6 × 10. Ou, dans une autre notation,

    include mixins
    +divisor-table([1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60], [5, 4, 3, 2, 1, 0])

Pour trouver tous les facteurs d'un nombre, nous commençons simplement aux deux extrémités de cette liste, jusqu'à ce que nous nous rencontrions au milieu.

---
> id: factors2

    include mixins
    x-slideshow
      .stage(slot="stage")
        +divisor-table([1, 2, 3, 6, 7, 14, 21, 42], [3, 2, 1, 0])
      .legend(slot="legend") Par exemple, la première paire de facteurs de 42 est simplement 1 et 42, et nous les écrivons avec beaucoup d'espace entre eux.
      .legend(slot="legend") Après 1 au début, nous vérifions si 2 divise 42. Oui, et la paire correspondante est 42 ÷ 2 = 21.
      .legend(slot="legend") Ensuite, nous vérifions si 3 divise 42. Oui, et la paire correspondante est 42 ÷ 3 = 14.
      .legend(slot="legend") Maintenant nous vérifions si 4 divise 42. Non, donc nous passons à la suite.
      .legend(slot="legend") 5 ne divise pas non plus 42, donc nous continuons.
      .legend(slot="legend") 6 divise 42. Sa paire est 42 ÷ 6 = 7. Remarque comment nous nous sommes rencontrés au milieu après seulement quelques essais, sans avoir à tester tous les nombres de 7 à 42.

Le seul cas particulier avec cette méthode concerne les carrés parfaits : dans ce cas, tu rencontreras un seul nombre au milieu, comme 64 = 8 × 8.

---

## Règles de Divisibilité

> id: divisibility2
> section: rules

Il existe différentes règles qui permettent de vérifier facilement si un nombre est divisible par un autre. Dans cette section, nous allons en découvrir quelques-unes...


### Divisibilité par 2 et 5

Tout nombre est divisible par 1. Pour déterminer si un nombre est divisible par 2, il suffit de vérifier s'il est pair : tout nombre qui se termine par 0, 2, 4, 6 ou 8 est divisible par 2.

    include mixins
    +grid(30)

---
> id: divisibility5

Pour savoir si un nombre est divisible par 5, il suffit de vérifier que son dernier chiffre est 0 ou 5 :

    include mixins
    +grid(30)

---
> id: divisibility5a

La raison pour laquelle ces règles pour 2 et 5 sont si simples est liée à notre système de numération. La base de notre système est 10, ce qui signifie que chaque chiffre d'un nombre vaut 10 fois plus que le suivant à droite. Si on prend le nombre 6382 comme exemple,

    table.base-10.base-10-fixed
      tr.base-10-large
        td: strong 6
        td: strong 3
        td: strong 8
        td: strong 2
      tr.caption
        td: | =6000
        td: | =300
        td: | =80
        td: | =2

On peut séparer le dernier chiffre d'un nombre de tous ses autres chiffres :

    table.table-tiny
      tr.base-10-large
        td #[strong.m-red abc]#[strong.m-green d]
        td: | =
        td #[strong.m-red abc × 10]
        td +
        td #[strong.m-green d]
      tr.caption
        td #[strong.m-red 638]#[strong.m-green 2]
        td: | =
        td #[strong.m-red 638 × 10]
        td +
        td #[strong.m-green 2]

2 et 5 sont des facteurs de 10, donc ils [[divisent toujours|ne divisent jamais|divisent parfois]] __{.m-red}abc × 10__, quelles que soient les valeurs de __{.m-red}a__, __{.m-red}b__ et __{.m-red}c__. Par conséquent, il suffit de vérifier le dernier chiffre : si __{.m-green}d__ est divisible par 2, alors [[le nombre entier|abc]] est aussi divisible par 2. Si __{.m-green}d__ est divisible par 5, alors le nombre entier est divisible par 5.

---
> id: divisibility4b

La règle la plus simple est celle de la divisibilité par 10 : il suffit de vérifier si [[le dernier chiffre est 0|le premier chiffre est 1|le dernier chiffre est pair]].

---
> id: divisibility4

### Divisibilité par 4 et 8

Malheureusement, 4 ne divise pas 10, donc on ne peut pas juste regarder le dernier chiffre - mais 4 _divise_ 100, donc il faut légèrement modifier notre règle. On écrit __{.m-red}ab__**{.m-green}cd** = __{.m-red}ab × 100__ + __{.m-green}cd__. On sait que 4 divise toujours __{.m-red}ab × 100__, donc il faut regarder les [[deux]] derniers chiffres pour vérifier si un nombre est divisible par 4.

Par exemple, __{.m-green}24__ est divisible par 4, donc __{.m-red}2735__**{.m-green}24** [[est aussi|n'est pas]] divisible par 4, et __{.m-green}18__ n'est pas divisible par 4, donc __{.m-red}1947__**{.m-green}18** [[n'est pas non plus|est aussi]] divisible par 4.

---
> id: divisibility4a

Les règles de divisibilité par 8 sont encore plus complexes, car 100 n'est pas divisible par 8. Il faut aller jusqu'à [[1000|800|108]] et regarder les [[trois]] derniers chiffres d'un nombre.

Par exemple, __{.m-green}120__ est divisible par 8, donc __{.m-red}271__**{.m-green}120** est aussi divisible par 8.

---
> id: divisibility3a

### Divisibilité par 3 et 9

La règle de divisibilité par 3 est plus difficile. 3 ne divise pas 10, ni 100, ni 1000, ni aucune puissance de 10 plus grande. Regarder simplement les derniers chiffres ne va pas fonctionner.

À la place, nous devons utiliser la __somme des chiffres__ d'un nombre, qui est simplement la somme de tous ses chiffres individuels. Par exemple, la somme des chiffres de ${13×n+123}{n|3|0,20,1} est ${digitSumString(123+13×n)} = ${digitSum(123+13×n)} et la somme des chiffres de 3524 est [[14]].

---
> id: divisibility3b

    include mixins
    +grid(40, function(n) { if (!(n % 3)) { var s = '' + n; return +s[0] + (+s[1] || 0); } })

Ici, nous avons mis en évidence tous les nombres qui sont des multiples de 3. Tu peux voir que leurs sommes de chiffres sont toujours [[un multiple de 3|soit 0 soit 3|des nombres impairs]].

{.reveal(when="blank-0")} Donc, pour déterminer si un nombre est divisible par 3, il suffit de calculer sa somme des chiffres et de vérifier si le résultat est aussi divisible par 3.

---
> id: divisibility9

Maintenant, regardons les multiples de 9 :

    .number-grid
      for x in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        .number-cell.yellow= x*9
          .number-badge= (x == 11 ? 18 : 9)

Il semble que tous les nombres divisibles par 9 ont une somme des chiffres qui est [[aussi|pas]] divisible par 9. _{span.reveal(when="blank-0")}Par exemple, la somme des chiffres de 4752 est [[18]], donc 4752 [[est|n'est pas]] divisible par 9._

---
> id: divisibility9a

Bien sûr, ces motifs curieux pour les nombres divisibles par 3 et 9 doivent avoir une raison - et comme avant, cela a à voir avec notre système de numération en base 10. Comme nous l'avons vu, écrire le nombre __{.m-red}6__**{.m-blue}3**__{.m-green}8__**{.m-yellow}4** signifie vraiment

{.text-center} __{.m-red}6 × 1000__ + __{.m-blue}3 × 100__ + __{.m-green}8 × 10__ + __{.m-yellow}4__.

On peut diviser chacun de ces produits en deux parties :

{.text-center} __{.m-red}*{span.digit-sum-else}6 × 999* + *{span.digit-sum-is}6*__ +
__{.m-blue}*{span.digit-sum-else}3 × 99* + *{span.digit-sum-is}3*__ +
__{.m-green}*{span.digit-sum-else}8 × 9* + *{span.digit-sum-is}8*__ +
__{.m-yellow.digit-sum-is}4__.

Bien sûr, __{.m-green}9__, __{.m-blue}99__, __{.m-red}999__, et ainsi de suite sont toujours divisibles par 3 (ou par 9). Il ne reste plus qu'à vérifier que ce qui reste est aussi divisible par 3 (ou 9) :

{.text-center} __{.m-red}6__ + __{.m-blue}3__ + __{.m-green}8__ + __{.m-yellow}4__

C'est justement la somme des chiffres ! Donc si la [{.no-margins}somme des chiffres](->.digit-sum-is) est un multiple de 3, et on sait que [{.no-margins}tout le reste](->.digit-sum-else) est un multiple de 3, alors le résultat doit aussi être un multiple de 3.

---
> id: divisibility6
> goals: btn2 btn3

### Divisibilité par 6

Nous avons sauté le nombre 6 - mais nous avons déjà fait tout le travail difficile. Rappelle-toi que 6 = 2 × 3.

    include mixins
    +grid(40)
    p.btn-row.text-center.no-voice(style="margin-bottom:1em")
      button.btn.btn-small(data-display="visibility") Montrer les multiples de 2
      button.btn.btn-small(data-display="visibility") Montrer les multiples de 3

Pour vérifier si un nombre est divisible par 6, il suffit de vérifier qu'il est divisible par 2 [[et aussi|ou]] divisible par 3. Remarque que cela fonctionne pour 6, mais pas forcément pour _n'importe quel_ nombre qui est le produit de deux autres. Plus d'informations à ce sujet plus tard...

---

## Nombres Premiers

> id: primes
> section: primes

En calculant ces paires de facteurs, il peut arriver qu'un nombre n'ait aucun facteur sauf la première paire. Un exemple est 13 - ses seuls facteurs sont 1 et 13 lui-même. Ces nombres spéciaux sont appelés __nombres premiers__. Ils ne peuvent pas être décomposés en produits de nombres plus petits, ce qui, d'une certaine façon, en fait les "atomes des nombres".

Note que 1 lui-même n'est _pas_ un nombre premier, donc les premiers nombres premiers sont 2, 3, 5, 7, 11, 13, ...

---
> id: primes1

Tout nombre qui n'est pas premier peut être écrit comme le produit de nombres premiers : on continue simplement à le diviser en parties plus petites jusqu'à ce que tous les facteurs soient premiers. Par exemple,

    table.table-tiny
      tr
        td(colspan=4)
        td: .number-ball.legs.b.a 84
      tr
        td(colspan=2)
        td: .number-ball.blue 2
        td(colspan=3) ×
        td: .number-ball.blue.legs.b 42
      tr
        td(colspan=4)
        td: .number-ball.green 2
        td(colspan=2) ×
        td: .number-ball.green.legs(style="margin: 0 -10px") 21
      tr.td-border-bottom
        td(colspan=6)
        td: .number-ball.yellow 3
        td ×
        td: .number-ball.yellow 7
      tr
        td: .number-ball 84
        td: | =
        td: .number-ball.blue 2
        td ×
        td: .number-ball.green 2
        td ×
        td: .number-ball.yellow 3
        td ×
        td: .number-ball.yellow 7

Maintenant, 2, 3 et 7 sont des nombres premiers et ne peuvent plus être divisés. Le produit 2 × 2 × 3 × 7 s'appelle la __décomposition en facteurs premiers__ de 84, et 2, 3 et 7 sont ses __facteurs premiers__. Note que certains premiers, comme 2 dans ce cas, peuvent apparaître plusieurs fois dans une décomposition en facteurs premiers.

Chaque entier a une décomposition en facteurs premiers et deux entiers différents n'ont jamais la même décomposition. De plus, il n'y a qu'une seule façon d'écrire un nombre comme produit de nombres premiers - à moins de compter les différents ordres des premiers. C'est le __Théorème Fondamental de l'Arithmétique__.

---
> id: eratosthenes

### Le Crible d'Ératosthène

Il s'est avéré assez difficile de déterminer si un nombre est premier : il fallait toujours trouver _tous_ ses facteurs premiers, ce qui devient de plus en plus difficile à mesure que les nombres augmentent. À la place, le mathématicien grec [Ératosthène de Cyrène](bio:eratosthenes) a inventé un algorithme simple pour trouver tous les nombres premiers jusqu'à 100 : le __Crible d'Ératosthène__.

    include mixins
    x-slideshow
      .stage(slot="stage")
        +grid(100)
      .legend(slot="legend") D'abord, nous devons écrire tous les nombres jusqu'à 100.
      .legend(slot="legend") Nous savons que 1 n'est pas premier, donc nous le supprimons.
      .legend(slot="legend") Le plus petit nombre premier est #[strong.m-red 2]. Tout multiple de 2 ne peut pas être premier, puisqu'il a 2 comme facteur. Donc nous pouvons barrer tous les multiples de 2.
      .legend(slot="legend") Le nombre suivant dans notre liste est #[strong.m-blue 3] - encore un nombre premier. Tous les multiples de 3 ne peuvent pas être premiers, puisqu'ils ont 3 comme facteur. Donc nous pouvons aussi les barrer.
      .legend(slot="legend") Le nombre suivant, 4, est déjà barré, donc nous passons à #[strong.m-green 5] : c'est un nombre premier et nous barrons à nouveau tous ses multiples.
      .legend.md(slot="legend") Le nombre premier suivant doit être [[7]], puisque 6 est barré. Une fois de plus, nous barrons tous ses multiples.
      .legend.md(slot="legend") Le nombre premier suivant est [[11]]. Remarque cependant que tous ses multiples sont [[déjà barrés|des multiples de 3]]. C'est en fait vrai pour tous les autres nombres restants. Donc tous ces nombres restants doivent être premiers.

Maintenant, nous pouvons compter qu'au total, il y a [[25]] nombres premiers inférieurs à 100.

---
> id: primes3

### Combien y a-t-il de nombres premiers ?

::: column.grow
Bien sûr, nous pouvons aussi utiliser le Crible d'Ératosthène pour trouver des nombres premiers plus grands. Il y a 21 premiers entre 100 et 200, 16 premiers entre 200 et 300, 17 premiers entre 400 et 500 et seulement 11 entre 10 000 et 10 100.

Les premiers semblent de plus en plus espacés, mais s'arrêtent-ils un jour ? Y a-t-il un _plus grand_ ou un _dernier_ nombre premier ?

Le mathématicien grec ancien [Euclide d'Alexandrie](bio:euclid) a prouvé le premier qu'il existe une infinité de nombres premiers, en utilisant l'argument suivant :
::: column(width=220)

    x-img(lightbox width=220 height=300 src="images/euclid.jpg" alt="Portrait d'Euclide d'Alexandrie")

:::

    ol.proof
      li Supposons qu'il n'y ait qu'un nombre fini de nombres premiers.
        .text-center #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P]
      li Multiplions-les tous ensemble pour obtenir un très grand nombre que nous appelons #[em N].
        .text-center #[em.number-ball N] = #[em.number-ball.blue P] × #[em.number-ball.blue P] × #[em.number-ball.blue P] × #[em.number-ball.blue P] × #[em.number-ball.blue P]
      li Maintenant, pensons à #[em N] + 1. Tout nombre premier qui divise #[em N] ne peut pas aussi diviser #[em N] + 1. Et puisque tous les nombres premiers que nous avons trouvés jusqu'ici divisent #[em N], aucun d'entre eux ne peut aussi diviser #[em N] + 1.
        .text-center #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P], #[.number-ball.blue P] #[span.divides] #[em.number-ball N]
        .text-center #[em.number-ball.blue.cross P], #[em.number-ball.blue.cross P], #[em.number-ball.blue.cross P], #[em.number-ball.blue.cross P], #[.number-ball.blue.cross P] #[span.divides] #[em.number-ball N] + 1
      li.md D'après le [Théorème Fondamental de l'Arithmétique](gloss:fta), #[em N] + 1 doit avoir un facteur premier. Soit #[em N] + 1 est lui-même premier, soit il existe un autre nouveau premier #[em P'] qui divise #[em N] + 1.
        .text-center #[em.number-ball.green P'] #[span.divides] #[em.number-ball N] + 1
      li Dans les deux cas, nous avons trouvé un nouveau premier qui n'était pas dans notre liste originale - mais nous avions supposé que #[em tous] les premiers étaient dans cette liste.
      li Clairement, quelque chose ne va pas ! Mais puisque les étapes #[span.proof-step 2]-#[span.proof-step 4] étaient définitivement valides, la seule possibilité est que notre hypothèse initiale à l'étape #[span.proof-step 1] était fausse. Cela signifie qu'il doit en fait y avoir une infinité de nombres premiers.

---
> id: primes4

L'explication d'Euclide est l'un des premiers exemples de l'histoire d'une __preuve__ mathématique formelle - un argument logique qui montre qu'une affirmation doit être définitivement vraie. Cet exemple est souvent appelé __preuve par l'absurde__ : on commence par une hypothèse, on en déduit quelque chose d'impossible, et on sait ainsi que notre hypothèse doit être incorrecte.

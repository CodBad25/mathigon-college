# Triangles et Trigonométrie

## Introduction

> id: intro
> section: introduction
> description: "Les triangles sont parmi les formes les plus importantes en géométrie : ils ont d'innombrables propriétés intéressantes et apparaissent partout en ingénierie et en technologie."
> color: "#3566DE"
> level: Intermediate
> next: polyhedra

::: column.grow
Au début du 19ème siècle, les explorateurs avaient découvert la majeure partie du monde. Le commerce et les transports étaient en plein essor entre pays lointains, ce qui a créé un besoin de _cartes précises_ de la planète entière.

Aujourd'hui, nous avons des satellites qui peuvent prendre des photos d'en haut - mais il y a 200 ans, créer des cartes était une tâche difficile et longue. C'était fait par des mathématiciens comme [Radhanath Sikdar](bio:sikdar), qui a travaillé sur la _Grande Triangulation Trigonométrique_ : un projet d'un siècle pour mesurer toute l'Inde, y compris la chaîne de l'Himalaya.

::: column(width=240)

    x-img.shift-1(src="images/theodolite.jpg" width=240 height=320 credit="Science & Society Picture Library")

{.caption} Le _théodolite_, un instrument de mesure
:::

Ce qui était particulièrement intéressant était la quête pour trouver la plus haute montagne sur Terre. Il y avait plusieurs candidats, mais à des centaines de kilomètres de distance, il était difficile de dire laquelle était la plus haute.

Alors comment mesure-t-on la hauteur d'une montagne ?

    figure.mountain: include svg/mountain.svg

{.r} Aujourd'hui, nous pouvons utiliser des satellites pour mesurer la hauteur des montagnes à quelques centimètres près - mais ceux-ci n'existaient pas quand Radhanath arpentait l'Inde.
[Continuer](btn:next)

{.r.reveal(when="next-0")} Les alpinistes utilisent des _altimètres_ pour déterminer leur altitude. Ces appareils utilisent la différence de pression atmosphérique à différentes hauteurs. Cependant, cela aurait nécessité que quelqu'un grimpe réellement jusqu'au [sommet de chaque montagne](->.mountain-top) - un exploit extrêmement difficile qui n'a été accompli qu'un siècle plus tard.
[Continuer](btn:next)

{.r.reveal(when="next-1")} On pourrait aussi essayer d'utiliser des triangles semblables, comme nous l'avons fait dans le [cours précédent](/course/transformations/similarity). Cette méthode nécessite de connaître la [distance](->.mountain-distance) jusqu'à la [base de la montagne](->.mountain-base) : le point au niveau de la mer qui se trouve directement sous son sommet. On peut le faire pour des arbres ou de grands bâtiments, mais pour les montagnes, ce point est caché sous des centaines de mètres de roche.
[Continuer](btn:next)

---
> id: intro-2

::: column(width=320)

    x-img(src="images/hillary.jpg" width=320 height=190)

{.caption} Edmund Hillary et Tenzing Norgay ont été les premiers à atteindre le sommet du Mont Everest, en 1953.

::: column.grow
Mais il existe des techniques géométriques plus avancées, que [Radhanath](bio:sikdar) a utilisées pour découvrir la plus haute montagne sur Terre : elle s'appelle maintenant _Mont Everest_. Sa mesure n'était qu'à quelques mètres de la hauteur officielle actuelle de 8848 mètres.

Dans ce cours, tu vas apprendre beaucoup de caractéristiques et propriétés différentes des triangles. Celles-ci te permettront de mesurer la hauteur des montagnes, mais elles sont aussi d'une importance fondamentale dans beaucoup d'autres domaines des mathématiques, des sciences et de l'ingénierie.
[Continuer](btn:next)
:::

---
> id: applications

Les triangles sont spéciaux car ils sont particulièrement _solides_. C'est le seul polygone qui, lorsqu'il est fait de poutres en bois et de charnières, sera complètement _rigide_ - contrairement aux rectangles, par exemple, que l'on peut facilement faire tomber.

{.todo} BIENTÔT DISPONIBLE – Animations

---
> id: applications-1

Cette propriété rend les triangles particulièrement utiles en construction, où ils peuvent supporter de lourdes charges.

::: column(width=200)
    x-img(src="images/truss-bridge.jpg" credit="© ykanazawa1999, Flickr" width=200 height=200 lightbox)

{.caption} Un "pont en treillis" est soutenu par des barres triangulaires
::: column(width=200)
    x-img(src="images/pylon.jpg" width=200 height=200 lightbox)

{.caption} Triangles dans les pylônes électriques haute tension
::: column(width=200)
    x-img(src="images/bike.jpg" width=200 height=200 lightbox)

{.caption} Même les vélos utilisent des triangles pour la stabilité.
:::

---
> id: applications-2
> goals: video

Les triangles sont aussi le polygone le plus simple, avec le moins de côtés. Cela les rend particulièrement adaptés pour approximer des surfaces courbes complexes. C'est fait dans les bâtiments physiques...

::: column(width=200)
    x-img(src="images/st-mary.jpg" credit="Kunstlerbob, Wikipedia" width=200 height=200 lightbox)

{.caption} "Le Cornichon", un gratte-ciel à Londres
::: column(width=200)
    x-img(src="images/hk-bank.jpg" credit="WiNG, Wikipedia" width=200 height=200 lightbox)

{.caption} Tour de la Banque de Chine à Hong Kong
::: column(width=200)
    x-img(src="images/museum.jpg" credit="Andrew Dunn, Wikipedia" width=200 height=200 lightbox)

{.caption} Cour du British Museum à Londres
:::

::: column.grow
...mais aussi dans les mondes virtuels. Dans les graphiques générés par ordinateur (par exemple pour les films ou les jeux vidéo), toutes les surfaces sont approximées en utilisant un "maillage" de petits triangles. Les artistes et les ingénieurs logiciels doivent connaître la géométrie et la trigonométrie pour pouvoir déplacer et transformer ces triangles de manière réaliste, et pour calculer leur couleur et texture.
::: column(width=220)
    x-img(src="images/dolphin.jpg" width=220 height=135)
:::

    figure: x-video(src="https://static.mathigon.org/videos/tiger.mp4" poster="images/tiger.jpg" width=480 height=270 credit="© UCTV, The STEAM Channel")

---

## Propriétés des Triangles

> id: angle-sum
> section: properties

Commençons simplement : un triangle est une forme fermée qui a trois côtés (qui sont des [segments de droite](gloss:line-segment)) et trois sommets (les [points](gloss:point) où les côtés se rencontrent). Il a aussi trois [angles intérieurs](gloss:internal-angle), et nous savons déjà que leur somme est toujours [[180]]°.

---
> id: classification

On peut classer les triangles selon la taille de leurs angles :

::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a1" x="point(40,60)")
      circle(name="b1" x="point(40,140)")
      circle(name="c1" x="point(180,140)")
      path.fill.red(x="angle(a1,b1,c1)")
      path(x="polygon(a1,b1,c1)")

{.caption} Un __triangle rectangle__<br>
a un [angle droit](gloss:right-angle).
::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a2" x="point(30,30)")
      circle(name="b2" x="point(150,60)")
      circle(name="c2" x="point(190,190)")
      path.fill.blue(x="angle(c2,b2,a2)")
      path(x="polygon(a2,b2,c2)")

{.caption} Un __triangle obtusangle__<br>
a un [angle obtus](gloss:obtuse-angle).
::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a3" x="point(60,50)")
      circle(name="b3" x="point(30,180)")
      circle(name="c3" x="point(190,130)")
      path.fill.green(x="angle(a3,b3,c3)")
      path.fill.green(x="angle(b3,c3,a3)")
      path.fill.green(x="angle(c3,a3,b3)")
      path(x="polygon(a3,b3,c3)")

{.caption} Un __triangle acutangle__<br>
a [[trois]] [angles aigus](gloss:acute-angle).
:::

---
> id: labels

::: column.grow
Par commodité, on nomme toujours les triangles de la même façon. Les sommets sont nommés avec des lettres majuscules [_A_, _B_ et _C_](target:vertex), les côtés sont nommés avec des lettres minuscules [_a_, _b_ et _c_](target:side), et les angles sont nommés avec des lettres grecques [`α`, `β` et `γ`](target:angle) ("alpha", "bêta" et "gamma").

Le [côté qui est _opposé_ au sommet _A_](target:X) est nommé _a_, et l'[angle qui est juste à côté de _A_](target:Y) est nommé `α`. Le même principe fonctionne pour _B_/_b_/`β` et pour _C_/_c_/`γ`.
::: column(width=220)

    x-geopad(width=220 height=200): svg
      circle.move.red(name="a" cx=80 cy=30 label="A" target="vertex X Y")
      circle.move.blue(name="b" cx=30 cy=170 label="B" target="vertex")
      circle.move.green(name="c" cx=190 cy=150 label="C" target="vertex")
      path.red(x="angle(c,a,b).sup" label="α" target="angle Y")
      path.blue(x="angle(a,b,c).sup" label="β" target="angle")
      path.green(x="angle(b,c,a).sup" label="γ" target="angle")
      path.red(x="segment(b,c)" label="a" target="side X")
      path.blue(x="segment(a,c)" label="b" target="side")
      path.green(x="segment(b,a)" label="c" target="side")

:::

---
> id: medians
> goals: s0 s1 s2 move

### Médianes

::: column(width=300)

    x-geopad.sticky(width=300 tools="move|line" projections="no"): svg
      circle.move(name="a" cx=75 cy=75 target="ratio")
      circle.move(name="b" cx=50 cy=250)
      circle.move(name="c" cx=250 cy=200)
      path(x="triangle(a,b,c)")

      circle.green(name="ab" x="line(a,b).midpoint")
      circle.blue(name="ac" x="line(a,c).midpoint")
      circle.red(name="bc" x="line(b,c).midpoint" target="ratio")

      circle.yellow.reveal(name="d" x="triangle(a,b,c).centroid" when="blank-0" animation="pop" target="ratio")

      path.red.transparent(x="segment(a,d)" label="2" target="ratio")
      path.red.transparent(x="segment(d,bc)" label="1" target="ratio")

::: column.grow
Ici tu peux voir un triangle ainsi que les [milieux](gloss:midpoint) de ses trois côtés.

Une [__médiane__](gloss:triangle-median) d'un triangle est un segment de droite joignant un sommet au milieu du côté opposé. Trace les trois médianes de ce triangle. _{span.reveal(when="s0 s1 s2")}Que se passe-t-il quand tu déplaces les sommets du triangle ?_

{.reveal(when="move")} Il semble que les médianes [[se coupent toujours en un point|ont la même longueur|se divisent mutuellement en leur milieu]].
_{span.reveal(when="blank-0")}Ce point est appelé le [__centre de gravité__](gloss:centroid)._

{.reveal(when="blank-0")} Les médianes se divisent toujours mutuellement dans le [rapport 2:1](target:ratio). Pour chacune des trois médianes, la distance du sommet au centre de gravité est toujours [[deux fois|trois fois|exactement]] plus grande que la distance du centre de gravité au milieu.
:::

---

## Congruence des Triangles

> id: sss-construction
> section: congruence
> goals: draw-base draw-c1 draw-c2

Maintenant que nous pouvons vérifier si trois côtés peuvent former un triangle, réfléchissons à la façon dont nous pourrions _construire_ un triangle avec ces côtés.

::: column(width=300)

    x-geopad.sticky.label-halo(width=300 tools="move|line|circle"): svg

::: column.grow
{.task} Trace le triangle qui a des côtés de 4cm, 5cm et 6cm de long.

{.r} Dans la boîte, trace le côté le plus long du triangle, qui est de __6cm__. _{span.reveal(when="draw-base")}Maintenant nous avons déjà [deux](target:base) des trois sommets du triangle - le défi est de trouver le dernier. *{button.next-step} Continuer*_

{.reveal(when="next-0")} Ensuite, trace un cercle de rayon __4cm__ autour d'un des sommets, _{span.reveal(when="draw-c1")}et un cercle de rayon __5cm__ autour de l'autre._

{.reveal(when="draw-c2")} Le troisième sommet du triangle est l'[[intersection|le centre|le rayon]] des deux cercles. _{span.reveal(when="blank-0")}Maintenant nous pouvons simplement les relier pour former un triangle._

{.reveal(when="blank-0" delay="3000")} Les cercles s'intersectent en fait [[deux fois|trois fois|infiniment souvent]] : _{span.reveal(when="blank-1")}une fois [en haut](target:top) et une fois [en bas](target:bottom). Nous pouvons choisir l'une ou l'autre de ces intersections, et les deux triangles résultants sont [[congruents|équilatéraux|perpendiculaires]]._
:::

---
> id: congruence

### Conditions de Congruence

Mais est-il possible de construire _un triangle différent_ avec les mêmes trois côtés ?

Nous avons déjà vu deux triangles ci-dessus, mais ils étaient tous les deux congruents. En fait, deux triangles quelconques qui ont les mêmes trois longueurs de côtés sont congruents. C'est ce qu'on appelle la [__Condition de Congruence CCC__](gloss:triangle-sss) pour les triangles ("Côté-Côté-Côté").

Nous avons maintenant deux conditions pour les triangles : "AA" signifie que deux triangles sont [[semblables|congruents|transformations]], et "CCC" signifie que deux triangles sont [[congruents|semblables|égaux]]. Il y a quelques autres conditions de congruence :

---
> id: congruence-1

::: .theorem
Deux triangles sont congruents si l'une des conditions suivantes est vérifiée :

    .row.padded-thin
      div(style="width: 150px")
        .text-center: strong CCC
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="segment(a,b)")
          path.red(x="segment(a,c)")
          path.red(x="segment(b,c)")
        p.caption Tous les côtés sont congruents.

      div(style="width: 150px")
        .text-center: strong CAC
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path.red(x="segment(b,c)")
        p.caption Deux côtés et l'angle #[strong compris] sont congruents.

      div(style="width: 150px")
        .text-center: strong ACA
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(c,a,b)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path(x="segment(b,c)")
        p.caption Deux angles et le côté #[strong compris] sont congruents.

      div(style="width: 150px")
        .text-center: strong AAC
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(b,c,a)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path(x="segment(b,c)")
        p.caption Deux angles et un des côtés non compris.
:::

---
> id: cpoct

Tu peux considérer ces conditions comme des "raccourcis" : pour vérifier si deux triangles sont congruents, tu n'as qu'à vérifier l'une des conditions ci-dessus.

Une fois que tu _sais_ que deux triangles sont congruents, tu sais que _tous_ leurs côtés et angles correspondants sont congruents.

Il est intéressant de noter que toutes les conditions consistent en [[trois]] valeurs différentes (soit des côtés, soit des angles) !

---

## Triangles Isocèles et Équilatéraux

> id: isosceles
> section: isosceles-and-equilateral
> sectionStatus: dev

En plus de la classification par angles, on peut aussi classer les triangles par leurs côtés :

::: column(width=220)

    x-geopad(width=220): svg
      circle.move(name="a" cx=110 cy=30)
      circle.move(name="b" cx=40 cy=190)
      circle.move(name="c" cx=180 cy=190)
      path.fill.red(x="angle(b,c,a)")
      path.fill.blue(x="angle(c,a,b)")
      path.fill.green(x="angle(a,b,c)")
      path(x="polygon(a,b,c)")

{.caption} Un __triangle scalène__<br>
a tous ses côtés de longueurs différentes.
::: column(width=220)

    x-geopad(width=220): svg
      circle.move(name="a1" cx=110 cy=30)
      circle.move(name="b1" cx=40 cy=190)
      circle.move(name="c1" cx=180 cy=190)
      path.fill.red(x="angle(b1,c1,a1)")
      path.fill.green(x="angle(a1,b1,c1)")
      path(x="polygon(a1,b1,c1)")
      path.red(x="segment(a1,b1)")
      path.red(x="segment(a1,c1)")

{.caption} Un __triangle isocèle__<br>
a deux côtés égaux.
::: column(width=220)

    x-geopad(width=220): svg
      circle.move(name="a2" cx=110 cy=30)
      circle.move(name="b2" cx=40 cy=190)
      circle.move(name="c2" cx=180 cy=190)
      path.fill.red(x="angle(b2,c2,a2)")
      path.fill.red(x="angle(c2,a2,b2)")
      path.fill.red(x="angle(a2,b2,c2)")
      path(x="polygon(a2,b2,c2)")
      path.red(x="segment(a2,b2)")
      path.red(x="segment(a2,c2)")
      path.red(x="segment(b2,c2)")

{.caption} Un __triangle équilatéral__<br>
a tous ses côtés égaux.
:::

---

## Théorème de Pythagore

> id: pythagoras
> section: pythagoras

Nous sommes maintenant arrivés à un point important en géométrie - un théorème célèbre nommé d'après le mathématicien grec [Pythagore de Samos](bio:pythagoras). Il affirme que :

::: .theorem
__Théorème de Pythagore__<br>
Dans tout triangle rectangle, le carré de l'hypoténuse (le côté opposé à l'angle droit) est égal à la somme des carrés des deux autres côtés. En d'autres termes,

{.text-center} `a^2 + b^2 = c^2`
:::

    x-geopad(width=400): svg
      circle.move(name="a" cx=80 cy=50)
      circle.move(name="b" cx=350 cy=300)
      circle.move(name="c" cx=80 cy=300)

      path.fill.blue(x="polygon(c,b,point(b.x,c.y))" label="a²" label-class="white")
      path.fill.red(x="polygon(c,a,point(a.x,c.y))" label="b²" label-class="white")
      path.fill.yellow(x="polygon(a,b,point(b.x,a.y))" label="c²" label-class="white")

      path(x="polygon(a,b,c)")
      path.red(x="segment(a,c)" label="b")
      path.blue(x="segment(c,b)" label="a")
      path.yellow(x="segment(a,b)" label="c")

---
> id: pythagoras-1

::: column.grow

Dans un triangle rectangle, on appelle le côté le plus long l'__hypoténuse__. Il est toujours [[opposé|adjacent|égal]] à l'angle droit.

Les deux autres côtés sont généralement appelés les __cathètes__. Le théorème de Pythagore, souvent écrit sous la forme

{.text-center} `a^2 + b^2 = c^2`,

nous dit que si nous connaissons deux côtés d'un triangle rectangle, nous pouvons calculer le troisième.

::: column(width=300)

    x-geopad(width=300): svg
      circle.move(name="a1" cx=40 cy=50 label="A")
      circle.move(name="b1" cx=260 cy=220 label="B")
      circle.move(name="c1" cx=40 cy=220 label="C")
      path(x="polygon(a1,b1,c1)")
      path.red(x="segment(a1,c1)" label="b")
      path.blue(x="segment(c1,b1)" label="a")
      path.yellow(x="segment(a1,b1)" label="c")
      path.fill.orange(x="angle(a1,c1,b1)")

:::

---
> id: pythagoras-proof

### Preuve du Théorème de Pythagore

Le théorème de Pythagore était connu des Babyloniens anciens, des Mésopotamiens, des Indiens et des Chinois - mais Pythagore a peut-être été le premier à trouver une preuve mathématique formelle.

Il existe en fait beaucoup de façons différentes de prouver le théorème de Pythagore. Voici une des plus célèbres, utilisant un carré :

::: column(width=300)

    include svg/pythagoras-proof.svg

::: column.grow

Regarde le grand carré. La longueur de son côté est _a_ + _b_, et son aire est [[(_a_ + _b_)²|_a_² + _b_²|_c_²]].

{.reveal(when="blank-0")} Il est composé de [quatre triangles](target:triangle), plus un [petit carré](target:square) d'aire [[_c_²|(_a_ – _b_)²|_a_ × _b_]].

{.reveal(when="blank-1")} Maintenant réarrangeons les triangles dans le carré. Le résultat contient toujours les [quatre triangles](target:triangle), plus [deux carrés](target:square2) d'aires _a_² et _b_².

{.reveal(when="blank-1")} En comparant l'aire rouge {.text-center}avant _{span.proof-step}_ et après _{span.proof-step}_, nous voyons que

{.text-center.reveal(when="blank-1")} `c^2 = a^2 + b^2`

{.reveal(when="blank-1")} C'est la preuve originale que [Pythagore](bio:pythagoras) a imaginée.

:::

# Angles et polygones

## Angles

> section: angles
> sectionStatus: dev
> color: "#2E6AE1"
> level: Foundations

TODO

---

## Angles dans les polygones

> section: angles-in-polygons
> sectionStatus: dev

TODO

---

## Tracer des triangles

> section: triangles
> id: triangle-inequality
> goals: s0 s1 s3 s5

Dans cette section, nous allons explorer comment tracer des triangles. Par exemple, si je te donne trois nombres quelconques, peux-tu construire un triangle ayant ces longueurs de côtés ?

Voici quelques exemples – déplace les sommets du triangle jusqu'à ce que les trois côtés correspondent à l'un des triplets à gauche.

    .inequality.row
      div(style="width:150px")
        .item #[.t-num 5]#[.t-num 6]#[.t-num 7] #[span.check(when="s0")]
        .item #[.t-num 3]#[.t-num 9]#[.t-num 9] #[span.check(when="s1")]
        .item #[.t-num 2]#[.t-num 4]#[.t-num 8]
        .item #[.t-num 4]#[.t-num 6]#[.t-num 7] #[span.check(when="s3")]
        .item #[.t-num 1]#[.t-num 2]#[.t-num 6]
        .item #[.t-num 3]#[.t-num 5]#[.t-num 7] #[span.check(when="s5")]
      .grow
        x-geopad.label-halo(height=360): svg
          circle.move.pulsate(name="a" cx=175 cy=75)
          circle.move(name="b" cx=150 cy=250)
          circle.move(name="c" cx=350 cy=200)
          path.red(x="segment(a,b)" label="${roundD(a,b)}")
          path.blue(x="segment(b,c)" label="${roundD(b,c)}")
          path.yellow(x="segment(a,c)" label="${roundD(a,c)}")

{.reveal(when="s0 s1 s3 s5")} Il semble qu'il y ait des cas où trois nombres ne peuvent tout simplement _pas_ former un triangle. Cela se produit particulièrement quand un côté [[est beaucoup plus long que|est beaucoup plus court que|a la même longueur que]] les deux autres.

---
> id: triangle-inequality-1

::: column.grow
Imagine les trois côtés d'un triangle comme des tiges métalliques, reliées par des charnières. Plaçons la [tige la plus longue](target:long) au milieu et les [plus courtes](target:short) de chaque côté.

{.r} Maintenant il est facile de voir qu'il est impossible de relier les extrémités des tiges plus courtes, si leur longueur combinée est inférieure à la longueur de la tige plus grande.
[Continuer](btn:next)

::: column(width=300)

    x-geopad(width=300 height=180): svg
      circle(name="a" x="point(90,90)")
      circle(name="b" x="point(210,90)")
      circle.move.pulsate(name="c" cx=150 cy=50 project="circle(a,60)")
      circle.move.pulsate(name="d" cx=150 cy=50 project="circle(b,40)")

      path.blue(x="circle(a,60)" style="stroke-dasharray: 8px 10px")
      path.blue(x="circle(b,40)" style="stroke-dasharray: 8px 10px")
      path.thick(x="segment(a,b)" target="long")
      path.thick(x="segment(a,c)" target="short")
      path.thick(x="segment(b,d)" target="short")

:::

---
> id: inequality-picker

Reformulons cette observation en termes mathématiques :

::: .theorem
__L'inégalité triangulaire__<br>
La somme des longueurs de deux côtés quelconques d'un triangle doit être supérieure à la longueur du troisième.
:::

Autrement dit, si un triangle a des côtés _a_, _b_ et _c_, alors on sait que `a+b>c` et `a+c>b` et `b+c>a`.

L'inégalité triangulaire nous permet de vérifier rapidement si trois nombres peuvent former un triangle. Lesquels de ces triplets de nombres sont possibles ?

    x-picker
      .item.text-center #[.t-num 4]#[.t-num 6]#[.t-num 9]
      .item.text-center(data-error="inequality-error-1") #[.t-num 1]#[.t-num 2]#[.t-num 3]
      .item.text-center #[.t-num 3]#[.t-num 7]#[.t-num 8]
      .item.text-center(data-error="inequality-error-2") #[.t-num 2]#[.t-num 4]#[.t-num 7]
      .item.text-center(data-error="inequality-error-3") #[.t-num 1]#[.t-num 5]#[.t-num 8]
      .item.text-center #[.t-num 2]#[.t-num 3]#[.t-num 4]

---
> id: triangle-inequality-2

L'inégalité triangulaire nous permet aussi d'estimer la longueur du troisième côté d'un triangle, si nous connaissons la longueur des deux autres.

Imagine qu'un triangle a deux côtés de longueur 4 et 6. Appelons _c_ la longueur du troisième côté. Alors nous savons que

{.text-center} `4+6>c`, _{span.space}_ `4+c>6` _{span.space}_ et _{span.space}_ `6+c>4`

Nous pouvons réarranger ces inégalités pour obtenir [[2]] `<c<` [[10]].
_{span.reveal(when="blank-0 blank-1")}La longueur du côté *c* doit être comprise entre 2 et 10._

---
> id: triangle-inequality-3
> goals: target-0 target-1

::: column.grow

Encore une fois, nous pouvons y réfléchir en utilisant des objets physiques : deux côtés du triangle sont des tiges métalliques de longueur 4 et 6, et le troisième côté est un élastique qui peut s'étirer ou se contracter.

Maintenant tu peux voir que la longueur de l'élastique sera toujours [au moins](action:hover(90,45,118,69,1)) `6-4=2` et [au plus](action:hover(50,127,250,127,0)) `6+4=10`.

::: column(width=300)

    x-geopad(width=300 height=200): svg
      circle(name="a" cx=170 cy=130 hidden)
      circle.move(name="b" cx=75 cy=60 project="circle(a,120)")
      circle.move(name="c" cx=300 cy=110 project="circle(a,80)")
      path.thick(x="segment(a,b)" label="6")
      path.thick(x="segment(a,c)" label="4")
      path.orange(x="segment(b,c)" label="${round(distance(b,c)/20,1)}")

:::

Note qu'il s'agit d'inégalités _strictes_. Si le troisième côté mesure _exactement_ 2 ou 10, on obtient une ligne droite et non un triangle. Cependant, 2.1 ou 9.9 suffiraient pour former un triangle.

---

{.todo} BIENTÔT DISPONIBLE – Plus sur le tracé de triangles, les angles dans les triangles, la similitude et la congruence.

---

## Théorème de Pythagore

> section: pythagoras
> sectionStatus: dev

TODO

---

## Le plan de coordonnées

> section: coordinate-plane
> sectionStatus: dev

TODO

---

## Transformations et congruence

> section: transformations
> sectionStatus: dev

TODO

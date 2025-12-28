# Fonctions linéaires

## Entrée, sortie et graphiques

> section: graphs
> sectionStatus: dev
> color: "#F15E19"
> level: Foundations

TODO

---

## Pente et ordonnée à l'origine

> section: slope-intercept
> sectionStatus: dev
> id: slope
> goals: make-point slide-point

::: .theorem
__Compétence du programme de 3ème__<br>
Utiliser des triangles semblables pour expliquer pourquoi le coefficient directeur _m_ est le même entre deux points distincts quelconques sur une droite non verticale dans le plan ; établir l'équation `y=mx` pour une droite passant par l'origine et l'équation `y=mx+b` pour une droite coupant l'axe vertical en _b_.
:::

Voici un [système de coordonnées](gloss:coordinate-system), avec une droite passant par son [origine](gloss:coordinate-system-origin). Pour commencer, choisis un point n'importe où sur la droite.

::: column(width=360 parent="padded-thin")

    x-coordinate-system.c-system(width=360 height=440 x-axis="-5,5,1" y-axis="-6,6,1" crosshairs="no" padding=5)
    x-gesture(target="#slope x-coordinate-system" offset="63,-107")

::: column.grow

{.reveal(when="make-point")} On peut tracer un triangle rectangle entre ce point et l'origine du système de coordonnées.

{.reveal(when="make-point" delay=1500)} Essaie de déplacer le point le long de la droite : remarque comment différents points forment des triangles de tailles différentes, mais ils sont tous [[semblables|congrus|équilatéraux]]. _{.lgrey.reveal(when="blank-0")} La meilleure façon de le voir est de regarder les deux angles le long de l'axe des x. Ils ont toujours la même mesure, donc par la [condition AA](gloss:triangle-aa) les triangles doivent tous être semblables._

{.reveal(when="blank-0" delay=1500)} Maintenant nous pouvons utiliser un des résultats que nous connaissons sur les triangles semblables : le rapport de deux côtés est toujours constant. Déplace à nouveau le point et observe ce qui se passe :

{.reveal.text-center(when="blank-0" delay=3000)}
`pill(var("p.y"),"green","dy")/pill(var("p.x"),"blue","dx") = var("p.y/p.x || '???'")`

{.reveal(when="slide-point")} Mais l'inverse est aussi vrai : tout point (_x_, _y_) qui satisfait cette équation doit se trouver quelque part sur la droite. Nous avons donc maintenant une « équation » pour la droite :

{.text-center.reveal(when="slide-point" delay=1000)} `pill(y,"green","dy") / pill(x,"blue","dx") = 1.5`

{.r.text-center.reveal(when="slide-point" delay=2000)}
`⇔ pill(y,"green","dy") = 1.5 pill(x,"blue","dx")`
[Continuer](btn:next)

:::

---
> id: questions-1

Il s'avère que _toute droite_ passant par l'origine d'un système de coordonnées a une équation de la forme `y = mx`, où _m_ est appelé le [__coefficient directeur__](gloss:line-slope) (ou pente).

Si on te donne une droite, tu peux trouver la valeur correspondante de _m_ en choisissant n'importe quel point sur la droite et en divisant simplement sa valeur _y_ par sa valeur _x_. Voici quelques exemples :

::: column(width=230 parent="padded-thin")

    x-coordinate-system(width=230 height=180 x-axis="-5,5,1" y-axis="-4,4,1" labels="no" padding=5 crosshair-grid=1)

{.text-center} _m_ = [[0.5]]

::: column(width=230)

    x-coordinate-system(width=230 height=180 x-axis="-5,5,1" y-axis="-4,4,1" labels="no" padding=5 crosshair-grid=1)

{.text-center} _m_ = [[3]]

::: column(width=230)

    x-coordinate-system(width=230 height=180 x-axis="-5,5,1" y-axis="-4,4,1" labels="no" padding=5 crosshair-grid=1)

{.text-center} _m_ = [[-1]]

:::

---
> id: intercept

Mais qu'en est-il des droites qui _ne passent pas_ par l'origine du système de coordonnées ? Dans ce cas, nous avons besoin d'un composant supplémentaire : nous pouvons prendre la droite avec le même coefficient directeur qui passe par l'origine, et la décaler le long de l'axe _y_ en ajoutant ou soustrayant un nombre :

    svg(style="width: 0; height: 0; position: absolute;"): defs
      marker#blue-arrow(refX=2 refY=2 markerWidth=4 markerHeight=4 orient="auto")
        path(d="M 0 0 L 4 2 L 0 4 z" fill="#fd8c00")
      marker#blue-circle(refX="2" refY="2" markerWidth="4" markerHeight="4" orient="auto")
        circle( cx=2 cy=2 r=1.5 fill="#fd8c00")

    x-coordinate-system(width=400 height=320 x-axis="-8,8,1" y-axis="-6,6,1" crosshairs="no" padding=5)
    x-gesture(target="#intercept x-var" slide="100,0")

{.text-center} `y = 2/3 x` ${sign(a)} ${abs(a)}{a|0|-4,4,1}

{.reveal(when="var-0")} Comme tu peux le voir ci-dessus, le nombre ajouté à la valeur de _y_ est le même que la distance entre l'origine du système de coordonnées et le point où la droite coupe l'[[axe _y_|axe _x_]].

---
> id: equation

Nous avons maintenant une équation pour _toute_ droite (non verticale) dans le plan :

{.text-center} `y = class(m,"b orange") x + class(b,"b cyan")`,

{.r} où _{.b.orange}m_ et _{.b.cyan}b_ sont deux nombres à déterminer.
Comme tu l'as vu précédemment, _{.b.orange}m_ est le __{.orange}coefficient directeur__ de la droite, et _{.b.cyan}b_ est l'__{.cyan}ordonnée à l'origine__.
[Continuer](btn:next)

---
> id: equation-1

::: column(width=360 parent="padded-thin")

    x-coordinate-system(width=360 height=360 x-axis="-5,5,1" y-axis="-4,6,1" no-crosshairs padding=5)

::: column.grow

Si on te donne une droite quelconque, comme celle de gauche, tu peux trouver la valeur de _{.b.cyan}b_ en regardant le point où la droite coupe l'axe _y_. Dans cet exemple, _{.b.cyan}b_ = [[2]].

{.reveal(when="blank-0")} De même, tu peux trouver le coefficient directeur _{.b.orange}m_ en traçant un triangle sous la droite et en divisant sa hauteur par sa base. Dans cet exemple, le coefficient directeur est _{.b.orange}m_ = [[0.75]].

{.reveal(when="blank-1")} Autrement dit, l'équation de cette droite est

{.text-center.reveal(when="blank-1")} `y=` _{x-equation(solution="3/4 x+2")}_

:::

---
> id: questions-2

Voici quelques exercices supplémentaires. Peux-tu trouver le coefficient directeur et l'ordonnée à l'origine dans chaque cas, et écrire l'équation de la droite ?

::: column(width=230 parent="padded-thin")

    x-coordinate-system(width=230 height=180 x-axis="-5,5,1" y-axis="-4,4,1" labels="no" padding=5 crosshair-grid=1)

{.text-center} `y=` _{x-equation(solution="3/2 x-2")}_

::: column(width=230)

    x-coordinate-system(width=230 height=180 x-axis="-5,5,1" y-axis="-4,4,1" labels="no" padding=5 crosshair-grid=1)

{.text-center} `y=` _{x-equation(solution="2x+1")}_

::: column(width=230)

    x-coordinate-system(width=230 height=180 x-axis="-5,5,1" y-axis="-4,4,1" labels="no" padding=5 crosshair-grid=1)

{.text-center} `y=` _{x-equation(solution="-1/2 x+3")}_

:::

---

## Droites parallèles et perpendiculaires

> section: parallel-perpendicular
> sectionStatus: dev

TODO

---

## Systèmes d'équations

> section: systems
> sectionStatus: dev

TODO

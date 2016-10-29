---
layout: post
title:  "Diese Hardware benutze ich für Deep Learning"
date:   2016-10-29 17:00:00 +0200
categories: deep-learning
image:
  path: "/images/laptop.png"
  width: 700
  height: 300
---

Für meine Machine Learning Experimente habe ich bisher immer meinen
Laptop genutzt. Seitdem ich mich aber mehr mit Deep Learning
beschäftige, gelange ich immer ziemlich schnell an Grenzen. Teilweise
dauert die Durchführung eines Experimentes mehrere Tage oder gar
Wochen. Zeit also sich nach Alternativen umzuschauen.

Die wichtigste Komponente für schnelles Deep Learning ist ohne Frage
die Grafikkarte (GPU). Die meisten Deep Learning Frameworks
unterstützen momentan nur NVIDIA Grafikkarten mittels CUDA. Leider
funktionieren aber nicht alle NVIDIA Grafikkarten gleich gut im Bereich
Deep Learning. Tim Dettmers hat deshalb einen
[ausführlichen Test](http://timdettmers.com/2014/08/14/which-gpu-for-deep-learning/)
verschiedener Grafikkarten gemacht. Zu empfehlen sind momentan Titan
Pascal X, GTX 1080, GTX1070 oder GTX1060.

Da ich bisher noch keine PC-Workstation besessen habe, habe ich mir
ein komplett neues System zusammengestellt. Geholfen hat mir dabei vor
allem der Artikel
"[Building a Deep Learning (Dream) Machine](http://graphific.github.io/posts/building-a-deep-learning-dream-machine/)"
von Roelof Pieters. Wichtig war mir zunächst ein Tower und ein
Mainboard das in Zukunft noch weitere Grafikkarten aufnehmen kann. Mit
dem ASUS X99-E WS Mainboard kann ich bis zu 3 Grafikkarten parallel
bereiten. Des Weiteren sollte man auf ein Netzteil achten das genug
Leistung hat um alle zukünftigen Grafikkarten zu versorgen und zudem
noch möglichst Energieeffizienz ist. Der Prozessor und Arbeitsspeicher
ist für Deep Learning nicht so entscheidend. Deshalb habe ich hier
danach geschaut welche Anforderung ich an andere Machine Learning
Experiment (außer Deep Learning) habe. Bei der Grafikkarte habe ich
mich schlussendlich für die NVIDIA GTX1080 entschieden. In Zukunft
plane ich aber noch den Kauf einer Titan Pascal X.

Hier meine Vollständige Liste an Komponenten:

* [NZXT H630 Big-Tower - schallgedämmt, weiß](http://amzn.to/2eYkKWr)
* [ASUS X99-E WS USB 3.1, Intel X99 Mainboard – Sockel 2011-V3](http://amzn.to/2eYhQkj)
* [Intel Xeon E5-2620 V3 2,4 GHz (Haswell-EP) Sockel 2011-V3 - boxed](http://amzn.to/2f2VeOm)
* [Kingston Server DIMM, ECC REG, DDR4-2133, CL15 - 32 GB Kit](http://amzn.to/2eYgG8E)
* [Prolimatech Genesis CPU-Kühler](http://amzn.to/2eYkdDY)
* [Noiseblocker BlackSilent Pro Fan PLPS - 120mm PWM 2](http://amzn.to/2dXV4Xv)
* [Gigabyte GeForce GTX 1080 G1 Gaming, 8192 MB GDDR5X](http://amzn.to/2dY1uWr)
* [Corsair Professional Platinum Series AX1500i Netzteil – 1500 Watt](http://amzn.to/2dY00eS)
* [Crucial BX200 2,5 Zoll SSD, SATA 6G - 480 GB](http://amzn.to/2dXWdhF)
* [2x Seagate Desktop HDD, SATA 6G, 7200RPM, 3,5 Zoll - 3 TB](http://amzn.to/2eYeLAW)

Bestellt habe ich mein System übrigens bei
[Caseking](http://caseking.de). Das hat problemlos geklappt und ich
habe mir das zusammenbauen der Einzelkomponenten gespart.

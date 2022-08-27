---
layout: post
title: Hur du blir snabbare i Terminal.app (Bash)
tags: archived
language: sv
---
Jag spenderar mycket tid i [Bash] [1] som råkar vara den kommandotolk som är förvald i Mac&nbsp;OS&nbsp;X:s Terminal.app. Det blir många kommandon på en dag och tyvärr är det mycket repetitivt arbete. Att skriva ett längre kommando mer än en gång känns dumt. _Tab completion_ är en funktion som de flesta terminal-användare känner till; att Bash hjälper dig avsluta sökvägar eller kommandon när du trycker på tabb. Min favorit är _history_.

Om du bara kör programmet _history_ presenteras en lång lista med dina senast körda kommandon. Ett lätt sätt att stega igenom dessa är med hjälp av pil upp och pil ner. När du hittar det kommando du vill köra är det bara att trycka _retur_. Om du behöver ändra i kommandot är det bra att känna till _ctrl-a_ och _ctrl-e_ som hoppar till början respektive slutet av raden.

Okej, inget nytt under solen än kanske? Men mindre känt är att det finns ett sökläge för historiken. Innan du börjar skriva något trycker du _ctrl-r_. Nu är det bara att börja söka på ett tidigare kommando, det räcker med ett fragment av det, och det du körde senast som matchar ditt sökord visas. Om du inte är nöjd trycker du _ctrl-r_ igen för att visa nästa träff. När du hittat det du letade efter har du ett par valmöjligheter. Om du bara trycker _retur_ körs kommandot direkt. _ctrl-j_ eller _Escape_ hämtar istället kommandot och låter dig redigera det innan det körs. Ångrar du dig är det bara att trycka _ctrl-c_ för att komma tillbaks till prompten.

[1]: https://sv.wikipedia.org/wiki/Bash

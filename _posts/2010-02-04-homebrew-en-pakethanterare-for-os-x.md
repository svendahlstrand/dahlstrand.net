---
layout: post
title: Homebrew - En pakethanterare för OS X
tags: archived
language: sv
---

Som webbutvecklare drar jag nytta av mycket fri mjukvara som till exempel [git] [1], [imagemagick] [2] och [wine] [3]. De flesta *nix-smaker har pakethanterare som underlättar installationen. BSD har ports, Debian har dpkg och många andra GNU/Linux-distributioner kör RPM till exempel. På OS X har det länge varit antingen [Fink] [4] eller [MacPorts] [5] som gäller.

Jag har inte riktigt varit förtjust i någon av dem. Jag har till exempel inte hittat alla paket jag behöver i Fink och MacPorts känns tungrott då det installerar paket som redan finns på din Mac från början. Jag har sedan ett tag tillbaka i stället använt [Homebrew] [6] som min pakethanterare.

## Varför ska jag köra Homebrew?

Det finns många fördelar med Homebrew:

* Det är lätt att installera. Lägg bara Homebrew i <code>/usr/local</code>, som redan finns i <code>PATH</code>, och du är igång.
* Du kan förresten lägga det vart du vill och Homebrew smutsar inte ner utanför sin katalog.
* Du behöver inte använda sudo om du inte gärna vill.
* Homebrew drar nytta av de paket som redan finns på din dator och därav går det snabbare att installera.
* Alla paket är optimerade för Intelbaserade Macar med Snow Leopard.

## Hur kommer jag igång?

Det enda du behöver innan vi kör igång är [Xcode] [7]. Om du har din installationsskiva för OS X kvar kan du installera Xcode därifrån. Homebrew kan, som jag nämnde tidigare, installeras vart som helst men jag föredrar <code>/usr/local</code>. Så här lätt installerar du från terminalen:

{% highlight bash %}
# Ladda hem och installera Homebrew från GitHub.
ruby -e "$(curl -fsS https://gist.github.com/raw/323731/install_homebrew.rb)"

# Så här söker du efter paket samt får mer information om det.
brew search git
brew info git

# När du hittat rätt paket är det bara att installera.
brew install git
{% endhighlight %}

Det är också lätt att bidra till Homebrew, jag har själv skickat in ett par patchar. Eftersom det är öppen källkod behöver man inte heller vänta på att någon annan ska uppdatera ens favoritpaket, det är bara att göra själv! Ta en titt på [Homebrews wiki] [8] för mer information.

[1]: https://git-scm.com/
[2]: https://www.imagemagick.org/
[3]: https://www.winehq.org/
[4]: https://www.finkproject.org/
[5]: https://www.macports.org/
[6]: https://github.com/mxcl/homebrew
[7]: https://developer.apple.com/xcode/
[8]: https://docs.brew.sh/Formula-Cookbook

---
layout: post
title: Hoisting och funktioner i JavaScript
language: sv
---

Här kommer en några kluriga rader JavaScript, kan du tala om vad som skrivs ut i konsollen när de körs?

{% highlight javascript %}
helloDeclaration();
helloExpression();

function helloDeclaration() {
  console.log('Hello Declaration!');
}

var helloExpression = function () {
  console.log('Hello Expression!');
};
{% endhighlight %}


Du fuskade väl inte? Här kommer svaret:

{% highlight javascript %}
Hello Declaration!
TypeError: undefined is not a function
{% endhighlight %}

Känns det inte helt självklart? Då tycker jag du ska läsa vidare!

## Vad är hoisting?

I JavaScript finns något som kallas för *hoisting* som innebär att funktions- och variabeldeklarationer flyttas (hissas) till toppen av sitt scope innan koden körs. Okej, det var en krånglig mening. Kanske blir det lättare om vi kikar på hur JavaScript-parsern tolkar koden ovan:

{% highlight javascript %}
// Variabel- och funktions-deklarationer flyttar till toppen.
var helloExpression;

function helloDeclaration() {
  console.log('Hello Declaration!');
}

// Funktionsanropen och...
helloDeclaration();
helloExpression();

// ...variabeltilldelningen är kvar på samma plats som tidigare.
helloExpression = function () {
  console.log('Hello Expression!');
};
{% endhighlight %}

Parsern flyttar alltså deklarationerna till toppen, men lägg märke till att variabel*tilldelningen* blir kvar. Nu är det plötsligt klart varför det första funktionsanropet går bra medan det andra kastar ett undantagsfel: `helloExpression();` körs innan variabeln är satt.

Om du vill lära dig mer kan jag rekommendera artikeln [JavaScript Scoping and Hoisting](https://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting) av Ben Cherry.

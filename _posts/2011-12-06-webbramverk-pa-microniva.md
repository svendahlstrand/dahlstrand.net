---
layout: post
title: Webbramverk på micronivå
tags: archived
language: sv
---

Om du bygger mindre webbappar eller prototyper ska du helt klart kika på
de microramverk som finns. Ett microwebbramverk ger dig precis det
du behöver för att snabbt komma igång och bygga små till medelstora
webbapplikationer. De hjälper dig med sessionshanteringen, att koppla URL:er till logik,  templaterendering och annat skitgöra så att du kan koncentrera dig på att bygga en grym applikation.

Tänk dig en *mycket* enkel webbapplikation som visar besökarens IP-adress, det går
tretton sådanna på dussinet. I Sinatra, ett microramverk för
Ruby, kan det se ut så här:

{% highlight ruby %}
require 'sinatra'

get '/' do
  "Din IP-adress: #{request.ip}"
end
{% endhighlight %}

Kan det bli mycket sexigare? Om du är nyfiken så tycker jag att du ska kika mer på [Sinatra för Ruby](https://sinatrarb.com), [Slim för PHP](https://www.slimframework.com), [Spark för Java](https://www.sparkjava.com) eller [Flask för Python](https://palletsprojects.com/p/flask/).

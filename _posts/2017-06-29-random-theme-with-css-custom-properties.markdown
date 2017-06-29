---
layout: post
title:  "Random Theme with CSS Variables (Custom Properties)"
date:   2017-06-29
categories: jekyll update
---
I recently finished a redesign of my website and after reading a <a href="https://www.smashingmagazine.com/2017/04/start-using-css-custom-properties/">great article from Smashing Magazine</a>, I decided I wanted to try to incorporate CSS Custom Properties. I like the idea of using custom properties for theming, however my website doesn't really need user controlled theming, so I decided to do a randomly changing colour scheme whenever the page is loaded just for the learning experience.

Although all of this can be achieved through jQuery, I wanted to keep all my base colors and variables together in my main css file for maintainability. To begin with I started by declaring my theme colour as black for a placeholder and then creating variables for the different colors I wanted to use.


CSS
{% highlight CSS %}
body {
  --theme-color: #000;
  --blue: #1968fc;
  --green: #55cd2f;
  --orange: #ffa800;
  --red: #ea0505;
}
{% endhighlight %}

Next I put all of the color css variables into an array in jQuery and then created a 'color' variable with the value set to a random selection from the array I had just created. Now all I had to do was change the CSS variable '--theme-color' value to the jQuery 'color' variable I just created. One of the coolest parts of CSS variables is the way it can link in with JS.


jQuery
{% highlight jQuery %}
var colors = Array('var(--blue)','var(--green)','var(--orange)','var(--red)');
var color = colors[Math.floor(Math.random() * colors.length)];

document.body.style.setProperty('--theme-color', color);
{% endhighlight %}

And that's pretty much it, now just use 'var(--theme-color)' in your CSS anywhere you want your random theme color to be eg.


CSS
{% highlight CSS %}
.button {
  border: 3px solid #000; //Fallback for IE and older verison of Edge
  border: 3px solid var(--theme-color);
}
{% endhighlight %}

Jump over to the <a href="{{ "/" | prepend: site.baseurl }}">home</a> page and hit refresh a few times to see it in action. CSS variables are a big part of the future for front end, I'm excited to see some creative ways they can be implemented.

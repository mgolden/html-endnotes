jquery-endnotes
===============


## This small javascript file greatly simplifies the creation of footnotes (endnotes really) in an html document.

This js file was written because I didn't find anyone who had written a simple, automated way to handle references in an html file, the way that wikipedia (or laTeX) would. The references should be included right where the text doing the referencing lives, automatically numbered, and the references should be placed in a group at a place selectable by the author.

## To use

In the head block, include jquery first, and then jquery-endnotes.js.

In the document itself, simply enclose the words you want to attach the reference to in a `<span>` element, with a data-ref attribute attached.  The contents of the data-ref element become the reference. The data-ref string contains a list of _pieces_, separated by pipes (`|`).  If a piece starts with the string `http` it is considered a _link piece_. If it doesn't, it is considered a _text piece_. Whenever a link piece precedes a text piece, it goes in an `<a href` around the text. If it doesn't precede a text piece (either because it's the last piece, or because it precedes another link piece), then it is rendered itself into the reference, an `<a href` around itself.  If a text piece is not preceded by a link piece it is rendered as plain text in the reference.

You can have as many of these span elements with data-ref attributes as you want.

Finally, at the end, you should have an element (generally a `<div>` or a `<section>`) with the id `"endnotes-here"` in which the endnotes will be rendered.

## Appearance

There is no styling or linking applied to the words in the span itself. The numbered superscript is linked to the appropriate endnote and the endnote is linked back to the superscript under a `^` in the endnote itself.

## Example

This is the contents of the example.html file, included in this repo.

```
<html>
<head>
  <script type='text/javascript' src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script type="text/javascript" src="jquery-endnotes.js"></script>
</head>
<body>
<h2>My Favorite President</h2>
<p>
I want to say that <span data-ref="http://en.wikipedia.org/wiki/Abraham_Lincoln|Abe Lincoln|Wikipedia">Abe Lincoln</span> was my favorite president.
He was definitely preferable to <span data-ref="https://en.wikipedia.org/wiki/Chester_A._Arthur|Chester A. Arthur|Wikipedia, see also |https://www.biography.com/people/chester-a-arthur-9190059|Chester A. Arthur Biography Lawyer, U.S. Vice President, U.S. President (1829-1886)|A+E Television Networks, November 21, 2016">Chester A. Arthur.</span>.
There are some people, however, who think Arthur was quite <span data-ref="https://brandongaille.com/19-fabulous-chester-a-arthur-quotes/">a wit,</span>
but I am <span data-ref="At least not very much.">not impressed.</span>
You can use <span data-ref="https://www.duckduckgo.com|http://www.startpage.com">your favorite search engine</span> to find out more about the presidents.
</p>
<div>
  <h2>References</h2>
  <div id="endnotes-here"></div>
</div>
</body>
</html>
```

## Limitations

There is no way to escape a pipe if you need it in the reference itself.

## License

jquery-endnotes is freely distributable under the terms of an MIT license.

## Copyright

Copyright (c) 2018 Mitchell Golden

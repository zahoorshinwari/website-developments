# popularnames

This is an npm library created during the training at Coyotiv UG to create girl names.

# Popular Indian girl names 2021

This is a library for searching popular Indian girl names as of 2021. If you enter a number from one to ten (1-10) you will get the Top 10 names. So if you are unsure which name your girl should have, you can let faith decide. Source: https://www.babycenter.in/a25042694/top-100-girl-names-in-india-in-2021

1 = Prisha
2 = Aadhya
3 = Amyra
4 = Inaya
and so on

# Installation

```sh
$ npm i popularnames
```

# Usage

```js
const popularnames = require("popularnames");
const name = popularnames(number); // number is any number i.e. integer between 1 and 10 and for example 1 creates Prisha.
console.log(name);
```

# LICENSE

MIT License

Copyright (c) 2022 Barnali Smollich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE

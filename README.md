
WordNet-LMF-EN
==============

WordNet Lexical Markup Framework (LMF): English (EN)

<p/>
<img src="https://nodei.co/npm/wordnet-lmf-en.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/rse/wordnet-lmf-en.png" alt=""/>

About
-----

This is a [Node.js](https://nodejs.org/) module shipping the
[MIT-style](http://compling.hss.ntu.edu.sg/omw/wns/eng/LICENSE) licensed,
156K words containing, on-the-fly downloaded [WordNet LMF (XML)](https://github.com/globalwordnet/schemas)
data file of [Princeton WordNet 3.1 (PWN)](https://wordnet.princeton.edu/)
from [Open Multilingual Wordnet](http://compling.hss.ntu.edu.sg/omw/),
plus the corresponding SQLite database file, on-the-fly generated with the
[wordnet-lmf](https://npmjs.com/wordnet-lmf) module.

Installation
------------

```shell
$ npm install wordnet-lmf wordnet-lmf-en
```

Usage
-----

```js
(async () => {

    const LMF   = require("wordnet-lmf")
    const LMFen = require("wordnet-lmf-en")

    console.log(LMFen.name)

    let lmf = new LMF({ database: LMFen.db })
    await lmf.open()
    let results = await lmf.query(
        "SELECT * FROM Lemma WHERE writtenForm LIKE '%hauskeep%';",
        { format: "table" }
    )
    console.log(results)
    await lmf.close()

})().catch((err) => {
    console.log(`ERROR: ${err}`)
})
```

```
OMW Princeton WordNet 3.1 (2011-05-26) [MIT-style]
┌────────────────┬──────────────┬──────────────┐
│ lexicalEntryId │ writtenForm  │ partOfSpeech │
├────────────────┼──────────────┼──────────────┤
│ w41812         │ housekeeping │ n            │
│ w37414         │ housekeep    │ v            │
│ w113151        │ housekeeper  │ n            │
└────────────────┴──────────────┴──────────────┘
```

License
-------

Copyright (c) 2018-2019 Dr. Ralf S. Engelschall (http://engelschall.com/)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


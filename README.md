
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
[CC-BY-4.0](https://spdx.org/licenses/CC-BY-4.0.html) licensed,
163K words containing, on-the-fly downloaded [WordNet LMF (XML)](https://github.com/globalwordnet/schemas)
data file of [English WordNet 2020(https://en-word.net/)], which is based on
[Princeton WordNet 3.1 (PWN)](https://wordnet.princeton.edu/)
from [Open Multilingual Wordnet (OMW)](http://compling.hss.ntu.edu.sg/omw/),
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
English WordNet 2020 (2020-04-17) [163K words, CC-BY-4.0]
┌────────────────────┬──────────────┬──────────────┐
│ lexicalEntryId     │ writtenForm  │ partOfSpeech │
├────────────────────┼──────────────┼──────────────┤
│ ewn-housekeep-v    │ housekeep    │ v            │
│ ewn-housekeeper-n  │ housekeeper  │ n            │
│ ewn-housekeeping-n │ housekeeping │ n            │
│ ewn-housekeep-v    │ housekeep    │ v            │
│ ewn-housekeeper-n  │ housekeeper  │ n            │
│ ewn-housekeeping-n │ housekeeping │ n            │
└────────────────────┴──────────────┴──────────────┘
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


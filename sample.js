
(async () => {

    const LMF   = require("wordnet-lmf")
    const LMFen = require(".")

    console.log(LMFen.name)

    let lmf = new LMF({ database: LMFen.db })
    await lmf.open()
    let results = await lmf.query(
        "SELECT * FROM Lemma WHERE writtenForm LIKE '%nerd%';",
        { format: "table" }
    )
    console.log(results)
    await lmf.close()

})().catch((err) => {
    console.log(`ERROR: ${err}`)
})


function fillApplicationForm() {
    // getYxmc(event: {srcElement: yxdh_$i}) -> get information of school
    // getZymc(event: {srcElement: zydh_$i_0}) -> get information of major
    // onZydhBlur_pxzy(event: {srcElement: zydh_$i_0}) -> expand list
    const APPLICATION_COUNT = 96
    const COLUMNS = 2 // data[0]: School, data[1]: Major
    function pack(element) {
        return new Object({
            srcElement: element,
            target: element
        })
    }
    function work() {
        alert("Please check your form once finished to ensure its correctness.\nALERT: WE TAKE NO RESPONSIBILITY FOR ANY CONSEQUENCE IT CAUSES! USE IT AT YOUR OWN RISK!")
        var rawList = prompt('Input multi line data copied by other text editor:').split("\n")
        var count = rawList.length
        if (count > 96) {
            alert("Too many applications!")
            return false
        }
        var dataList = new Array()
        var i = 0, j = 0
        for (i = 0; i < count; i++) {
            rawList[i] = rawList[i].replace("\t", " ")
            dataList[i] = rawList[i].split(" ")
        }
        rawList = null
        for (i = 0; i < count; i++) {
            var schoolElement = document.getElementById("yxdh_" + i)
            var majorElement = document.getElementById("zydh_" + i + "_0")

            schoolElement.value = dataList[i][0]
            getYxmc(pack(schoolElement))

            majorElement.value = dataList[i][1]
            getZymc(pack(majorElement))

            onZydhBlur_pxzy(pack(majorElement))
        }
    }
    var expandBtnElement = document.getElementById("zyMenu210")
    var formParentElement = document.getElementById("zyEdit210")
    if (formParentElement.childElementCount === 0) {
        expandBtnElement.click()
    }
    setTimeout(work, 500) // give browser thread enough time to render dom
}
fillApplicationForm()
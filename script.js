const ObjectFilter = (detailData, key1) => {

    const Value = Object.entries(detailData)
        .filter(([key, value]) => key !== key1)
    const Value1 = []
    for (const row of Value) for (const e of row) Value1.push(e)

    const convertArrayToObject = (array) => {
        const initialValue = {}

        for (const index in array) {

            if (index % 2 === 0) {
                // eslint-disable-next-line no-unused-expressions
                initialValue[array[index]] = array[parseInt(index) + 1]
            }
        }
        return initialValue
    }

    return convertArrayToObject(Value1)
}
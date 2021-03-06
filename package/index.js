function getFilteredDataObject(arrayData=[],key='',search,exact=false)
{
    const data = arrayData.filter(res=>{
        if(exact) return res[key]===search
        else return res[key].includes(search)
    })
    return data
}
module.exports = getFilteredDataObject

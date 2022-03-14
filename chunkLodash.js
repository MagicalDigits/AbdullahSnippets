//chunk function is an alternative to ladash chunk
//Had to use this in order to create mulitple video layouts using same code
//Basically it splits a large array into "chunkSize" smaller chunks and spits out a 2d array

const chunk = (arr, chunkSize = 1, cache = []) => {
        const tmp = [...arr]
        if (chunkSize <= 0) return cache
        while (tmp.length) cache.push(tmp.splice(0, chunkSize))
        return cache
}
const split = chunk(videos, 3)
console.log(split);

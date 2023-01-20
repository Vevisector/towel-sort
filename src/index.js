// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }
    const flat = matrix.reduce((prev, item, i) => {
        if (i % 2 !== 0) {
            item.reverse();
        }
        return prev.concat(item);
    }, []);
    return (matrix = flat);
};

export default {
    // ! create palette, needs to be moved
  createCols: function (_url) {
    let slash_index = _url.lastIndexOf("/");
    let palette = _url.slice(slash_index + 1);
    let arr = palette.split("-");
    arr.map((item, i) => {
      arr[i] = "#" + arr[i];
    });

    return arr;
  },
};

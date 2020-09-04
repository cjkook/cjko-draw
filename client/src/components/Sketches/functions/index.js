export default {
  createCols: function (_url) {
    let slash_index = _url.lastIndexOf("/");
    let palette = _url.slice(slash_index + 1);
    let arr = palette.split("-");
    arr.map((item, i) => {
      const j = Math.floor(Math.random() * i);
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    });
    arr.map((item, i) => {
      arr[i] = "#" + arr[i];
    });

    return arr;
  },
};

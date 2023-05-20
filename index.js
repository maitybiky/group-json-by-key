class groupProto {
  constructor(arr) {
    this.bySame = function (groupKey) {
      if (!Array.isArray(arr) || arr.length < 1) {
        return;
      }
      if (groupKey.toString().includes(".")) {
      }
      let grpBy = arr.reduce((final, prev) => {
        let u = [...arr].filter(
          (it) => this.deep(groupKey, it) === this.deep(groupKey, prev)
        );
        // let u = [...arr].filter((it) => it[groupKey] === prev[groupKey]);
        let obj = { ...final };
        obj[this.deep(groupKey, prev)] = [...u];
        return obj;
      }, {});
      return grpBy;
    };
    this.deep = function (par, jects) {
      let ar = par.split(".");
      let obj = { ...jects };

      ar.forEach((element) => {
        obj = obj[element];
      });
      return obj;
    };
  }
}
function group(arr) {
  return new groupProto(arr);
}

module.exports = group;

exports.to_ar_ku = function (num) {
  const KU_AR_NUM = [
    { 0: "٠" },
    { 1: "١" },
    { 2: "٢" },
    { 3: "٣" },
    { 4: "٤" },
    { 5: "٥" },
    { 6: "٦" },
    { 7: "٧" },
    { 8: "٨" },
    { 9: "٩" },
  ];
  let num_to_string = num.toString();
  let splite_num = num_to_string.split("");
  let num_en = "";
  for (let i = 0; i < splite_num.length; i++) {
    const num = splite_num[i];
    for (let j = 0; j < KU_AR_NUM.length; j++) {
      const num_AR_KU = KU_AR_NUM[j];
      let NUM_key = Object.keys(num_AR_KU);
      if (NUM_key[0] === num) {
        let NUM_key = Object.values(num_AR_KU);
        num_en = `${num_en}${NUM_key}`;
      }
    }
  }
  return num_en;
};

exports.to_en = function (num) {
  const EN_NUM = [
    { "٠": 0 },
    { "١": 1 },
    { "٢": 2 },
    { "٣": 3 },
    { "٤": 4 },
    { "٥": 5 },
    { "٦": 6 },
    { "٧": 7 },
    { "٨": 8 },
    { "٩": 9 },
  ];
  let num_to_string = num.toString();
  let splite_num = num_to_string.split("");
  let num_ar_ku = "";
  for (let i = 0; i < splite_num.length; i++) {
    const num = splite_num[i];
    for (let j = 0; j < EN_NUM.length; j++) {
      const num_en = EN_NUM[j];
      let NUM_key = Object.keys(num_en);
      if (NUM_key[0] === num) {
        let NUM_key = Object.values(num_en);
        num_ar_ku = `${num_ar_ku}${NUM_key}`;
      }
    }
  }
  return num_ar_ku;
};

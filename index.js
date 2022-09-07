var formatForSlider = {
  from: function (formattedValue) {
    return Number(formattedValue);
  },
  to: function (numericValue) {
    return Math.round(numericValue);
  },
};

var formatSlider = document.getElementById("formatting-slider");

noUiSlider.create(formatSlider, {
    
  // Values are parsed as numbers using the "from" function in "format"
  start: [0, 1000],
  connect: true,
  step: 1,
  range: {
    min: 0,
    max: 1000,
  },
  format: formatForSlider,
});

// Values are parsed as numbers using the "from" function in "format"
formatSlider.noUiSlider.set([0, 1000]);

var formatValues = [
  document.getElementById("formatting-start"),
  document.getElementById("formatting-end"),
];

formatSlider.noUiSlider.on("update", function (values, handle) {
  formatValues[handle].innerHTML = values[handle].toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });
});

import "./customBlocks";

const toolboxCategories = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Logic",
      colour: "#9e0142",
      contents: [
        {
          kind: "block",
          type: "controls_if",
        },
        {
          kind: "block",
          type: "logic_compare",
        },
        {
          kind: "block",
          type: "logic_operation",
        },
        {
          kind: "block",
          type: "logic_boolean",
        },
        {
          kind: "block",
          type: "logic_negate",
        },
        {
          kind: "block",
          type: "logic_null",
        },
        {
          kind: "block",
          type: "logic_ternary",
        },
      ],
    },
    {
      kind: "category",
      name: "Loops",
      colour: "#d53e4f",
      contents: [
        {
          kind: "block",
          type: "controls_repeat_ext",
        },
        {
          kind: "block",
          type: "controls_repeat",
        },
        {
          kind: "block",
          type: "controls_whileUntil",
        },
        {
          kind: "block",
          type: "controls_for",
        },
        {
          kind: "block",
          type: "controls_forEach",
        },
        {
          kind: "block",
          type: "controls_flow_statements",
        },
      ],
    },
    {
      kind: "category",
      name: "Text",
      colour: "#f46d43",
      contents: [
        {
          kind: "block",
          type: "text",
        },
        {
          kind: "block",
          type: "text_print",
        },
        {
          kind: "block",
          type: "text_multiline",
        },
        {
          kind: "block",
          type: "text_join",
        },
        {
          kind: "block",
          type: "text_length",
        },
        {
          kind: "block",
          type: "text_append",
        },
        {
          kind: "block",
          type: "text_isEmpty",
        },
        {
          kind: "block",
          type: "text_indexOf",
        },
        {
          kind: "block",
          type: "text_charAt",
        },
        {
          kind: "block",
          type: "text_getSubstring",
        },
        {
          kind: "block",
          type: "text_changeCase",
        },
        {
          kind: "block",
          type: "text_trim",
        },
        {
          kind: "block",
          type: "text_count",
        },
      ],
    },
    {
      kind: "category",
      name: "Math",
      colour: "#fdae61",
      contents: [
        {
          kind: "block",
          type: "math_round",
        },
        {
          kind: "block",
          type: "math_number",
        },
        {
          kind: "block",
          type: "math_arithmetic",
        },
        {
          kind: "block",
          type: "math_single",
        },
        {
          kind: "block",
          type: "math_trig",
        },
        {
          kind: "block",
          type: "math_constant",
        },
        {
          kind: "block",
          type: "math_number_property",
        },
        {
          kind: "block",
          type: "math_on_list",
        },
        {
          kind: "block",
          type: "math_modulo",
        },
        {
          kind: "block",
          type: "math_constrain",
        },
        {
          kind: "block",
          type: "math_random_int",
        },
        {
          kind: "block",
          type: "math_random_float",
        },
        {
          kind: "math_atan2",
          type: "math_random_float",
        },
        {
          kind: "math_atan2",
          type: "math_trig",
        },
        {
          kind: "math_atan2",
          type: "math_constant",
        },
      ],
    },
    {
      kind: "category",
      name: "Lists",
      colour: "#fee08b",
      contents: [
        {
          kind: "block",
          type: "lists_create_empty",
        },
        {
          kind: "block",
          type: "lists_reverse",
        },
        {
          kind: "block",
          type: "lists_create_with",
        },
        {
          kind: "block",
          type: "lists_repeat",
        },
        {
          kind: "block",
          type: "lists_length",
        },
        {
          kind: "block",
          type: "lists_isEmpty",
        },
        {
          kind: "block",
          type: "lists_getIndex",
        },
        {
          kind: "block",
          type: "lists_indexOf",
        },
        {
          kind: "block",
          type: "lists_setIndex",
        },
        {
          kind: "block",
          type: "lists_getSublist",
        },
        {
          kind: "block",
          type: "lists_split",
        },
        {
          kind: "block",
          type: "lists_sort",
        },
      ],
    },
    {
      kind: "category",
      name: "Variables",
      colour: "#e6f598",
      custom: "VARIABLE",
    },
    {
      kind: "category",
      name: "Functions",
      colour: "#abdda4",
      contents: [
        {
          kind: "block",
          type: "procedures_defnoreturn",
        },
        {
          kind: "block",
          type: "procedures_defreturn",
        },
        {
          kind: "block",
          type: "procedures_mutatorcontainer",
        },
        {
          kind: "block",
          type: "procedures_mutatorarg",
        },
        {
          kind: "block",
          type: "procedures_callnoreturn",
        },
        {
          kind: "block",
          type: "procedures_callreturn",
        },
        {
          kind: "block",
          type: "procedures_ifreturn",
        },
      ],
    },
    {
      kind: "category",
      name: "Base",
      colour: "#66c2a5",
      contents: [
        {
          kind: "block",
          type: "arduinoBuiltInLed",
        },
        {
          kind: "block",
          type: "arduino_digital_write",
        },
        {
          kind: "block",
          type: "arduinoDigitalRead",
        },
        {
          kind: "block",
          type: "arduino_pin_mode",
        },
        {
          kind: "block",
          type: "arduino_analog_write",
        },
        {
          kind: "block",
          type: "arduinoDigitalWrite",
        },
        {
          kind: "block",
          type: "arduinoTone",
        },
      ],
    },
    {
      kind: "category",
      name: "Serial",
      colour: "#3288bd",
      contents: [
        {
          kind: "block",
          type: "boardSerialInit",
        },
        {
          kind: "block",
          type: "boardSerialPrint",
        },
        {
          kind: "block",
          type: "boardSerialAvailable",
        },
        {
          kind: "block",
          type: "boardSerialRead",
        },
        {
          kind: "block",
          type: "boardSerialReadStringUntil",
        },
        {
          kind: "block",
          type: "boardSerialFlush",
        },
      ],
    },
  ],
};

export default toolboxCategories;

const toolboxCategories = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Logic",
      colour: "#5C81A6",
      contents: [
        {
          kind: "block",
          type: "controls_if"
        },
        {
          kind: "block",
          type: "logic_compare"
        },
        {
          kind: "block",
          type: "logic_operation"
        },
        {
          kind: "block",
          type: "logic_boolean"
        },
        {
          kind: "block",
          type: "logic_negate"
        },
        {
          kind: "block",
          type: "logic_null"
        },
        {
          kind: "block",
          type: "logic_boolean"
        },
        {
          kind: "block",
          type: "logic_ternary"
        }
      ]
    },
    {
      kind: "category",
      name: "Loops",
      colour: "#FFAB19",
      contents: [
        {
          kind: "block",
          type: "controls_repeat_ext"
        },
        {
          kind: "block",
          type: "controls_repeat"
        },
        {
          kind: "block",
          type: "controls_whileUntil"
        },
        {
          kind: "block",
          type: "controls_for"
        },
        {
          kind: "block",
          type: "controls_forEach"
        },
        {
          kind: "block",
          type: "controls_flow_statements"
        }
      ]
    },
    {
      kind: "category",
      name: "Text",
      colour: "#A679BD",
      contents: [
        {
          kind: "block",
          type: "text"
        },
        {
          kind: "block",
          type: "text_multiline"
        },
        {
          kind: "block",
          type: "text_join"
        },
        {
          kind: "block",
          type: "text_length"
        },
        {
          kind: "block",
          type: "text_append"
        },
        {
          kind: "block",
          type: "text_isEmpty"
        },
        {
          kind: "block",
          type: "text_indexOf"
        },
        {
          kind: "block",
          type: "text_charAt"
        },
        {
          kind: "block",
          type: "text_getSubstring"
        },
        {
          kind: "block",
          type: "text_changeCase"
        },
        {
          kind: "block",
          type: "text_trim"
        },
        {
          kind: "block",
          type: "text_count"
        }
      ]
    },
    {
      kind: "category",
      name: "Math",
      colour: "#5CA65C",
      contents: [
        {
          kind: "block",
          type: "math_round"
        },
        {
          kind: "block",
          type: "math_number"
        },
        {
          kind: "block",
          type: "math_arithmetic"
        }
      ]
    },
    {
      kind: "category",
      name: "Lists",
      colour: "#745BA5",
      contents: [
        {
          kind: "block",
          type: "lists_create_empty"
        },
        {
          kind: "block",
          type: "lists_create_with"
        },
        {
          kind: "block",
          type: "lists_repeat"
        },
        {
          kind: "block",
          type: "lists_length"
        },
        {
          kind: "block",
          type: "lists_isEmpty"
        },
        {
          kind: "block",
          type: "lists_getIndex"
        },
        {
          kind: "block",
          type: "lists_indexOf"
        },
        {
          kind: "block",
          type: "lists_setIndex"
        },
        {
          kind: "block",
          type: "lists_getSublist"
        },
        {
          kind: "block",
          type: "lists_split"
        },
        {
          kind: "block",
          type: "lists_sort"
        }
      ]
    },
    {
      kind: "category",
      name: "Variables",
      colour: "#FF8C1A",
      custom: "VARIABLE"
    },
    {
      kind: "category",
      name: "Functions",
      colour: "#9A5CA6",
      contents: [
        {
          kind: "block",
          type: "procedures_defnoreturn"
        },
        {
          kind: "block",
          type: "procedures_defreturn"
        }
      ]
    }
  ]
};

export default toolboxCategories;

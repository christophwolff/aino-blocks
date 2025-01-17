const attributes = {
  imgURL: {
    type: "string",
    source: "attribute",
    attribute: "src",
    selector: "img"
  },
  imgID: {
    type: "number"
  },
  imgAlt: {
    type: "string",
    source: "attribute",
    attribute: "alt",
    selector: "img"
  },
  imgSize: {
    type: "string"
  },
  imgRadius: {
    type: "number",
    default: 0
  },
  name: {
    type: "string"
  },
  info: {
    type: "string"
  },
  infoTextColor: {
    type: "string"
  },
  nameTextColor: {
    type: "string"
  },
  alignment: {
    type: 'string',
  },
  layout: {
    type: 'string',
  },
};

export default attributes;
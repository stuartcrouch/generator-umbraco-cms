const uuid = require('uuid');

/**
 * Builds the options.
 * @param {object} props - The input properties.
 * @returns {object} The options.
 */
module.exports = function buildOptions(props) {
  const { name } = props;
  const now = (new Date()).toISOString();
  const yearLength = 4;
  const dateLength = 10;
  const year = now.substr(0, yearLength);
  const date = now.substr(0, dateLength);
  return {
    name,
    companyName: "company",
    projUUID: uuid.v1().toUpperCase(),
    libUUID: uuid.v1().toUpperCase(),
    slnUUID: uuid.v1().toUpperCase(),
    now: date,
    year,
    version: "1.0.0.0",
  };
};

export const entityTypeActions = (user_name, entity_name) => {
  return {
    201: `letter is send by ${user_name}`,
    202: `letter is signed by ${user_name}`,
    301: `${entity_name} is approved by ${user_name}`,
    302: `${entity_name} is rejected by ${user_name}`,
    303: `${entity_name} is send by ${user_name} for approval`,
    606: `A new policy update in ${entity_name}`,
  };
};

export const entityTypeIdMapping = {
  APPROVED: "301",
  REJECTED: "302",
  LETTER_SENT: "201",
  LETTER_SIGNED: "202",
  SEND_APPROVAL: "303",
  POLICY_ACTIVE: "606",
};

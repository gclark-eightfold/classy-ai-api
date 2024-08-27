import { jsonSchema, tool } from "ai";

export const tools = { 
fetchClientProfile: tool({
  description: "Show the Profile for a given Client",
  parameters: jsonSchema<any>({ type: "object", properties: {"client_id":{"type":"string"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/apps/${args.client_id}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listApiAppOrganizations: tool({
  description: "Retrieves a list of all Organizations for specified Client",
  parameters: jsonSchema<any>({ type: "object", properties: {"with":{"type":"array","items":{"type":"string"}},"client_id":{"type":"string"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/apps/${args.client_id}/organizations?with=${encodeURIComponent(args.with)}&page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
fetchBillingDedication: tool({
  description: "Fetch specified Billing Dedication",
  parameters: jsonSchema<any>({ type: "object", properties: {"with":{"type":"array","items":{"type":"string","enum":["ecard"]}},"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/dedications/${args.id}?with=${encodeURIComponent(args.with)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
updateBillingDedication: tool({
  description: "Update a Dedication",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"DedicationFillable","properties":{"type":{"description":"Description of Dedication's purpose","type":"string","enum":["honor","memory"]},"honoree_name":{"description":"Honoree's full name","type":"string"},"name":{"description":"Dedication contact full name","type":"string"},"email_address":{"description":"Email Address","type":"string"},"address":{"description":"Dedication contact address","type":"string"},"city":{"description":"Dedication contact city","type":"string"},"state":{"description":"Dedication contact state","type":"string","maxLength":50},"postal_code":{"description":"Dedication contact postal code","type":"string"},"country":{"description":"Dedication contact country","type":"string","maxLength":2},"is_gift_amount_msg_included":{"description":"Indicates whether the gift amount is to be displayed in communication","type":"boolean"},"ecard_message":{"description":"Message added to Ecard","type":"string"},"first_name":{"description":"Dedication contact first name","type":"string"},"last_name":{"description":"Dedication contact last name","type":"string"},"honoree_first_name":{"description":"Honoree's first name","type":"string"},"honoree_last_name":{"description":"Honoree's last name","type":"string"}},"type":"object"},"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/dedications/${args.id}`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
fetchMatchedTransaction: tool({
  description: "Fetch specified Matched Transaction",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/matched-transactions/${args.id}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listRecurringDonationPlanHistory: tool({
  description: "List the history for a Recurring Donation Plan",
  parameters: jsonSchema<any>({ type: "object", properties: {"recurring_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/recurring-donation-plans/${args.recurring_id}/history?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
fetchTransaction: tool({
  description: "Retrieves a Transaction from the ID",
  parameters: jsonSchema<any>({ type: "object", properties: {"transaction_id":{"type":"integer"},"with":{"type":"array","items":{"type":"string","enum":["answers","campaign","channel_transaction","dedication","decline_reason","fundraising_page","fundraising_team","items","member","offline_payment_info","organization","receipt_serial","recurring_donation_plan","reprocess_attempt_info","reprocess_history","source_tracking_codes","supporter","order_donation_match"]}}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/transactions/${args.transaction_id}?with=${encodeURIComponent(args.with)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
updateTransaction: tool({
  description: "Update an existing Transaction",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"allOf":[{"title":"Transaction Fillable","properties":{"billing_address1":{"description":"Line one of Billing address","type":["null","string"]},"billing_address2":{"description":"Line two of Billing address","type":["null","string"]},"billing_city":{"description":"Billing city","type":["null","string"]},"billing_country":{"description":"Billing country. Must be a valid ISO 3166-1 alpha-2 country code","type":["null","string"]},"billing_first_name":{"description":" Billing first name","type":["null","string"]},"billing_last_name":{"description":"Billing last name","type":["null","string"]},"billing_postal_code":{"description":"Billing zip/postal code","type":["null","string"]},"billing_state":{"description":"Billing state/province","type":["null","string"],"maxLength":32},"browser_info":{"description":"Browser information","type":["null","string"]},"comment":{"description":"Organization comment","type":["null","string"]},"company_name":{"description":"Name of company this Transaction has ties to","type":["null","string"]},"hide_amount":{"description":"Whether purchaser indicated if Transaction amount should be hidden","type":["null","boolean"]},"is_anonymous":{"description":"Whether purchaser indicated if transaction should be anonymous","type":["null","boolean"]},"is_gift_aid":{"description":"Flag whether the donor opted into gift aid used by the UK or not. Can only be set if the organization allows it","type":["null","boolean"]},"is_reprocess":{"description":"If it is a reprocessed transaction or not","type":["null","boolean"]},"member_country":{"description":"Country of the Member","type":["null","string"]},"member_email_address":{"description":"Email address of purchaser Classy Member","type":["null","string"]},"member_name":{"description":" Name of purchaser Classy Member","type":["null","string"]},"member_phone":{"description":"Phone number of purchaser Classy Member","type":["null","string"]},"metadata":{"description":"An optional set of unstructured metadata to be stored with a Transaction","type":["null","string"]},"raw_currency_code":{"description":"Currency Code of the Transaction before normalization","type":["null","string"]},"status":{"description":"The status of the Transaction","type":["null","string"],"enum":["test","canceled","incomplete","success","refunded","cb_lost","cb_initiated","voided","pending","failed"]},"reprocess_attempt_info":{"title":"ReprocessAttemptInfoFillable","properties":{"original_transaction_id":{"description":"ID of the original Transaction","type":"integer"},"reprocess_transaction_id":{"description":"ID of Reprocess Transaction","type":"integer"},"initiated_by_id":{"description":"The ID of the member initiating the reprocess","type":"integer"},"pp_transaction_id":{"description":"Transaction ID for the payment provider (e.g. Classy Pay)","type":"string"},"state":{"description":"Reprocess status","type":"string","enum":["completed","pending","failed"]}},"type":"object"}},"type":"object"},{"properties":{"answers":{"description":"Collection of Answers","type":"array","items":{"title":"Answer","properties":{"answer":{"description":"Answer content","type":"string","maxLength":255},"answerable_id":{"description":"Primary identifier of associated Fundraising Entity object. Required with answerable_type","type":["null","integer"]},"answerable_type":{"description":"Type of associated Fundraising Entity. Required with answerable_id","type":["null","string"],"enum":["fundraising_team","fundraising_page","transaction","campaign_registration"]},"campaign_id":{"description":"Primary identifier of associated Campaign","type":"integer"},"created_at":{"description":"Date/time of initial record creation","type":"string","format":"date-time"},"id":{"description":"Primary identifier of record","type":"integer"},"member_id":{"description":"Primary identifier of associated Member","type":"integer"},"question_id":{"description":"Primary identifier of associated Question","type":"integer"},"updated_at":{"description":"Date/time of last record update","type":["null","string"],"format":"date-time"}},"type":"object"}}},"type":"object"},{"properties":{"items":{"description":"Collection of Transaction Items","type":"array","items":{"title":"Transaction Item Fillable","properties":{"product_name":{"description":"Name of product","type":"string","maxLength":64},"quantity":{"description":"Quantity purchased","type":"integer","minimum":1},"raw_final_price":{"description":"Represents the total raw value of a Transaction item - it is either set directly (as with a direct donation) or derived from the Product of `raw_price` (the price of the Transaction item's associated Product) and the specified quantity. All raw amounts are presented in terms of `raw_currency_code`, which is inherited from the Transaction item's Transaction and cannot be set on a per-item basis","type":["null","number"],"format":"double","minimum":0},"raw_overhead_amount":{"description":"Which indicates the amount of the `raw_final_price` that is attributed to Campaign overhead.","type":["null","number"],"format":"double","minimum":0},"type":{"description":"Type of Transaction Item ledger","type":"string","enum":["donation","registration","offline_donation","chargeback_reversal","custom_product","auction","good"]}},"type":"object"}}},"type":"object"}]},"transaction_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/transactions/${args.transaction_id}`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listTransactionItems: tool({
  description: "Fetch Transaction Items.",
  parameters: jsonSchema<any>({ type: "object", properties: {"transaction_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/transactions/${args.transaction_id}/items?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listTransactionReceipts: tool({
  description: "Retrieves a list of all Transaction Receipts for a specific Transaction",
  parameters: jsonSchema<any>({ type: "object", properties: {"transaction_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/transactions/${args.transaction_id}/receipts?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
fetchCampaignAppealSet: tool({
  description: "Retrieves an Appeal Set for the specified Campaign.",
  parameters: jsonSchema<any>({ type: "object", properties: {"campaign_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/appeal-set`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createCampaignAppealSet: tool({
  description: "Create Appeal Set for specified Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"allOf":[{"title":"Appeal Set Fillable","properties":{"facebook_video_url":{"description":"Facebook video URL","type":["null","string"]},"facebook_text":{"description":"Facebook body text","type":["null","string"]},"twitter_text":{"description":"Twitter body text","type":["null","string"],"maxLength":280},"sms_text":{"description":"SMS body text","type":["null","string"],"maxLength":255},"email_subject":{"description":"Email subject","type":["null","string"],"maxLength":255},"email_body":{"description":"Email body","type":["null","string"]}},"type":"object"},{"properties":{"facebook_asset_id":{"description":"Primary identifier of associated Facebook Asset","type":"integer"}},"type":"object"}]},"campaign_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/appeal-set`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
fetchAppealSet: tool({
  description: "Retrieves an Appeal Set from the ID.",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/appeal-set/${args.id}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
updateAppealSet: tool({
  description: "Update Appeal Set",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"allOf":[{"title":"Appeal Set Fillable","properties":{"facebook_video_url":{"description":"Facebook video URL","type":["null","string"]},"facebook_text":{"description":"Facebook body text","type":["null","string"]},"twitter_text":{"description":"Twitter body text","type":["null","string"],"maxLength":280},"sms_text":{"description":"SMS body text","type":["null","string"],"maxLength":255},"email_subject":{"description":"Email subject","type":["null","string"],"maxLength":255},"email_body":{"description":"Email body","type":["null","string"]}},"type":"object"},{"properties":{"facebook_asset_id":{"description":"Primary identifier of associated Facebook Asset","type":"integer"}},"type":"object"}]},"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/appeal-set/${args.id}`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listCampaignActivities: tool({
  description: "Retrieves a list of all Activities related to the specified Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"campaign_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/activity?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listCampaignChannels: tool({
  description: "Retrieves a list of all Channels for the specified Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"campaign_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/channels?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createCampaignChannel: tool({
  description: "Create Channel for specified Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Campaign Channel","properties":{"campaign_id":{"description":"Primary identifier of associated Campaign","type":"integer","readOnly":true},"channel_name":{"description":"Name of Integration Channel","type":"string","enum":["Facebook","Instagram","DoubletheDonation"]},"created_at":{"description":"Date/time of initial record creation","type":"string","format":"date-time","readOnly":true},"id":{"description":"Primary identifier of record","type":"integer","readOnly":true},"status":{"description":"Status of Campaign Channel","type":"boolean"},"metadata":{"description":"Additional Campaign settings data in JSON format","properties":{"employer_match_on_donation_page":{"description":"Indicates whether there is an employer match on donation page","type":"boolean"},"employer_match_on_thankyou_page":{"description":"Indicates whether there is an employer match on thankyou page","type":"boolean"},"employer_match_preselect":{"description":"Indicates whether there is an employer match preselect","type":"boolean"}},"type":"object"},"updated_at":{"description":"Date/time of last record update","type":"string","format":"date-time","readOnly":true}},"type":"object"},"campaign_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/channels`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listCampaignCredentialSets: tool({
  description: "Retrieves a list of all Credential Sets for the specified Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"campaign_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/credential-sets?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createCampaignCredentialSet: tool({
  description: "Create Credential Set for specified Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"required":["member_id"],"properties":{"member_id":{"description":"Primary identifier of associated Member","type":"integer"}},"type":"object"},"campaign_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/credential-sets`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listCampaignDonationMatchingPlans: tool({
  description: "Retrieves a list of all Donation Matching Plans for specified Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"campaign_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/donation-matching-plans`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createDonationMatchingPlan: tool({
  description: "Create a Donation Matching Plan for specified Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Donation Matching Plan","required":["business_name","started_at","timezone_identifier"],"properties":{"id":{"description":"Primary identifier of record","type":"integer","readOnly":true},"campaign_id":{"description":"Primary identifier of associated Campaign","type":"integer","readOnly":true},"currency_code":{"description":"Currency in which the Donation Matching Plan matches donations. The currency cannot be modified after the DonationMatchingPlan is created.","type":"string"},"matching_limit_amount":{"description":"Total amount in the Donation Matching Plan currency the sponsor is willing to match. 0 means unlimited.","type":"number","minimum":0},"started_at":{"description":"Date/time of the beginning of the sponsor's matching period","type":"string","format":"date-time"},"ended_at":{"description":"Date/time of the end of the sponsor's matching period. The value must be after the `started_at` value.","type":"string","format":"date-time"},"business_name":{"description":"Name of the sponsor. Will be displayed in feed items when matching donations","type":"string"},"timezone_identifier":{"description":"Sponsor timezone","type":"string"},"matched_amount":{"description":"Total amount the sponsor has currently matched, in the currency of the Donation Matching Plan","type":"integer","minimum":0,"readOnly":true},"asset_id":{"description":"Primary identifier of sponsor thumbnail Asset which will be displayed in Feed Items","type":["null","integer"]},"created_at":{"description":"Date/time of initial record creation","type":"string","format":"date-time","readOnly":true},"updated_at":{"description":"Date/time of last record update","type":"string","format":"date-time","readOnly":true}},"type":"object"},"campaign_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/donation-matching-plans`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listCampaignRecurringDonationPlans: tool({
  description: "Retrieves a list of all Recurring Donation Plans for a specific Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"campaign_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/recurring-donation-plans?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createCampaignCreditAdjustment: tool({
  description: "Create Credential Adjustment for specified Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Credit Adjustment Fillable","properties":{"amount":{"description":"The amount of the Credit Adjustment.  Positive values add credit to a Fundraising Entity.  Negative values remove credit","type":"integer","format":"float"},"metadata":{"description":"Arbitrary JSON metadata","type":"string"},"memo":{"description":"An arbitrary memo about the Credit Adjustment.","type":"string","maxLength":255}},"type":"object"},"campaign_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/credit-adjustments`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listCampaignDomainSlugs: tool({
  description: "Retrieves a list of all Domain Slugs for specified Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"campaign_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/domain-slugs?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createCampaignDomainSlug: tool({
  description: "Create a Domain Slug for the specified Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"allOf":[{"title":"Domain Slug Fillable","properties":{"links_to_donation_page":{"description":"Indicates whether the slug should reference the Donation Page for the DomainSlug's Fundraising Entity","type":"boolean"},"value":{"description":"Value of the Domain Slug","type":"string","maxLength":255}},"type":"object"},{"properties":{"domain_id":{"description":"Primary identifier of associated Domain. If none provided, the default Domain will be used.","type":"integer"}},"type":"object"}]},"campaign_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/domain-slugs`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listEcards: tool({
  description: "Retrieves a list of all eCards made for the specified Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"campaign_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/ecards?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createEcard: tool({
  description: "Create an eCard for a Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Ecard","properties":{"asset_id":{"description":"Primary identifier of associated image file Asset","type":["null","integer"]},"campaign_id":{"description":"Primary identifier of associated Campaign","type":"integer","readOnly":true},"id":{"description":"Primary identifier of record","type":"integer","readOnly":true},"image_url":{"description":"Public URL for the Ecard image","type":"string"},"is_deleted":{"description":"Indicates whether Ecard has been deleted","type":"boolean","readOnly":true},"order":{"description":"Display order for listings. Impacts display in Classy.org","type":"integer"}},"type":"object"},"campaign_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/ecards`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
ListCampaignFAQs: tool({
  description: "List all FAQs for specified campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"campaign_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/faqs?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createFAQ: tool({
  description: "Create a FAQ for a campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"allOf":[{"title":"Fillable Frequently Asked Questions","properties":{"answer":{"description":"FAQ Answer Body","type":"string","format":"string","maxLength":500},"question":{"description":"FAQ Body","type":"string","format":"string","maxLength":100},"tag":{"description":"Tags assigned to the FAQ","type":["null","string"],"enum":["tax","other"]},"weight":{"description":"Identify the importance of this Question when sorting","type":"integer","maximum":255,"minimum":0}},"type":"object"}]},"campaign_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/faqs`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listCampaignFeedItems: tool({
  description: "List all Feed Items for specified Campaign (Direct)",
  parameters: jsonSchema<any>({ type: "object", properties: {"campaign_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/feed-items?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createCampaignFeedItem: tool({
  description: "Create a FeedItem (Comment) for specified Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"properties":{"comment":{"description":"Comment for the Campaign","type":"string"}},"type":"object"},"campaign_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/feed-items`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listCampaignFeedItemsScoped: tool({
  description: "List all Feed Items for specified Campaign (Scoped)",
  parameters: jsonSchema<any>({ type: "object", properties: {"campaign_id":{"type":"integer"},"scope":{"type":"string","enum":["direct","all"]},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/feed-items/${args.scope}?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listCampaignFundraisingPages: tool({
  description: "List all Fundraising Pages for specified Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"campaign_id":{"type":"integer"},"with":{"type":"array","items":{"type":"string","enum":["commitment","cover_photo","fundraising_team","logo","member","supporter"]}},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/fundraising-pages?with=${encodeURIComponent(args.with)}&page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listCampaignFundraisingTeams: tool({
  description: "Retrieves a list of all Fundraising Teams for the specified Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"campaign_id":{"type":"integer"},"with":{"type":"array","items":{"type":"string","enum":["campaign","cover_photo","logo","team_lead","team_policy"]}},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/fundraising-teams?with=${encodeURIComponent(args.with)}&page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createCampaignFundraisingTeam: tool({
  description: "Create a Fundraising Team for the specified Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Fundraising Team Fillable","properties":{"city":{"description":"City","type":["null","string"],"maxLength":50},"country":{"description":"Country. Must be a valid ISO 3166-1 alpha-2 country code","type":["null","string"],"maxLength":2},"description":{"description":"Team description","type":["null","string"]},"name":{"description":"Team name","type":"string","maxLength":127},"postal_code":{"description":"Postal Code","type":["null","string"],"maxLength":50},"raw_currency_code":{"description":"ISO code of the default currency in which this Fundraising Team should be presented. Defaults to 'currency_code' if not specified","type":["null","string"],"maxLength":3},"raw_goal":{"description":"Raw fundraising goal for this team. If unspecified, defaults to the team goal value set on the campaign","type":["null","integer"]},"state":{"description":"State/province name. Must be a valid USPS state code","type":["null","string"],"maxLength":100},"thank_you_text":{"description":"Default thank you text on the thank you page","type":["null","string"]},"designation_id":{"description":"Primary identifier of associated Designation. Defaults to the campaign's designation","type":["null","integer"]}},"type":"object"},"campaign_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/fundraising-teams`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listCampaignPromoCodes: tool({
  description: "Retrieves a list of all Promo Codes made for the specified Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"campaign_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/promo-codes?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createCampaignPromoCode: tool({
  description: "Create Promo Code for the specified Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Promo Code Fillable","properties":{"adjustment_amount":{"description":"Value to configure price adjustment when applied against an item. Can reflect either a percentage or flat amount based on associated adjustment_type","type":"integer"},"adjustment_type":{"description":"Specification of how adjustment_amount is applied","type":"string","enum":["percentage","amount"]},"code":{"description":"Value of the Promo Code to entered on checkout","type":"string","maxLength":25},"ends_at":{"description":"Date/time when the Promo Code can no longer be applied to purchases","type":"string","format":"date-time"},"is_active":{"description":"Indicates whether Promo Code is active or not regardless of availability or date range","type":"boolean"},"is_general":{"description":"Indicates whether Promo Code has a general designation, meaning it applies to all TicketTypes for its Campaign","type":"boolean"},"quantity":{"description":"Total number of items against which the Promo Code can be applied (null implies unlimited applications)","type":"integer"},"starts_at":{"description":"Date/time when record can start being applied to purchase","type":"string","format":"date-time"}},"type":"object"},"campaign_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/promo-codes`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listCampaignQuestions: tool({
  description: "Retrieves a list of all questions for a specific Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"campaign_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/questions?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createCampaignQuestion: tool({
  description: "Create a question for a Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"QuestionFillable","properties":{"enum_options":{"description":"Enum question options. Required for and exclusive to enum question type.","type":["null","array"],"items":{"title":"QuestionEnumOptionFillable","properties":{"label":{"description":"QuestionEnumOption label","type":"string"}},"type":"object"}},"is_required":{"description":"If the Question is required or not","type":"boolean"},"label":{"description":"Question label","type":"string"},"location":{"description":"Question location, must be valid for campaign type. donation_page supported by all, team_creation supported by reg_w_fund and p2p, page_creation supported by p2p, campaign_registration supported by p2p and ticketed.","type":"string","enum":["donation_page","team_creation","page_creation","campaign_registration"]},"product_id":{"description":"Identifier of associated product, such as ticket","type":["null","integer"]},"tag":{"description":"Question tag, must be unique for location on a campaign","type":["null","string"],"enum":["address","address2","address_type","birthdate","blog","cellphone","city","company_name","country","email_address","email_type","emergency_first_name","emergency_last_name","emergency_phone","event_waiver","first_name","gender","pronoun","homephone","last_name","middle_name","postal_code","prefix","run_walk","shirt_size","state","state","suffix","text_opt_in","website"]},"type":{"description":"Type of the Question","type":"string","enum":["boolean","integer","currency","enum","text","string","date","yes_no"]},"weight":{"description":"Weight of the Question, used for display order","type":"integer"}},"type":"object"},"campaign_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/questions`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listCampaignRegistrations: tool({
  description: "Retrieves a list of all Registrations for a specific Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"campaign_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/registrations?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listCampaignRoles: tool({
  description: "Lists all the roles that are available to the Campaign.",
  parameters: jsonSchema<any>({ type: "object", properties: {"campaign_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/roles?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listCampaignSoftCredits: tool({
  description: "List Campaign Soft Credits",
  parameters: jsonSchema<any>({ type: "object", properties: {"campaign_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/soft-credits?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listCampaignSourceTrackingCodes: tool({
  description: "Lists all Source Tracking Codes which are managed by the specified Campaign.",
  parameters: jsonSchema<any>({ type: "object", properties: {"campaign_id":{"type":"integer"},"fundraisingTeams":{"type":"boolean","default":false},"fundraisingPages":{"type":"boolean","default":false},"transactions":{"type":"boolean","default":false},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/source-tracking-codes?fundraisingTeams=${encodeURIComponent(args.fundraisingTeams)}&fundraisingPages=${encodeURIComponent(args.fundraisingPages)}&transactions=${encodeURIComponent(args.transactions)}&page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listCampaignStaffNotificationSettings: tool({
  description: "Get Staff Notification Settings for given Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"campaign_id":{"type":"integer"},"with":{"type":"array","items":{"type":"string","enum":["scope"]}},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/staff-notification-settings?with=${encodeURIComponent(args.with)}&page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createCampaignStaffNotificationSetting: tool({
  description: "Create a Staff Notification Setting for Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Campaign Staff Notification Setting Fillable","type":"object","allOf":[{"properties":{"scope_type":{"description":"Scope for email notifications","type":"string","enum":["Campaign_Manager","Organization_Manager_Campaign_Subscriber"]},"scope_id":{"description":"Scope ID will be Campaign ID af scope type is either Campaign_Manager or Organization_Manager_Campaign_Subscriber","type":"integer"}},"type":"object"},{"title":"Staff Notification Setting Fillable","properties":{"member_id":{"description":"Member who created Staff Notification Setting","type":"integer"},"chargebacks_category":{"description":"Receive an email if a Supporter files a chargeback and if it’s won or lost.","type":"boolean","default":false},"classy_pay_category":{"description":"Sent when your Organization's payout report is available","type":"boolean","default":false},"fundraising_page_category":{"description":"Receive an email when a Supporter creates a Fundraising Page or Team.","type":"boolean","default":false},"recurring_canceled_category":{"description":"Receive an email when a Recurring Plan is canceled.","type":"boolean","default":false},"recurring_ended_category":{"description":"Receive an email when a Recurring Plan has ended.","type":"boolean","default":false},"recurring_failed_category":{"description":"Receive an email when a Recurring Donation fails.","type":"boolean","default":false},"recurring_modified_category":{"description":"Receive an email when a Recurring Plan has been updated.","type":"boolean","default":false},"recurring_new_category":{"description":"Receive an email when a new Recurring Plan has been created.","type":"boolean","default":false},"recurring_successful_category":{"description":"Receive an email when a Recurring Donation has been made.","type":"boolean","default":false},"transactions_category":{"description":"Receive an email for every donation, ticket/registration purchase.","type":"boolean","default":false}},"type":"object"}]},"campaign_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/staff-notification-settings`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listCampaignStories: tool({
  description: "List Campaign Stories",
  parameters: jsonSchema<any>({ type: "object", properties: {"campaign_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/stories?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listCampaignSupporters: tool({
  description: "Retrieves a list of all Supporters for a specific Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"campaign_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/supporters?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listCampaignTicketTypes: tool({
  description: "Get Ticket Types for a given Campaign.",
  parameters: jsonSchema<any>({ type: "object", properties: {"campaign_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/ticket-types?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createTicketType: tool({
  description: "Create a Ticket Type for a given Campaign.",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"TicketTypeFillable","properties":{"commitment":{"description":"A Commitment defines an agreement by a Supporter to raise a specified amount, or meet a certain condition, within a specific timeframe when ticket having commitment is purchased.","properties":{"deadline":{"description":"Deadline for Commitment agreement","type":"string","format":"date-time"},"value":{"description":"Commitment amount","type":"number","format":"double","minimum":1}},"type":"object"},"description":{"description":"Description of Ticket Type","type":"string","maxLength":900},"ended_at":{"description":"Date when Ticket Type is no longer available","type":"string","format":"date-time"},"entries_per_ticket":{"description":"How many entries a Ticket of this type grants to a purchaser","type":"integer","minimum":1},"is_active":{"description":"Whether Ticket Type is available to purchase","type":"boolean","default":true},"max_per_transaction":{"description":"The most Tickets of this type that be purchased in a single transaction","type":"integer","minimum":1},"name":{"description":"The name of the TicketType","type":"string","maxLength":100},"org_percent":{"description":"Use deductible_percent","type":"number","format":"double","deprecated":true},"deductible_amount":{"description":"Amount of ticket price that is considered donation to campaign (May only specify deductible_percent OR deductible_amount)","type":"number","format":"double"},"deductible_percent":{"description":"Percentage of ticket price that is considered donation to campaign (May only specify deductible_percent OR deductible_amount)","type":"number","format":"double"},"price":{"description":"Price of a single Ticket of this type.","type":"number","format":"double","minimum":0},"quantity_available":{"description":"Quantity of Tickets available for purchase. Use 'null' for unlimited tickets.","type":["null","integer"],"default":null,"minimum":-1},"started_at":{"description":"Date when Ticket Type can start being purchased","type":"string","format":"date-time"},"weight":{"description":"Display order","type":"integer","minimum":0}},"type":"object"},"campaign_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/ticket-types`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listCampaignTransactions: tool({
  description: "List Campaign Transactions",
  parameters: jsonSchema<any>({ type: "object", properties: {"campaign_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"},"with":{"type":"array","items":{"type":"string","enum":["items","member","offline_payment_info","channel_transaction","dedication","reprocess_status","recurring_donation_plan","receipt_serial","supporter","order_donation_match"]}}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/transactions?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}&with=${encodeURIComponent(args.with)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createCampaignTransaction: tool({
  description: "For external requests this creates an “offline” transaction record for the specified campaign. An offline transaction represents funds collected outside of the Classy platform, but accounted for in Classy reporting, activity feeds, etc. Adding an offline transaction record does not charge any credit cards, nor credit any Classy accounts.\n\n   An array of TransactionItems must be included along with the basic Transaction information via the items attribute. Please view the Transaction Item documentation for formatting pertaining to this attribute.\n\n   NOTE: requests must include one of the following:\n   billing_first_name AND billing_last_name\n   OR member_email_address\n   OR company_name\n\n   Requests may contain all three. Please note that if an offline transaction only contains a company_name and is therefore a transaction by a company and not a person then answers will not be created for that transaction.",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Campaign Transaction Fillable","properties":{"answers":{"description":"Answers for transaction questions","type":["null","array"],"items":{"allOf":[{"title":"Answer Fillable","properties":{"answer":{"description":"Answer content","type":"string"}},"type":"object"},{"properties":{"question_id":{"description":"Primary identifier of associated Question","type":"integer"}},"type":"object"}]}},"billing_address1":{"description":"Line one of Billing address","type":["null","string"]},"billing_address2":{"description":"Line two of Billing address","type":["null","string"]},"billing_city":{"description":"Billing city","type":["null","string"]},"billing_country":{"description":"Billing country. Must be a valid ISO 3166-1 alpha-2 country code","type":["null","string"]},"billing_first_name":{"description":"Billing first name","type":["null","string"]},"billing_last_name":{"description":"Billing last name","type":["null","string"]},"billing_postal_code":{"description":"Billing zip/postal code","type":["null","string"]},"billing_state":{"description":"Billing state/province","type":["null","string"]},"browser_info":{"description":"Browser information","type":["null","string"]},"comment":{"description":"Organization comment","type":["null","string"]},"company_name":{"description":"Name of company this Transaction has ties to","type":["null","string"]},"designation_id":{"description":"ID of the Designation this Transaction is allocated to","type":["null","integer"]},"fundraising_page_id":{"description":"ID of the fundraising page to associate the transaction with","type":["null","integer"]},"fundraising_team_id":{"description":"ID of the fundraising team to associate the transaction with","type":["null","integer"]},"hide_amount":{"description":"Whether purchaser indicated if Transaction amount should be hidden","type":["null","boolean"]},"is_anonymous":{"description":"Whether purchaser indicated if transaction should be anonymous","type":["null","boolean"]},"is_gift_aid":{"description":"Flag whether the donor opted into gift aid used by the UK or not. Can only be set if the organization allows it","type":["null","boolean"]},"is_reprocess":{"description":"If it is a reprocessed transaction or not","type":["null","boolean"]},"items":{"description":"Collection of Transaction Items. Required for a successful transaction","type":["null","array"],"items":{"title":"Transaction Item Fillable","properties":{"product_name":{"description":"Name of product","type":"string","maxLength":64},"quantity":{"description":"Quantity purchased","type":"integer","minimum":1},"raw_final_price":{"description":"Represents the total raw value of a Transaction item - it is either set directly (as with a direct donation) or derived from the Product of `raw_price` (the price of the Transaction item's associated Product) and the specified quantity. All raw amounts are presented in terms of `raw_currency_code`, which is inherited from the Transaction item's Transaction and cannot be set on a per-item basis","type":["null","number"],"format":"double","minimum":0},"raw_overhead_amount":{"description":"Which indicates the amount of the `raw_final_price` that is attributed to Campaign overhead.","type":["null","number"],"format":"double","minimum":0},"type":{"description":"Type of Transaction Item ledger","type":"string","enum":["donation","registration","offline_donation","chargeback_reversal","custom_product","auction","good"]}},"type":"object"}},"member_country":{"description":"Country of the Member","type":["null","string"]},"member_email_address":{"description":"Email address of purchaser Classy Member","type":["null","string"]},"member_name":{"description":" Name of purchaser Classy Member","type":["null","string"]},"member_phone":{"description":"Phone number of purchaser Classy Member","type":["null","string"]},"metadata":{"description":"An optional set of unstructured metadata to be stored with a Transaction","type":["null","string"]},"offline_payment_info":{"oneOf":[{"title":"Offline Payment Info","properties":{"check_number":{"description":"Check number for a check payment type","type":["null","string"],"maxLength":32},"description":{"description":"Additional offline donation details","type":["null","string"],"maxLength":255},"payment_type":{"description":"Payment type for the offline donation","type":["null","string"],"enum":["cash","check","cc","pledge","other","sponsor","stock_donations","corporate_match","donation_match","eft","crypto"]},"sync_third_party":{"description":"Sync this offline transaction into third party products such as salesforce","type":["null","boolean"]}},"type":"object"}],"description":"Offline payment info associated to offline transaction","type":"object"},"parent_transaction_id":{"description":"ID of parent transaction","type":["null","integer"]},"purchased_at":{"description":"Date and time of purchase","type":["null","string"],"format":"date-time"},"raw_currency_code":{"description":"Currency Code of the Transaction before normalization","type":["null","string"]},"refunded_at":{"description":"Date and time of refund","type":["null","string"],"format":"date-time"},"status":{"description":"The status of the Transaction","type":["null","string"],"enum":["test","canceled","incomplete","success","refunded","cb_lost","cb_initiated","voided","pending","failed"]}},"type":"object"},"campaign_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/transactions`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listCampaignUpdates: tool({
  description: "List Campaign Updates",
  parameters: jsonSchema<any>({ type: "object", properties: {"campaign_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.campaign_id}/updates?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
updateCampaignChannel: tool({
  description: "Update campaign channel",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"properties":{"status":{"description":"Status of Campaign Channel","type":"boolean"},"metadata":{"description":"Additional Campaign settings data in JSON format","properties":{"employer_match_on_donation_page":{"description":"Indicates whether there is an employer match on Donation Page","type":"boolean"},"employer_match_on_thankyou_page":{"description":"Indicates whether there is an employer match on thankyou page","type":"boolean"},"employer_match_preselect":{"description":"Indicates whether there is an employer match preselect","type":"boolean"}},"type":"object"}},"type":"object"},"campaign_channel_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaign-channels/${args.campaign_channel_id}`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
duplicateCampaign: tool({
  description: "Create a Campaign using a source Campaign as Template",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"properties":{"duplicates":{"description":"List of resources associated with the campaign that should also be duplicated","type":"array","items":{"type":"string","enum":["appeal_set","ecards","faqs","products","questions","theme","permissions"]}},"overrides":{"title":"Campaign","properties":{"address1":{"description":"First line of address","type":["null","string"],"maxLength":250},"campaign_template_id":{"description":"Primary identifier of the Campaign Template this Campaign was created from","type":["null","integer"],"readOnly":true},"canonical_url":{"description":"Canonical url of the Campaign","type":["null","string"],"readOnly":true},"category_id":{"description":"Category designation for Campaign","type":["null","integer"]},"channel_id":{"description":"Channel designation for Campaign","type":["null","integer"]},"channel_keywords":{"description":"List of keywords Campaign is tagged with","type":["null","string"]},"city":{"description":"City name","type":["null","string"],"maxLength":50},"contact_email":{"description":"Email address for the Campaign Contact. Set to the Organization Email by default if none is specified","type":["null","string"]},"contact_phone":{"description":"Phone number for the Campaign Contact","type":"string","maxLength":32},"country":{"description":"Country name","type":["null","string"],"maxLength":2,"minLength":2},"created_at":{"description":"Date/time of initial record creation","type":"string","format":"date-time","readOnly":true},"created_with":{"description":"Indicates which application created the Campaign","type":"string","enum":["api","classyapp"],"readOnly":true},"currency_code":{"description":"ISO code of the currency against which this Campaign is normalized. Inherited from Organization's currency code.","type":"string","readOnly":true},"default_page_appeal_email":{"description":"Default appeal text displayed on Fundraising Pages","type":["null","string"]},"default_page_goal":{"description":"Default goal for the Campaign's Fundraising Pages. Presented in units of the Campaign's currency_code","type":"integer","format":"double","minimum":1},"default_page_thank_you_email":{"description":"Default thank you email text for the Campaign's Fundraising Pages","type":["null","string"]},"default_team_appeal_email":{"description":"Default appeal email text for Fundraising Teams","type":["null","string"]},"default_team_goal":{"description":"Default goal for the Campaign's Fundraising Teams. Presented in units of the Campaign's currency_code.","type":"integer","format":"double","minimum":1},"default_team_thank_you_email":{"description":"Default thank you email text for the Campaign's Fundraising Teams","type":["null","string"]},"designation_id":{"description":"ID of Designation the Campaign Transactions will be allocated to","type":["null","integer"]},"display_group_name":{"description":"Flag to determine if Designation Group Names should be shown","type":"boolean"},"ended_at":{"description":"Date/time of when the campaign ends","type":["null","string"],"format":"date-time"},"effective_fixed_fot_percent":{"description":"Percentage to be added to fee on top (aka Classy Mode) Transactions for the Campaign to cover fees. If fixed fot percent is null falls back on the Organization's fixed fot percent","type":["null","string"],"format":"double","readOnly":true},"effective_flex_rate_percent":{"description":"Percentage Campaign elects to be added to donor covered fees calculation to cover any additional costs other than fees. If flex rate percent is null falls back on the Organization's flex rate percent","type":["null","number"],"format":"double","readOnly":true},"effective_recaptcha_settings":{"description":"Indicates whether or not captcha should be displayed on checkout pages. If false at Org level, will not display on campaigns.","type":"string","enum":["ENABLED","DISABLED"],"readOnly":true},"external_url":{"description":"When set on a Campaign, classy.org will push all requests for this Campaign to the specified URL via HTTP redirect. Commonly used to redirect traffic from ended Campaign to another Site/Campaign","type":["null","string"]},"goal":{"description":"Fundraising goal for this Campaign normalized against currency_code","type":["null","integer"],"format":"double","readOnly":true},"hide_from_profile":{"description":"Indicates whether the Campaign will be hidden on the profile","type":["null","boolean"]},"id":{"description":"Primary identifier of record","type":"integer","readOnly":true},"internal_name":{"description":"Internal name for Campaign. Can differ from name attribute","type":["null","string"],"maxLength":255},"is_fees_free":{"description":"Indicates whether the Campaign has Fees associated with it or not","type":["null","boolean"],"readOnly":true},"is_general":{"description":"Indicates whether the Campaign is general or not. Boolean returned as 0 or 1 accordingly.","type":["null","number"],"readOnly":true},"location_details":{"description":"Additional information about the location of the event (e.g. directions, clarifications)","type":"string","maxLength":255},"minimum_donation_amount":{"description":"Determines the minimum donation amount allowed.","type":"number"},"name":{"description":"Campaign name","type":"string"},"organization_id":{"description":"Primary identifier for the associated Organization","type":"integer","readOnly":true},"postal_code":{"description":"Zip Code","type":["null","integer"]},"raw_currency_code":{"description":"ISO code of the currency in which this Campaign should be presented. Defaults to currency_code if not specified","type":"string"},"raw_goal":{"description":"Raw Fundraising Goal for this Campaign","type":"string"},"sort_designation_by":{"description":"How to sort within Designation Groups","type":"string","enum":["A-Z","NEW-OLD","OLD-NEW"]},"started_at":{"description":"Date/time the campaign begins","type":"string","format":"date-time"},"state":{"description":"State/province name","type":["null","string"],"maxLength":20},"status":{"description":"Status of Campaign","type":"string","enum":["active","deactivated","draft","unpublished"],"readOnly":true},"timezone_identifier":{"description":"Timezone Identifier","type":"string"},"type":{"description":"Campaign Type","type":"string","enum":["ticketed","registration","fund_for_entry","peer_to_peer","donation","reg_w_fund","crowdfunding","dynamic"]},"updated_at":{"description":"Date/time of last alteration","type":"string","format":"date-time","readOnly":true},"venue":{"description":"Free text representing a location","type":["null","string"],"maxLength":500},"add_registration_fee":{"description":"Indicates whether a registration fee is added or not","type":"boolean"},"allow_duplicate_fundraisers":{"description":"Indicates whether a Campaign allows a single User to own several Fundraising Pages","type":"boolean"},"allow_fundraising_pages":{"description":"Specifies whether a Campaign allows for the creation of new Fundraising Pages. Only relevant for Campaigns with types that allow for Fundraising Pages in general","type":"boolean"},"allow_team_fundraising":{"description":"Specifies whether a Campaign allows for Team Fundraising","type":"boolean"},"default_page_appeal":{"description":"Default appeal text displayed on Fundraising Pages","type":["null","string"]},"default_page_post_asset_id":{"description":"Default Asset ID of page story post","type":["null","integer"]},"default_page_post_body":{"description":"Default body of page story post","type":["null","string"]},"default_page_post_title":{"description":"Default title of page story post","type":["null","string"]},"default_team_appeal":{"description":"Default appeal text displayed on Fundraising Teams","type":["null","string"]},"default_team_post_asset_id":{"description":"Default Asset ID of team story post","type":["null","integer"]},"default_team_post_body":{"description":"Default body of team story post","type":["null","string"]},"default_team_post_title":{"description":"Default title of team story post","type":["null","string"]},"default_thank_you_text":{"description":"Default thank you text on the thank you page","type":["null","string"]},"fixed_fot_percent":{"description":"Percentage Campaign elects to be added to Fee on top (aka Classy Mode) Transactions to cover Fees","type":["null","string"],"format":"double"},"flex_rate_percent":{"description":"Percentage Campaign elects to be added to donor covered fees calculation to cover any additional costs other than fees.","type":["null","number"],"format":"double"},"is_billing_address_required":{"description":"If true, a billing address must be provided when creating Transactions against the Campaign","type":"boolean"},"is_ended_at_hidden":{"description":"If true, Campaign end date is not shown","type":"boolean"},"is_started_at_hidden":{"description":"If true, Campaign start date is not shown","type":"boolean"},"pages_can_set_appeal":{"description":"Indicates whether Fundraising Pages can set the appeal","type":"boolean"},"pages_can_set_goal":{"description":"Indicates whether Fundraising Pages can set the goal","type":"boolean"},"team_membership_policy":{"description":"Configuration indicating whether team membership for this Campaign's Fundraising Pages is optional, required, or prohibited","type":"string","enum":["optional","required","prohibited"]},"teams_can_set_appeal":{"description":"Indicates whether Fundraising Teams can set the appeal","type":"boolean"},"teams_can_set_goal":{"description":"Indicates whether Fundraising Teams can set the goal","type":"boolean"},"ticket_pass_on_fees":{"description":"Indicates whether a Campaign passes Fees from tickets to the user or not (fee on top for tickets)","type":["null","boolean"]},"allow_ecards":{"description":"Whether Ecard Dedications are available for this Campaign","type":"boolean"},"classy_mode_appeal":{"description":"Classy mode appeal text","type":["null","string"]},"classy_mode_checked_by_default":{"description":"Classy mode checked by default","type":"boolean"},"classy_mode_enabled":{"description":"If true, give the donor the option to cover the Transaction Fee via ClassyMode calculation","type":["null","boolean"]},"corporate_donation_enabled":{"description":"If true, give the donor the option to donate on the behalf of a corporation","type":"boolean"},"custom_url":{"description":"Custom URL","type":["null","string"]},"dcf_enabled":{"description":"If true, give the donor the option to cover the Transaction Fee via Donor Covered Fees calculation","type":"boolean"},"dcf_allowed":{"description":"If true, this means the campaign must be treated as a dcf campaign","type":"boolean","readOnly":true},"disable_donation_attribution":{"description":"Flag to allow/disallow donors to select a Fundraising Page or Team to attribute their Donation to. If true, Donation Attribution is disabled. Set to false to enable Donation Attribution","type":["null","boolean"]},"hide_anonymous_donations":{"description":"If true, Donation forms will not display the anonymous Donation field","type":"boolean"},"hide_recurring_end_date":{"description":"Indicates whether the end date for recurring donations will be hidden in the donation page","type":"boolean"},"hide_contact_opt_in":{"description":"If true, Donation forms will not display the contact opt in field","type":"boolean"},"hide_donation_amounts":{"description":"If true, donors will not be able to hide their donation amounts","type":"boolean"},"hide_dedications":{"description":"If true, donation dedications will not be offered","type":"boolean"},"hide_donation_comments":{"description":"If true, donation forms will not display the donation comments field","type":"boolean"},"offer_dedication_postal_notifications":{"description":"If true, offer to collect mailing information for postal notifications for dedications","type":"boolean"},"opt_in_checked_by_default":{"description":"If true, and if the hide_contact_opt_in option is false, this will check the opt-in selection by default on donation forms","type":"boolean"},"return_url":{"description":"Return URL","type":["null","string"]},"send_dedication_emails":{"description":"If true, send dedication email for donation","type":["null","boolean"]},"logo_id":{"description":"Primary identifier of Asset used as the main Campaign Logo. Interpreted from associated Campaign Theme","type":["null","integer"],"readOnly":true},"logo_url":{"description":"URL for logo image. Either hardcoded URL for legacy Campaigns or interpreted from logo Asset specified by logo ID","type":["null","string"],"readOnly":true},"team_cover_photo_id":{"description":"ID of the associated Asset that serves as the default cover photo for this Campaign's Teams (inherited from associated Theme)","type":["null","integer"],"readOnly":true},"team_cover_photo_url":{"description":"URL for Campaign's default team cover photo image. Interpreted from team cover photo Asset specified by team cover photo ID","type":["null","string"],"readOnly":true},"crypto_giving":{"description":"Indicates if Crypto Giving is Enabled, Disabled or Exclusive","type":"string","enum":["enabled","disabled","exclusive"]},"embedded_giving":{"description":"Indicates if Embedded Giving is Disabled, Modal or Inline","type":"string","enum":["disabled","modal","inline"]},"exit_modal":{"description":"Indicates if Exit Modal is toggle on/off for a certain Campaign","type":"boolean"},"use_intelligent_ask_onetime":{"description":"Toggle Intelligent Ask Amount suggestion engine for One-time donations","type":["null","boolean"]},"use_intelligent_ask_recurring":{"description":"Toggle Intelligent Ask Amount suggestion engine for Recurring donations","type":["null","boolean"]},"whitelist_url":{"description":"Used to bypass security blocking conditions in the donor iframe, based on X-FRAME-OPTIONS ALLOW-FROM","type":["null","string"]}},"type":"object"}},"type":"object"},"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.id}/duplicate`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
fetchCampaign: tool({
  description: "Retrieves Campaign by ID",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.id}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
updateCampaign: tool({
  description: "Updates an existing Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Campaign","properties":{"address1":{"description":"First line of address","type":["null","string"],"maxLength":250},"campaign_template_id":{"description":"Primary identifier of the Campaign Template this Campaign was created from","type":["null","integer"],"readOnly":true},"canonical_url":{"description":"Canonical url of the Campaign","type":["null","string"],"readOnly":true},"category_id":{"description":"Category designation for Campaign","type":["null","integer"]},"channel_id":{"description":"Channel designation for Campaign","type":["null","integer"]},"channel_keywords":{"description":"List of keywords Campaign is tagged with","type":["null","string"]},"city":{"description":"City name","type":["null","string"],"maxLength":50},"contact_email":{"description":"Email address for the Campaign Contact. Set to the Organization Email by default if none is specified","type":["null","string"]},"contact_phone":{"description":"Phone number for the Campaign Contact","type":"string","maxLength":32},"country":{"description":"Country name","type":["null","string"],"maxLength":2,"minLength":2},"created_at":{"description":"Date/time of initial record creation","type":"string","format":"date-time","readOnly":true},"created_with":{"description":"Indicates which application created the Campaign","type":"string","enum":["api","classyapp"],"readOnly":true},"currency_code":{"description":"ISO code of the currency against which this Campaign is normalized. Inherited from Organization's currency code.","type":"string","readOnly":true},"default_page_appeal_email":{"description":"Default appeal text displayed on Fundraising Pages","type":["null","string"]},"default_page_goal":{"description":"Default goal for the Campaign's Fundraising Pages. Presented in units of the Campaign's currency_code","type":"integer","format":"double","minimum":1},"default_page_thank_you_email":{"description":"Default thank you email text for the Campaign's Fundraising Pages","type":["null","string"]},"default_team_appeal_email":{"description":"Default appeal email text for Fundraising Teams","type":["null","string"]},"default_team_goal":{"description":"Default goal for the Campaign's Fundraising Teams. Presented in units of the Campaign's currency_code.","type":"integer","format":"double","minimum":1},"default_team_thank_you_email":{"description":"Default thank you email text for the Campaign's Fundraising Teams","type":["null","string"]},"designation_id":{"description":"ID of Designation the Campaign Transactions will be allocated to","type":["null","integer"]},"display_group_name":{"description":"Flag to determine if Designation Group Names should be shown","type":"boolean"},"ended_at":{"description":"Date/time of when the campaign ends","type":["null","string"],"format":"date-time"},"effective_fixed_fot_percent":{"description":"Percentage to be added to fee on top (aka Classy Mode) Transactions for the Campaign to cover fees. If fixed fot percent is null falls back on the Organization's fixed fot percent","type":["null","string"],"format":"double","readOnly":true},"effective_flex_rate_percent":{"description":"Percentage Campaign elects to be added to donor covered fees calculation to cover any additional costs other than fees. If flex rate percent is null falls back on the Organization's flex rate percent","type":["null","number"],"format":"double","readOnly":true},"effective_recaptcha_settings":{"description":"Indicates whether or not captcha should be displayed on checkout pages. If false at Org level, will not display on campaigns.","type":"string","enum":["ENABLED","DISABLED"],"readOnly":true},"external_url":{"description":"When set on a Campaign, classy.org will push all requests for this Campaign to the specified URL via HTTP redirect. Commonly used to redirect traffic from ended Campaign to another Site/Campaign","type":["null","string"]},"goal":{"description":"Fundraising goal for this Campaign normalized against currency_code","type":["null","integer"],"format":"double","readOnly":true},"hide_from_profile":{"description":"Indicates whether the Campaign will be hidden on the profile","type":["null","boolean"]},"id":{"description":"Primary identifier of record","type":"integer","readOnly":true},"internal_name":{"description":"Internal name for Campaign. Can differ from name attribute","type":["null","string"],"maxLength":255},"is_fees_free":{"description":"Indicates whether the Campaign has Fees associated with it or not","type":["null","boolean"],"readOnly":true},"is_general":{"description":"Indicates whether the Campaign is general or not. Boolean returned as 0 or 1 accordingly.","type":["null","number"],"readOnly":true},"location_details":{"description":"Additional information about the location of the event (e.g. directions, clarifications)","type":"string","maxLength":255},"minimum_donation_amount":{"description":"Determines the minimum donation amount allowed.","type":"number"},"name":{"description":"Campaign name","type":"string"},"organization_id":{"description":"Primary identifier for the associated Organization","type":"integer","readOnly":true},"postal_code":{"description":"Zip Code","type":["null","integer"]},"raw_currency_code":{"description":"ISO code of the currency in which this Campaign should be presented. Defaults to currency_code if not specified","type":"string"},"raw_goal":{"description":"Raw Fundraising Goal for this Campaign","type":"string"},"sort_designation_by":{"description":"How to sort within Designation Groups","type":"string","enum":["A-Z","NEW-OLD","OLD-NEW"]},"started_at":{"description":"Date/time the campaign begins","type":"string","format":"date-time"},"state":{"description":"State/province name","type":["null","string"],"maxLength":20},"status":{"description":"Status of Campaign","type":"string","enum":["active","deactivated","draft","unpublished"],"readOnly":true},"timezone_identifier":{"description":"Timezone Identifier","type":"string"},"type":{"description":"Campaign Type","type":"string","enum":["ticketed","registration","fund_for_entry","peer_to_peer","donation","reg_w_fund","crowdfunding","dynamic"]},"updated_at":{"description":"Date/time of last alteration","type":"string","format":"date-time","readOnly":true},"venue":{"description":"Free text representing a location","type":["null","string"],"maxLength":500},"add_registration_fee":{"description":"Indicates whether a registration fee is added or not","type":"boolean"},"allow_duplicate_fundraisers":{"description":"Indicates whether a Campaign allows a single User to own several Fundraising Pages","type":"boolean"},"allow_fundraising_pages":{"description":"Specifies whether a Campaign allows for the creation of new Fundraising Pages. Only relevant for Campaigns with types that allow for Fundraising Pages in general","type":"boolean"},"allow_team_fundraising":{"description":"Specifies whether a Campaign allows for Team Fundraising","type":"boolean"},"default_page_appeal":{"description":"Default appeal text displayed on Fundraising Pages","type":["null","string"]},"default_page_post_asset_id":{"description":"Default Asset ID of page story post","type":["null","integer"]},"default_page_post_body":{"description":"Default body of page story post","type":["null","string"]},"default_page_post_title":{"description":"Default title of page story post","type":["null","string"]},"default_team_appeal":{"description":"Default appeal text displayed on Fundraising Teams","type":["null","string"]},"default_team_post_asset_id":{"description":"Default Asset ID of team story post","type":["null","integer"]},"default_team_post_body":{"description":"Default body of team story post","type":["null","string"]},"default_team_post_title":{"description":"Default title of team story post","type":["null","string"]},"default_thank_you_text":{"description":"Default thank you text on the thank you page","type":["null","string"]},"fixed_fot_percent":{"description":"Percentage Campaign elects to be added to Fee on top (aka Classy Mode) Transactions to cover Fees","type":["null","string"],"format":"double"},"flex_rate_percent":{"description":"Percentage Campaign elects to be added to donor covered fees calculation to cover any additional costs other than fees.","type":["null","number"],"format":"double"},"is_billing_address_required":{"description":"If true, a billing address must be provided when creating Transactions against the Campaign","type":"boolean"},"is_ended_at_hidden":{"description":"If true, Campaign end date is not shown","type":"boolean"},"is_started_at_hidden":{"description":"If true, Campaign start date is not shown","type":"boolean"},"pages_can_set_appeal":{"description":"Indicates whether Fundraising Pages can set the appeal","type":"boolean"},"pages_can_set_goal":{"description":"Indicates whether Fundraising Pages can set the goal","type":"boolean"},"team_membership_policy":{"description":"Configuration indicating whether team membership for this Campaign's Fundraising Pages is optional, required, or prohibited","type":"string","enum":["optional","required","prohibited"]},"teams_can_set_appeal":{"description":"Indicates whether Fundraising Teams can set the appeal","type":"boolean"},"teams_can_set_goal":{"description":"Indicates whether Fundraising Teams can set the goal","type":"boolean"},"ticket_pass_on_fees":{"description":"Indicates whether a Campaign passes Fees from tickets to the user or not (fee on top for tickets)","type":["null","boolean"]},"allow_ecards":{"description":"Whether Ecard Dedications are available for this Campaign","type":"boolean"},"classy_mode_appeal":{"description":"Classy mode appeal text","type":["null","string"]},"classy_mode_checked_by_default":{"description":"Classy mode checked by default","type":"boolean"},"classy_mode_enabled":{"description":"If true, give the donor the option to cover the Transaction Fee via ClassyMode calculation","type":["null","boolean"]},"corporate_donation_enabled":{"description":"If true, give the donor the option to donate on the behalf of a corporation","type":"boolean"},"custom_url":{"description":"Custom URL","type":["null","string"]},"dcf_enabled":{"description":"If true, give the donor the option to cover the Transaction Fee via Donor Covered Fees calculation","type":"boolean"},"dcf_allowed":{"description":"If true, this means the campaign must be treated as a dcf campaign","type":"boolean","readOnly":true},"disable_donation_attribution":{"description":"Flag to allow/disallow donors to select a Fundraising Page or Team to attribute their Donation to. If true, Donation Attribution is disabled. Set to false to enable Donation Attribution","type":["null","boolean"]},"hide_anonymous_donations":{"description":"If true, Donation forms will not display the anonymous Donation field","type":"boolean"},"hide_recurring_end_date":{"description":"Indicates whether the end date for recurring donations will be hidden in the donation page","type":"boolean"},"hide_contact_opt_in":{"description":"If true, Donation forms will not display the contact opt in field","type":"boolean"},"hide_donation_amounts":{"description":"If true, donors will not be able to hide their donation amounts","type":"boolean"},"hide_dedications":{"description":"If true, donation dedications will not be offered","type":"boolean"},"hide_donation_comments":{"description":"If true, donation forms will not display the donation comments field","type":"boolean"},"offer_dedication_postal_notifications":{"description":"If true, offer to collect mailing information for postal notifications for dedications","type":"boolean"},"opt_in_checked_by_default":{"description":"If true, and if the hide_contact_opt_in option is false, this will check the opt-in selection by default on donation forms","type":"boolean"},"return_url":{"description":"Return URL","type":["null","string"]},"send_dedication_emails":{"description":"If true, send dedication email for donation","type":["null","boolean"]},"logo_id":{"description":"Primary identifier of Asset used as the main Campaign Logo. Interpreted from associated Campaign Theme","type":["null","integer"],"readOnly":true},"logo_url":{"description":"URL for logo image. Either hardcoded URL for legacy Campaigns or interpreted from logo Asset specified by logo ID","type":["null","string"],"readOnly":true},"team_cover_photo_id":{"description":"ID of the associated Asset that serves as the default cover photo for this Campaign's Teams (inherited from associated Theme)","type":["null","integer"],"readOnly":true},"team_cover_photo_url":{"description":"URL for Campaign's default team cover photo image. Interpreted from team cover photo Asset specified by team cover photo ID","type":["null","string"],"readOnly":true},"crypto_giving":{"description":"Indicates if Crypto Giving is Enabled, Disabled or Exclusive","type":"string","enum":["enabled","disabled","exclusive"]},"embedded_giving":{"description":"Indicates if Embedded Giving is Disabled, Modal or Inline","type":"string","enum":["disabled","modal","inline"]},"exit_modal":{"description":"Indicates if Exit Modal is toggle on/off for a certain Campaign","type":"boolean"},"use_intelligent_ask_onetime":{"description":"Toggle Intelligent Ask Amount suggestion engine for One-time donations","type":["null","boolean"]},"use_intelligent_ask_recurring":{"description":"Toggle Intelligent Ask Amount suggestion engine for Recurring donations","type":["null","boolean"]},"whitelist_url":{"description":"Used to bypass security blocking conditions in the donor iframe, based on X-FRAME-OPTIONS ALLOW-FROM","type":["null","string"]}},"type":"object"},"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.id}`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
checkSlugAvailable: tool({
  description: "Checks if Slug is already taken",
  parameters: jsonSchema<any>({ type: "object", properties: {"custom_url":{"type":"string"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/custom-url/${args.custom_url}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
publishCampaign: tool({
  description: "Publish a Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.id}/publish`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
unpublishCampaign: tool({
  description: "Unpublish a Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.id}/unpublish`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
deactivateCampaign: tool({
  description: "Deactivate a Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.id}/deactivate`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
reactivateCampaign: tool({
  description: "Reactivate a Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaigns/${args.id}/reactivate`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
fetchCampaignCredentialSet: tool({
  description: "Retrieves a Campaign Credential Set from ID",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaign-credential-sets/${args.id}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
deleteCampaignCredentialSet: tool({
  description: "Delete a specified Campaign Credential Set",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/campaign-credential-sets/${args.id}`;
    const fetchArgs = {
      url,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
showChannelFundraisingEntity: tool({
  description: "Retrieves a Channel Fundraising Entity from ID",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/channel-fundraising-entities/${args.id}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
getSubscriptionPlanFeatures: tool({
  description: "Retrieves the Subscription Plan features for a specified Plan",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/classy-subscription-plans/${args.id}/plan-features`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
fetchComment: tool({
  description: "Retrieves a Comment from the ID",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/comments/${args.id}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
updateComment: tool({
  description: "Update Comment",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Comment Fillable","properties":{"body":{"description":"The content of the Comment","type":"string"}},"type":"object"},"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/comments/${args.id}`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
deleteComment: tool({
  description: "Delete Comment",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/comments/${args.id}`;
    const fetchArgs = {
      url,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
fetchDesignation: tool({
  description: "Fetch specified Designation",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/designations/${args.id}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
updateDesignation: tool({
  description: "Update specified Designation",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Designation Fillable","properties":{"city":{"description":"The name of the city associated with the Designation","type":["null","string"],"maxLength":100},"description":{"description":"A brief description of the Designation","type":["null","string"]},"end_date":{"description":"Date that record ends","type":["null","string"],"format":"date-time"},"end_time":{"description":"Time that record ends","type":["null","string"],"format":"date-time"},"external_reference_id":{"description":"Primary identifier of associated Member","type":["null","string"],"maxLength":100},"goal":{"description":"The Fundraising Goal for the Designation","type":["null","string"],"format":"float","minimum":1},"is_active":{"description":"Indicates whether Designation is active","type":"boolean","default":false},"is_complete":{"description":"Indicates whether Designation is complete","type":"boolean","default":false},"is_default":{"description":"Indicates whether this is the default Designation for the Organization. Only one Designation per Organization can have this be true","type":"boolean","default":false},"name":{"description":"Name of the Designation, unique to this Organization","type":"string","maxLength":127},"postal_code":{"description":"Postal code associated with the Designation","type":["null","string"],"maxLength":50},"start_date":{"description":"Date that record starts","type":"string","format":"date-time"},"start_time":{"description":"Time that record starts","type":"string","format":"date-time"},"state":{"description":"Two-letter abbreviation of the state associated with the Designation","type":["null","string"],"maxLength":2,"minLength":2}},"type":"object"},"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/designations/${args.id}`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
deleteDesignation: tool({
  description: "Delete a specified Designation",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/designations/${args.id}`;
    const fetchArgs = {
      url,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
fetchDomainSlug: tool({
  description: "Fetch specified Domain Slug",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"},"with":{"type":"array","items":{"type":"string","enum":["domain","fundraising_entity"]}}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/domain-slugs/${args.id}?with=${encodeURIComponent(args.with)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
updateDomainSlug: tool({
  description: "Update specified Domain Slug",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Domain Slug Fillable","properties":{"links_to_donation_page":{"description":"Indicates whether the slug should reference the Donation Page for the DomainSlug's Fundraising Entity","type":"boolean"},"value":{"description":"Value of the Domain Slug","type":"string","maxLength":255}},"type":"object"},"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/domain-slugs/${args.id}`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
deleteDomainSlug: tool({
  description: "Delete specified Domain Slug",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/domain-slugs/${args.id}`;
    const fetchArgs = {
      url,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
checkSlugAvailability: tool({
  description: "Check if a Domain Slug exists with the specified value",
  parameters: jsonSchema<any>({ type: "object", properties: {"slug_value":{"type":"string"},"domain_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/domain-slugs/availability-check/${args.slug_value}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
fetchDonationMatchingPlan: tool({
  description: "Fetch specified Donation Matching Plan",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/donation-matching-plans/${args.id}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
updateDonationMatchingPlan: tool({
  description: "Update a Donation Matching Plan",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Donation Matching Plan","required":["business_name","started_at","timezone_identifier"],"properties":{"id":{"description":"Primary identifier of record","type":"integer","readOnly":true},"campaign_id":{"description":"Primary identifier of associated Campaign","type":"integer","readOnly":true},"currency_code":{"description":"Currency in which the Donation Matching Plan matches donations. The currency cannot be modified after the DonationMatchingPlan is created.","type":"string"},"matching_limit_amount":{"description":"Total amount in the Donation Matching Plan currency the sponsor is willing to match. 0 means unlimited.","type":"number","minimum":0},"started_at":{"description":"Date/time of the beginning of the sponsor's matching period","type":"string","format":"date-time"},"ended_at":{"description":"Date/time of the end of the sponsor's matching period. The value must be after the `started_at` value.","type":"string","format":"date-time"},"business_name":{"description":"Name of the sponsor. Will be displayed in feed items when matching donations","type":"string"},"timezone_identifier":{"description":"Sponsor timezone","type":"string"},"matched_amount":{"description":"Total amount the sponsor has currently matched, in the currency of the Donation Matching Plan","type":"integer","minimum":0,"readOnly":true},"asset_id":{"description":"Primary identifier of sponsor thumbnail Asset which will be displayed in Feed Items","type":["null","integer"]},"created_at":{"description":"Date/time of initial record creation","type":"string","format":"date-time","readOnly":true},"updated_at":{"description":"Date/time of last record update","type":"string","format":"date-time","readOnly":true}},"type":"object"},"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/donation-matching-plans/${args.id}`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
deleteDoubleTheDonation: tool({
  description: "Delete Double the Donation Account",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/double-the-donations/${args.id}`;
    const fetchArgs = {
      url,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
fetchEcard: tool({
  description: "Fetch specified eCard",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/ecards/${args.id}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
updateEcard: tool({
  description: "Update specified eCard",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Ecard","properties":{"asset_id":{"description":"Primary identifier of associated image file Asset","type":["null","integer"]},"campaign_id":{"description":"Primary identifier of associated Campaign","type":"integer","readOnly":true},"id":{"description":"Primary identifier of record","type":"integer","readOnly":true},"image_url":{"description":"Public URL for the Ecard image","type":"string"},"is_deleted":{"description":"Indicates whether Ecard has been deleted","type":"boolean","readOnly":true},"order":{"description":"Display order for listings. Impacts display in Classy.org","type":"integer"}},"type":"object"},"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/ecards/${args.id}`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
deleteEcard: tool({
  description: "Delete specified eCard",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/ecards/${args.id}`;
    const fetchArgs = {
      url,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
fetchOrganizationEngagementSettings: tool({
  description: "Fetch Engagement Settings for specified Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.id}/engagement-settings`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
updateOrganizationEngagementSettings: tool({
  description: "Update Engagement Settings for Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Engagement Settings Fillable","properties":{"email_subdomain":{"description":"Email subdomain","type":"string"},"sms":{"description":"Details of Engagement Settings for SMS","properties":{"enabled":{"description":"Indicates whether SMS is enabled or not in Engagement Settings","type":"boolean"},"phone_numbers":{"description":"Phone numbers for sending SMS","type":"array","items":{"type":"string"}},"custom_caller_id":{"description":"Custom Caller ID name for sending SMS","type":"string"}},"type":"object"},"email":{"description":"Details of Engagement Settings for email","properties":{"custom_domain":{"description":"Indicates whether custom domain for email is true or false","type":"boolean"},"domain_prefix":{"description":"Domain prefix name for email","type":"string"},"email_domain":{"description":"Domain name for email","type":"string"},"enabled":{"description":"Indicates whether email is enabled or not","type":"boolean"},"throttling":{"description":"Details of throttling:The amount of email messages sent to one ISP or remote server at one tim","properties":{"emails_per_day":{"description":"Number of emails sent per day","type":"integer"},"emails_per_month":{"description":"Number of emails sent per month","type":"integer"}},"type":"object"},"dns":{"description":"Details of DNS settings","properties":{"is_valid":{"description":"Indicates whether DNS is valid or not","type":"boolean"},"spf":{"description":"A type of DNS record that identifies which mail servers are permitted to send an email on behalf of your domain","properties":{"txt_record":{"description":"Name of SPF records to be included","type":"string"},"valid":{"description":"Indicates whether SPF is valid or not","type":"boolean"}},"type":"object"},"dkim":{"description":"DKIM Records include a signature in each email header sent","properties":{"txt_record":{"description":"Signature in each email header sent","type":"string"},"valid":{"description":"Indicates if DKIM is valid or not","type":"boolean"}},"type":"object"},"tracking":{"description":"Details of Tracking","properties":{"cname":{"description":"Cname allow for tracking of opens and clicks","type":"string"},"value":{"description":"Value for tracking","type":"string"},"valid":{"description":"Indicates whether tracking is valid or not","type":"boolean"}},"type":"object"},"incoming":{"description":"Details of Incoming","properties":{"mx_records":{"description":"The MX-record contains the host name of the computer(s) that handle the emails for a domain and a prioritization code","type":"array","items":{"properties":{"priority":{"description":"Each MX record has a priority, or a number to designate the order in which your domain name's incoming mail servers receive your email messages","type":"number"},"value":{"description":"A mail exchanger record (MX record) specifies the mail server responsible for accepting email messages on behalf of a domain name","type":"string"}},"type":"object"}},"valid":{"description":"Indicates whether incoming is valid or not","type":"boolean"}},"type":"object"}},"type":"object"}},"type":"object"}},"type":"object"},"id":{}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/engagement-settings/${args.id}`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
fetchFAQ: tool({
  description: "Fetch specified FAQ",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/faqs/${args.id}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
deleteFAQ: tool({
  description: "Delete a FAQ",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/faqs/${args.id}`;
    const fetchArgs = {
      url,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
updateFAQ: tool({
  description: "Update a FAQ",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Fillable Frequently Asked Questions","properties":{"answer":{"description":"FAQ Answer Body","type":"string","format":"string","maxLength":500},"question":{"description":"FAQ Body","type":"string","format":"string","maxLength":100},"tag":{"description":"Tags assigned to the FAQ","type":["null","string"],"enum":["tax","other"]},"weight":{"description":"Identify the importance of this Question when sorting","type":"integer","maximum":255,"minimum":0}},"type":"object"},"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/faqs/${args.id}/`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listFeedItemComments: tool({
  description: "Retrieves a paginated list of Comments for a Feed Item",
  parameters: jsonSchema<any>({ type: "object", properties: {"feed_item_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/feed-items/${args.feed_item_id}/comments?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createFeedItemComment: tool({
  description: "Create comment for specified Feed Item",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Comment Fillable","properties":{"body":{"description":"The content of the Comment","type":"string"}},"type":"object"},"feed_item_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/feed-items/${args.feed_item_id}/comments`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listFeedItemLikes: tool({
  description: "Retrieves a list of all Likes made for the specified Feed Item",
  parameters: jsonSchema<any>({ type: "object", properties: {"feed_item_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/feed-items/${args.feed_item_id}/likes?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createFeedItemLike: tool({
  description: "Create a Like for the specified Feed Item",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Like (Fillable)","properties":{"member_id":{"description":"Primary identifier of associated Member","type":"integer"},"likeable_id":{"description":"Primary identifier of the Entity for which the Like was created","type":["null","integer"]},"likeable_type":{"description":"Type of the Entity for which the Like was created","type":["null","string"]}},"type":"object"},"feed_item_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/feed-items/${args.feed_item_id}/likes`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
fetchFeedItem: tool({
  description: "Show requested Feed Item",
  parameters: jsonSchema<any>({ type: "object", properties: {"feed_item_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/feed-items/${args.feed_item_id}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
updateFeedItem: tool({
  description: "Update a Feed Item",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"properties":{"comment":{"description":"Comment for the Feed Item","type":"string"}},"type":"object"},"feed_item_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/feed-items/${args.feed_item_id}`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
deleteFeedItem: tool({
  description: "Delete Feed Item",
  parameters: jsonSchema<any>({ type: "object", properties: {"feed_item_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/feed-items/${args.feed_item_id}`;
    const fetchArgs = {
      url,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listFundraisingPageActivities: tool({
  description: "Retrieves a list of all Activities related to the specified Fundraising Page",
  parameters: jsonSchema<any>({ type: "object", properties: {"fundraising_page_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-pages/${args.fundraising_page_id}/activity?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listFundraisingPageAnswers: tool({
  description: "Retrieves list of all Answers related to specified Fundraising Page",
  parameters: jsonSchema<any>({ type: "object", properties: {"fundraising_page_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-pages/${args.fundraising_page_id}/answers?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createFundraisingPageAnswer: tool({
  description: "Create an Answer for a Fundraising Page",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"required":["question_id"],"allOf":[{"title":"Answer Fillable","properties":{"answer":{"description":"Answer content","type":"string"}},"type":"object"},{"properties":{"question_id":{"description":"Primary identifier of associated Question","type":"integer"}},"type":"object"}]},"fundraising_page_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-pages/${args.fundraising_page_id}/answers`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
createChannelFundraisingEntity: tool({
  description: "Create Channel such as Facebook for Fundraising Page",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Channel Fundraising Entity Fillable","properties":{"channel_name":{"description":"The name of Integration Channel","type":"string","maxLength":30,"enum":["Facebook","Instagram","DoubletheDonation"]},"external_fundraising_page_id":{"description":"Channel provided Fundraising Page ID","type":"string","maxLength":35}},"type":"object"},"page_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-pages/${args.page_id}/channels`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
createFundraisingPageCreditAdjustment: tool({
  description: "Create Credential Adjustment for specified Fundraising Page",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Credit Adjustment Fillable","properties":{"amount":{"description":"The amount of the Credit Adjustment.  Positive values add credit to a Fundraising Entity.  Negative values remove credit","type":"integer","format":"float"},"metadata":{"description":"Arbitrary JSON metadata","type":"string"},"memo":{"description":"An arbitrary memo about the Credit Adjustment.","type":"string","maxLength":255}},"type":"object"},"page_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-pages/${args.page_id}/credit-adjustments`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
createFundraisingPageDomainSlug: tool({
  description: "Create a Domain Slug for the specified Fundraising Page",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Domain Slug Fillable","properties":{"links_to_donation_page":{"description":"Indicates whether the slug should reference the Donation Page for the DomainSlug's Fundraising Entity","type":"boolean"},"value":{"description":"Value of the Domain Slug","type":"string","maxLength":255}},"type":"object"},"page_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-pages/${args.page_id}/domain-slugs`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listFundraisingPageFeedItems: tool({
  description: "List all Feed Items for specified Fundraising Page",
  parameters: jsonSchema<any>({ type: "object", properties: {"fundraising_page_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-pages/${args.fundraising_page_id}/feed-items?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createFundraisingPageFeedItem: tool({
  description: "Create a FeedItem (Comment) for specified Fundraising Page",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"properties":{"comment":{"description":"Comment for the Fundraising Page","type":"string"}},"type":"object"},"fundraising_page_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-pages/${args.fundraising_page_id}/feed-items`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
fetchFundraisingPage: tool({
  description: "Show the Fundraising Page specified by the fundraising_page_id",
  parameters: jsonSchema<any>({ type: "object", properties: {"fundraising_page_id":{"type":"integer"},"aggregates":{"type":"boolean"},"with":{"type":"array","items":{"type":"string","enum":["answers","campaign","commitment","cover_photo","fundraising_team","logo","member","registration","source_tracking_codes","supporter"]}}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-pages/${args.fundraising_page_id}?aggregates=${encodeURIComponent(args.aggregates)}&with=${encodeURIComponent(args.with)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
updateFundraisingPage: tool({
  description: "Update Fundraising Page",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"FundraisingPage (Fillable Update)","properties":{"alias":{"description":"Alias of the Fundraising Page","type":"string"},"cover_photo_id":{"description":"Fundraising Page cover photo","type":["null","integer"]},"designation_id":{"description":"Designation ID for this Fundraising Page","type":["null","integer"]},"ended_at":{"description":"Page end date","type":["null","string"],"format":"date-time"},"intro_text":{"description":"HTML Formatted string for intro text","type":"string"},"logo_id":{"description":"ID of asset used as the Fundraising Page logo","type":["null","integer"]},"member_email_text":{"description":"HTML formatted string for member email body","type":["null","string"]},"member_id":{"description":"Member ID associated with this Fundraising Page","type":"integer"},"currency_code":{"description":"ISO code of the currency against which this Fundraising Page is normalized.","type":["null","string"]},"goal":{"description":"Fundraising goal for this Fundraising Page","type":"number","format":"float"},"is_tribute":{"description":"Flag denoting whether Fundraising Page is a tribute to someone","type":["null","boolean"]},"thankyou_email_text":{"description":"HTML formatted string for thank you email body","type":"string"},"thank_you_text":{"description":"Default thank you text on the thank you page","type":"string"},"title":{"description":"Page title","type":"string"}},"type":"object"},"fundraising_page_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-pages/${args.fundraising_page_id}`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
deleteFundraisingPage: tool({
  description: "Delete a Fundraising Page",
  parameters: jsonSchema<any>({ type: "object", properties: {"fundraising_page_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-pages/${args.fundraising_page_id}`;
    const fetchArgs = {
      url,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createFundraisingPageTransfer: tool({
  description: "Transfer specified Fundraising Page",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"FundraisingPageTransfer Fillable","properties":{"destination_campaign_id":{"description":"Primary identifier of destination Campaign","type":["null","integer"]},"destination_fundraising_team_id":{"description":"Primary identifier of destination Fundraising Team","type":["null","integer"]},"destination_member_id":{"description":"Primary identifier of destination Member","type":["null","integer"]}},"type":"object"},"page_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-pages/${args.page_id}/transfers`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
fetchFundraisingPageOverview: tool({
  description: "Retrieves aggregate records for the Fundraising Page\'s transactions.",
  parameters: jsonSchema<any>({ type: "object", properties: {"fundraising_page_id":{"type":"integer"},"interval":{"type":"string","enum":["daily","weekly"]},"start_date":{"type":"string"},"end_date":{"type":"string"},"timezone":{"type":"string"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-pages/${args.fundraising_page_id}/overview?interval=${encodeURIComponent(args.interval)}&start_date=${encodeURIComponent(args.start_date)}&end_date=${encodeURIComponent(args.end_date)}&timezone=${encodeURIComponent(args.timezone)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listFundraisingPageSoftCredits: tool({
  description: "List Fundraising Page Soft Credits",
  parameters: jsonSchema<any>({ type: "object", properties: {"fundraisingPage_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-pages/${args.fundraisingPage_id}/soft-credits?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listFundraisingPageStories: tool({
  description: "List Fundraising Page Stories",
  parameters: jsonSchema<any>({ type: "object", properties: {"fundraising_page_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-pages/${args.fundraising_page_id}/stories?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createFundraisingPageStory: tool({
  description: "Create Fundraising Page Story",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"properties":{"body":{"description":"Main content of Story","type":"string"},"status":{"description":"Indication whether Post is a draft or has been published","type":"string","enum":["draft","published"]},"title":{"description":"Title of Post","type":["null","string"]}},"type":"object"},"fundraising_page_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-pages/${args.fundraising_page_id}/stories`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listFundraisingPageUpdates: tool({
  description: "List Fundraising Page Updates",
  parameters: jsonSchema<any>({ type: "object", properties: {"fundraising_page_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-pages/${args.fundraising_page_id}/updates?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createFundraisingPageUpdate: tool({
  description: "Create Fundraising Page Update",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"properties":{"body":{"description":"Main content of Update","type":"string"},"status":{"description":"Indication whether Post is a draft or has been published","type":"string","enum":["draft","published"]},"title":{"description":"Title of Post","type":["null","string"]},"visibility":{"description":"Visibility of Update (private Updates can only be seen by the Member associated with record)","type":"string","enum":["private","public"]}},"type":"object"},"fundraising_page_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-pages/${args.fundraising_page_id}/updates`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listFundraisingTeamActivities: tool({
  description: "Retrieves a list of all Activities related to the specified Fundraising Team",
  parameters: jsonSchema<any>({ type: "object", properties: {"fundraising_team_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-teams/${args.fundraising_team_id}/activity?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listFundraisingTeamAnswers: tool({
  description: "Retrieves list of all Answers related to specified Fundraising Team",
  parameters: jsonSchema<any>({ type: "object", properties: {"fundraising_team_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-teams/${args.fundraising_team_id}/answers?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createFundraisingTeamAnswer: tool({
  description: "Create an Answer for a Fundraising Team",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"required":["question_id"],"allOf":[{"title":"Answer Fillable","properties":{"answer":{"description":"Answer content","type":"string"}},"type":"object"},{"properties":{"question_id":{"description":"Primary identifier of associated Question","type":"integer"}},"type":"object"}]},"fundraising_team_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-teams/${args.fundraising_team_id}/answers`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
createFundraisingTeamCreditAdjustment: tool({
  description: "Create Credential Adjustment for specified Fundraising Team",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Credit Adjustment Fillable","properties":{"amount":{"description":"The amount of the Credit Adjustment.  Positive values add credit to a Fundraising Entity.  Negative values remove credit","type":"integer","format":"float"},"metadata":{"description":"Arbitrary JSON metadata","type":"string"},"memo":{"description":"An arbitrary memo about the Credit Adjustment.","type":"string","maxLength":255}},"type":"object"},"team_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-teams/${args.team_id}/credit-adjustments`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listFundraisingTeamDomainSlugs: tool({
  description: "Retrieves a list of all Domain Slugs for specified Fundraising Team",
  parameters: jsonSchema<any>({ type: "object", properties: {"team_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-teams/${args.team_id}/domain-slugs?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createFundraisingTeamDomainSlugs: tool({
  description: "Create a Domain Slug for the specified Fundraising Team",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Domain Slug Fillable","properties":{"links_to_donation_page":{"description":"Indicates whether the slug should reference the Donation Page for the DomainSlug's Fundraising Entity","type":"boolean"},"value":{"description":"Value of the Domain Slug","type":"string","maxLength":255}},"type":"object"},"team_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-teams/${args.team_id}/domain-slugs`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listFundraisingTeamFeedItems: tool({
  description: "List all Feed Items for specified Fundraising Team",
  parameters: jsonSchema<any>({ type: "object", properties: {"fundraising_team_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-teams/${args.fundraising_team_id}/feed-items?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createFundraisingTeamFeedItem: tool({
  description: "Create a FeedItem (Comment) for specified Fundraising Team",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"properties":{"comment":{"description":"Comment for the Fundraising Team","type":"string"}},"type":"object"},"fundraising_team_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-teams/${args.fundraising_team_id}/feed-items`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listFundraisingTeamFundraisingPages: tool({
  description: "List all Fundraising Pages for specified Fundraising Team",
  parameters: jsonSchema<any>({ type: "object", properties: {"fundraising_team_id":{"type":"integer"},"with":{"type":"array","items":{"type":"string","enum":["cover_photo","fundraising_team","logo","member","supporter"]}},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-teams/${args.fundraising_team_id}/fundraising-pages?with=${encodeURIComponent(args.with)}&page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
fetchFundraisingTeam: tool({
  description: "Retrieves a specified Fundraising Team",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"},"aggregates":{"type":"boolean"},"with":{"type":"array","items":{"type":"string","enum":["campaign","cover_photo","logo","team_lead","team_policy"]}}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-teams/${args.id}?aggregates=${encodeURIComponent(args.aggregates)}&with=${encodeURIComponent(args.with)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
updateFundraisingTeam: tool({
  description: "Update a Fundraising Team",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Fundraising Team Fillable","properties":{"city":{"description":"City","type":["null","string"],"maxLength":50},"country":{"description":"Country. Must be a valid ISO 3166-1 alpha-2 country code","type":["null","string"],"maxLength":2},"description":{"description":"Team description","type":["null","string"]},"name":{"description":"Team name","type":"string","maxLength":127},"postal_code":{"description":"Postal Code","type":["null","string"],"maxLength":50},"raw_currency_code":{"description":"ISO code of the default currency in which this Fundraising Team should be presented. Defaults to 'currency_code' if not specified","type":["null","string"],"maxLength":3},"raw_goal":{"description":"Raw fundraising goal for this team. If unspecified, defaults to the team goal value set on the campaign","type":["null","integer"]},"state":{"description":"State/province name. Must be a valid USPS state code","type":["null","string"],"maxLength":100},"thank_you_text":{"description":"Default thank you text on the thank you page","type":["null","string"]},"designation_id":{"description":"Primary identifier of associated Designation. Defaults to the campaign's designation","type":["null","integer"]}},"type":"object"},"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-teams/${args.id}`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
deleteFundraisingTeam: tool({
  description: "Delete a Fundraising Team",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-teams/${args.id}`;
    const fetchArgs = {
      url,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listSubteams: tool({
  description: "Retrieves a list of all SubTeams for specified Fundraising Teams",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-teams/${args.id}/subteams?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
fetchFundraisingTeamOverview: tool({
  description: "Retrieves aggregate records for the Fundraising Page\'s transactions.",
  parameters: jsonSchema<any>({ type: "object", properties: {"fundraising_team_id":{"type":"integer"},"interval":{"type":"string","enum":["daily","weekly"]},"start_date":{"type":"string"},"end_date":{"type":"string"},"timezone":{"type":"string"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-teams/${args.fundraising_team_id}/overview?interval=${encodeURIComponent(args.interval)}&start_date=${encodeURIComponent(args.start_date)}&end_date=${encodeURIComponent(args.end_date)}&timezone=${encodeURIComponent(args.timezone)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listFundraisingTeamSoftCredits: tool({
  description: "List Fundraising Team Soft Credits",
  parameters: jsonSchema<any>({ type: "object", properties: {"fundraisingTeam_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-teams/${args.fundraisingTeam_id}/soft-credits?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listFundraisingTeamStories: tool({
  description: "List Fundraising Team Stories",
  parameters: jsonSchema<any>({ type: "object", properties: {"fundraising_team_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-teams/${args.fundraising_team_id}/stories?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createFundraisingTeamStory: tool({
  description: "Create Fundraising Team Story",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"properties":{"body":{"description":"Main content of Story","type":"string"},"status":{"description":"Indication whether post is a draft or has been published","type":"string","enum":["draft","published"]},"title":{"description":"Title of Post","type":["null","string"]}},"type":"object"},"fundraising_team_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-teams/${args.fundraising_team_id}/stories`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
transferFundraisingTeam: tool({
  description: "Transfer a Fundraising Team within its Campaign/subteam infrastructure.",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"properties":{"new_parent_id":{"description":"The ID of the new parent. This must reference a Fundraising Team associated with the Campaign of the Fundraising Team being moved or the Fundraising Team's Campaign itself.","type":"integer"},"new_parent_type":{"description":"They type of the new parent. This can either be `fundraising_team` or `campaign`","type":"string","enum":["fundraising_team","campaign"]}},"type":"object"},"fundraising_team_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-teams/${args.fundraising_team_id}/transfers`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listFundraisingTeamUpdates: tool({
  description: "List Fundraising Team Updates",
  parameters: jsonSchema<any>({ type: "object", properties: {"fundraising_team_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-teams/${args.fundraising_team_id}/updates?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createFundraisingTeamUpdate: tool({
  description: "Create Fundraising Team Update",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"properties":{"body":{"description":"Main content of Update","type":"string"},"status":{"description":"Indication whether post is a draft or has been published","type":"string","enum":["draft","published"]},"title":{"description":"Title of Post","type":["null","string"]},"visibility":{"description":"Visibility of Update (private Updates can only be seen by the Member associated\n    with record)","type":"string","enum":["private","public"]}},"type":"object"},"fundraising_team_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-teams/${args.fundraising_team_id}/updates`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
fetchFundraisingTeamPolicy: tool({
  description: "Fetch specified Fundraising Team Policy",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-team-policies/${args.id}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
updateFundraisingTeamPolicy: tool({
  description: "Update specified Fundraising Team Policy",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Fundraising Team Policy Fillable","properties":{"allow_subteams":{"description":"Indicates whether SubTeams are allowed under this Team","type":"boolean"},"allow_fundraising_pages":{"description":"Indicates whether Fundraising Pages are allowed under this Team","type":"boolean"},"allow_transactions":{"description":"Indicates whether Transactions are allowed under this Team","type":"boolean"},"allow_cross_campaign_fundraisers":{"description":"Indicates whether Fundraisers from other Campaigns are allowed to join this Team","type":"boolean"},"allocation_method":{"description":"Allocation method for this Team","type":"string","enum":["manual","automatic-even-split"]},"min_members":{"description":"Minimum Members required before the Team is considered active","type":"integer"},"max_members":{"description":"Maximum Members allowed for this Team","type":"integer"},"fundraiser_registration_policy":{"description":"Fundraiser and Sub-team Registration Policy for this Team","type":"string","enum":["public","private-confirmation-required","private-invite-only","private-password","admin-only"]}},"type":"object"},"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/fundraising-team-policies/${args.id}`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
deleteLike: tool({
  description: "Delete a Like",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/likes/${args.id}`;
    const fetchArgs = {
      url,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listMemberOrganizations: tool({
  description: "Fetches a collection of Organizations to which this Member has administration access",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/members/${args.id}/organizations?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listMemberCampaigns: tool({
  description: "Fetches a collection of Campaigns to which this Member has administration access",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/members/${args.id}/campaigns?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listMemberFundraisingPages: tool({
  description: "List all Fundraising Pages for specified Member",
  parameters: jsonSchema<any>({ type: "object", properties: {"member_id":{"type":"integer"},"with":{"type":"array","items":{"type":"string","enum":["cover_photo","fundraising_team","logo","member","supporter"]}},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/members/${args.member_id}/fundraising-pages?with=${encodeURIComponent(args.with)}&page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listMemberFundraisingTeams: tool({
  description: "Retrieves a list of all Fundraising Teams for the specified Member",
  parameters: jsonSchema<any>({ type: "object", properties: {"member_id":{"type":"integer"},"with":{"type":"array","items":{"type":"string","enum":["campaign","cover_photo","logo","team_lead","team_policy"]}},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/members/${args.member_id}/fundraising-teams?with=${encodeURIComponent(args.with)}&page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listMemberLeadingFundraisingTeams: tool({
  description: "Retrieves a list of all Fundraising Teams for which the specified Member is the team lead",
  parameters: jsonSchema<any>({ type: "object", properties: {"member_id":{"type":"integer"},"with":{"type":"array","items":{"type":"string","enum":["campaign","cover_photo","logo","team_lead","team_policy"]}},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/members/${args.member_id}/leading-fundraising-teams?with=${encodeURIComponent(args.with)}&page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listMemberRecurringDonationPlans: tool({
  description: "Retrieves a list of all Recurring Donation Plans for a specific Member",
  parameters: jsonSchema<any>({ type: "object", properties: {"member_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/members/${args.member_id}/recurring-donation-plans?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listMemberRoles: tool({
  description: "Lists all the roles that are available to the Member.",
  parameters: jsonSchema<any>({ type: "object", properties: {"member_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/members/${args.member_id}/roles?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
fetchMemberMe: tool({
  description: "return information about Member",
  parameters: jsonSchema<any>({ type: "object", properties: {}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/me`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
fetchMemberUserInfo: tool({
  description: "return information about Member compatible with openid",
  parameters: jsonSchema<any>({ type: "object", properties: {}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/userinfo`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listOrganizationActivities: tool({
  description: "Retrieves a list of all Activities related to the specified Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"organization_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/activity?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listOrganizationAnswers: tool({
  description: "Retrieves list of all Answers related to specified Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"organization_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/answers?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listOrganizationCampaigns: tool({
  description: "Retrieves a list of all Campaigns for a specific Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"org_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.org_id}/campaigns?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listOrganizationDedications: tool({
  description: "List Organization Dedications",
  parameters: jsonSchema<any>({ type: "object", properties: {"org_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.org_id}/dedications`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listOrganizationDesignations: tool({
  description: "Retrieves a list of all Designations related to the specified Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"org_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.org_id}/designations?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createOrganizationDesignation: tool({
  description: "Create Designation for specified Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Designation Fillable","properties":{"city":{"description":"The name of the city associated with the Designation","type":["null","string"],"maxLength":100},"description":{"description":"A brief description of the Designation","type":["null","string"]},"end_date":{"description":"Date that record ends","type":["null","string"],"format":"date-time"},"end_time":{"description":"Time that record ends","type":["null","string"],"format":"date-time"},"external_reference_id":{"description":"Primary identifier of associated Member","type":["null","string"],"maxLength":100},"goal":{"description":"The Fundraising Goal for the Designation","type":["null","string"],"format":"float","minimum":1},"is_active":{"description":"Indicates whether Designation is active","type":"boolean","default":false},"is_complete":{"description":"Indicates whether Designation is complete","type":"boolean","default":false},"is_default":{"description":"Indicates whether this is the default Designation for the Organization. Only one Designation per Organization can have this be true","type":"boolean","default":false},"name":{"description":"Name of the Designation, unique to this Organization","type":"string","maxLength":127},"postal_code":{"description":"Postal code associated with the Designation","type":["null","string"],"maxLength":50},"start_date":{"description":"Date that record starts","type":"string","format":"date-time"},"start_time":{"description":"Time that record starts","type":"string","format":"date-time"},"state":{"description":"Two-letter abbreviation of the state associated with the Designation","type":["null","string"],"maxLength":2,"minLength":2}},"type":"object"},"org_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.org_id}/designations`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listOrganizationDomainSlugs: tool({
  description: "Retrieves a list of all Domain Slugs for specified Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"organization_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/domain-slugs?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createOrganizationDomainSlugs: tool({
  description: "Create a Domain Slug for the specified Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Domain Slug Fillable","properties":{"links_to_donation_page":{"description":"Indicates whether the slug should reference the Donation Page for the DomainSlug's Fundraising Entity","type":"boolean"},"value":{"description":"Value of the Domain Slug","type":"string","maxLength":255}},"type":"object"},"organization_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/domain-slugs`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
fetchOrganizationDoubleTheDonation: tool({
  description: "Retrieves a Double The Donation Account for a specific Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"organization_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/double-the-donation`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createOrganizationDoubleTheDonation: tool({
  description: "Create Organization Double The Donation Account",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"DoubleTheDonation Account Fillable","properties":{"public_key":{"description":"Public key for DoubleTheDonation","type":"string"},"private_key":{"description":"Private key for DoubleTheDonation","type":"string"}},"type":"object"},"organization_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/double-the-donation`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listOrganizationFeedItems: tool({
  description: "List all Feed Items for specified Organization (Direct)",
  parameters: jsonSchema<any>({ type: "object", properties: {"organization_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/feed-items?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createOrganizationFeedItem: tool({
  description: "Create a FeedItem (Comment) for specified Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"properties":{"comment":{"description":"Comment for the Organization","type":"string"}},"type":"object"},"organization_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/feed-items`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listOrganizationFeedItemsScoped: tool({
  description: "List all Feed Items for specified Organization (Scoped)",
  parameters: jsonSchema<any>({ type: "object", properties: {"organization_id":{"type":"integer"},"scope":{"type":"string","enum":["direct","all"]},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/feed-items/${args.scope}?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listOrganizationFundraisingPages: tool({
  description: "List all Fundraising Pages for specified Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"organization_id":{"type":"integer"},"with":{"type":"array","items":{"type":"string","enum":["cover_photo","fundraising_team","logo","member","supporter"]}},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/fundraising-pages?with=${encodeURIComponent(args.with)}&page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listOrganizationFundraisingTeams: tool({
  description: "Retrieves a list of all Fundraising Teams for the specified Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"organization_id":{"type":"integer"},"with":{"type":"array","items":{"type":"string","enum":["campaign","cover_photo","logo","team_lead","team_policy"]}},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/fundraising-teams?with=${encodeURIComponent(args.with)}&page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listOrganizationFundraisingTeamPolicies: tool({
  description: "Retrieves a list of all Fundraising Team Policies for the specified Orgnaization",
  parameters: jsonSchema<any>({ type: "object", properties: {"org_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.org_id}/fundraising-team-policies?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
updateOrganizationBranding: tool({
  description: "Create/Update Organization Branding",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"allOf":[{"title":"Branding Fillable","properties":{"background_color":{"description":"Color of main background","type":"string"},"background_image_style":{"description":"CSS for rendering background image","type":"string"},"header_color":{"description":"Color of header","type":"string"},"header_footer_color":{"description":"Color of footer portion of header","type":"string"},"header_image_height":{"description":"Height of header image in pixels","type":"integer"},"header_image_style":{"description":"CSS for rendering header image","type":"string"},"header_url":{"description":"URL of location to which header image links","type":"string"},"primary_color":{"description":"Primary color","type":"string"},"secondary_color":{"description":"Secondary color","type":"string"}},"type":"object"},{"title":"Organization Branding Fillable","type":"object","allOf":[{"title":"Branding Fillable","properties":{"background_color":{"description":"Color of main background","type":"string"},"background_image_style":{"description":"CSS for rendering background image","type":"string"},"header_color":{"description":"Color of header","type":"string"},"header_footer_color":{"description":"Color of footer portion of header","type":"string"},"header_image_height":{"description":"Height of header image in pixels","type":"integer"},"header_image_style":{"description":"CSS for rendering header image","type":"string"},"header_url":{"description":"URL of location to which header image links","type":"string"},"primary_color":{"description":"Primary color","type":"string"},"secondary_color":{"description":"Secondary color","type":"string"}},"type":"object"},{"properties":{"favicon":{"description":"URL of favicon image; deprecated/replaced by favicon_asset_url","type":"string"},"favicon_asset_id":{"description":"Primary identifier of associated Asset representing favicon image","type":"integer"},"favicon_asset_url":{"description":"URL of favicon image derived from associated Asset","type":"string"}},"type":"object"}]}]},"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.id}/branding`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listOrganizationChannel: tool({
  description: "Retrieves a list of all Channels for the specified Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"org_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.org_id}/channels?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listOrganizationCredentialSets: tool({
  description: "Retrieves a list of all Credential Sets for the specified Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"org_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.org_id}/credential-sets?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createOrganizationCredentialSet: tool({
  description: "Create a Credential Set for specified Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Organization Credential Set Fillable","properties":{"activity_wall":{"description":"Indicates whether or not the Member has activity_wall access","type":"boolean"},"campaign_manager":{"description":"Indicates whether or not the Member has campaign_manager access","type":"boolean"},"global_admin":{"description":"Indicates whether or not the Member has global_admin access","type":"boolean"}},"type":"object"},"org_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.org_id}/credential-sets`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listOrganizationNotifications: tool({
  description: "Retrieves a list of all Nofications made for the specified Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"org_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.org_id}/notifications?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createOrganizationNotification: tool({
  description: "Create a Nofication for the specified Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"allOf":[{"title":"Organization Notification Fillable","properties":{"enabled":{"description":"Indicates if the Notification is active or not","type":"boolean"}},"type":"object"},{"properties":{"email_address":{"description":"Email address who will receive the updates","type":"string"},"type":{"description":"Type of notifications to be received","type":"string","enum":["transaction","third_party","recurring","fundraising","chargeback","payout_report"]}},"type":"object"}]},"org_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.org_id}/notifications`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
fetchPaypalStripePayouts: tool({
  description: "Fetch all payouts for a specific Organization on a given payout date",
  parameters: jsonSchema<any>({ type: "object", properties: {"org_id":{"type":"integer"},"payout_type":{"type":"string"},"payout_date":{"type":"string"},"page":{"type":"int"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.org_id}/payouts/${args.type}?payout_date=${encodeURIComponent(args.payout_date)}&page=${encodeURIComponent(args.page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listOrganizationQuestions: tool({
  description: "Retrieves a list of all questions for a specific Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"org_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.org_id}/questions?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listOrganizationRecurringDonationPlans: tool({
  description: "Retrieves a list of all Recurring Donation Plans for a specific Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"organization_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/recurring-donation-plans?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listOrganizationRecurringDonationPlanHistory: tool({
  description: "Retrieve a list of all the Recurring Donation Plan History for the given organization.",
  parameters: jsonSchema<any>({ type: "object", properties: {"organization_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/recurring-donation-history?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listOrganizationRegistrations: tool({
  description: "Retrieves a list of all Registrations for a specific Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"organization_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/registrations?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listOrganizationRestrictedCountries: tool({
  description: "Retrieves a list of all blacklisted countries for the specified Organzation",
  parameters: jsonSchema<any>({ type: "object", properties: {"organization_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/restricted-countries?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listOrganizationRoles: tool({
  description: "Lists all the Roles that are available to the Organization.",
  parameters: jsonSchema<any>({ type: "object", properties: {"organization_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/roles?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listOrganizationSourceTrackingCodes: tool({
  description: "Lists all Source Tracking Codes which are managed by the specified Organization.",
  parameters: jsonSchema<any>({ type: "object", properties: {"organization_id":{"type":"integer"},"fundraisingTeams":{"type":"boolean","default":false},"fundraisingPages":{"type":"boolean","default":false},"transactions":{"type":"boolean","default":false},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/source-tracking-codes?fundraisingTeams=${encodeURIComponent(args.fundraisingTeams)}&fundraisingPages=${encodeURIComponent(args.fundraisingPages)}&transactions=${encodeURIComponent(args.transactions)}&page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listOrganizationStaffNotificationSettings: tool({
  description: "Get Staff Notification Settings for given Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"organization_id":{"type":"integer"},"with":{"type":"array","items":{"type":"string","enum":["scope"]}},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/staff-notification-settings?with=${encodeURIComponent(args.with)}&page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createOrganizationStaffNotificationSetting: tool({
  description: "Create a Staff Notification Setting for an Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Organization Staff Notification Setting Fillable","type":"object","allOf":[{"properties":{"scope_type":{"description":"Scope for email notifications","type":"string","enum":["Organization_Manager"]},"scope_id":{"description":"Scope ID will be Organization ID as the scope type is Organization_Manager","type":"integer"}},"type":"object"},{"title":"Staff Notification Setting Fillable","properties":{"member_id":{"description":"Member who created Staff Notification Setting","type":"integer"},"chargebacks_category":{"description":"Receive an email if a Supporter files a chargeback and if it’s won or lost.","type":"boolean","default":false},"classy_pay_category":{"description":"Sent when your Organization's payout report is available","type":"boolean","default":false},"fundraising_page_category":{"description":"Receive an email when a Supporter creates a Fundraising Page or Team.","type":"boolean","default":false},"recurring_canceled_category":{"description":"Receive an email when a Recurring Plan is canceled.","type":"boolean","default":false},"recurring_ended_category":{"description":"Receive an email when a Recurring Plan has ended.","type":"boolean","default":false},"recurring_failed_category":{"description":"Receive an email when a Recurring Donation fails.","type":"boolean","default":false},"recurring_modified_category":{"description":"Receive an email when a Recurring Plan has been updated.","type":"boolean","default":false},"recurring_new_category":{"description":"Receive an email when a new Recurring Plan has been created.","type":"boolean","default":false},"recurring_successful_category":{"description":"Receive an email when a Recurring Donation has been made.","type":"boolean","default":false},"transactions_category":{"description":"Receive an email for every donation, ticket/registration purchase.","type":"boolean","default":false}},"type":"object"}]},"organization_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/staff-notification-settings`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listOrganizationSupporters: tool({
  description: "Retrieves a list of all Supporters for a specific Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"organization_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/supporters?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createOrganizationSupporter: tool({
  description: "Create a Supporter for an Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Supporter Fillable","properties":{"address1":{"description":"Supporter main address","type":["null","string"],"maxLength":512},"address2":{"description":"Secondary Supporter address","type":["null","string"],"maxLength":45},"city":{"description":"Supporter City","type":["null","string"],"maxLength":45},"country":{"description":"Supporter Country","type":["null","string"],"maxLength":2,"minLength":2},"email_address":{"description":"Supporter email address","type":["null","string"],"format":"email"},"first_name":{"description":"First name of the supporter","type":["null","string"],"maxLength":32},"gender":{"description":"Support gender","type":["null","string"],"maxLength":1,"minLength":1,"pattern":"/^[M,F,m,f]$/"},"last_name":{"description":"Supporter last name","type":["null","string"],"maxLength":32},"location":{"description":"Free text representing a location","type":["null","string"],"maxLength":45},"metadata":{"oneOf":[{"title":"Metadata","properties":{"foo":{"type":"string"}},"type":"object"}],"description":"Arbitrary JSON metadata"},"nickname":{"description":"Supporter nickname","type":["null","string"],"maxLength":32},"phone":{"description":"Supporter phone number","type":["null","string"],"maxLength":16},"postal_code":{"description":"Zip Code","type":["null","string"],"maxLength":50},"state":{"description":"State/province name","type":["null","string"],"maxLength":100}},"type":"object"},"organization_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/supporters`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listAsrMessages: tool({
  description: "Retrieves an array with recipientsIds, template_name, year and message_id for Annual Summary Report wrt Supporters for a specific Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"organization_id":{"type":"integer"},"supporter_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/supporters/${args.supporter_id}/messages/asrs`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listOrganizationTicketTypes: tool({
  description: "Retrieve a list of all the Ticket Types for the given Organization.",
  parameters: jsonSchema<any>({ type: "object", properties: {"organization_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/ticket-types?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listOrganizationTransactions: tool({
  description: "List Organization Transactions",
  parameters: jsonSchema<any>({ type: "object", properties: {"organization_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"},"with":{"type":"array","items":{"type":"string","enum":["items","member","offline_payment_info","channel_transaction","dedication","reprocess_status","recurring_donation_plan","receipt_serial","supporter","order_donation_match"]}}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/transactions?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}&with=${encodeURIComponent(args.with)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listOrganizationTransactionItems: tool({
  description: "Fetch Transaction Items for specific Organization.",
  parameters: jsonSchema<any>({ type: "object", properties: {"organization_id":{"type":"integer"},"with":{"type":"array","items":{"type":"string","enum":["transaction"]}},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/transaction-items?with=${encodeURIComponent(args.with)}&page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listOrganizationWhitelistedCurrencies: tool({
  description: "List all Whitelisted Currencies for specified Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"organization_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/whitelisted-currencies?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createWhitelistedCurrency: tool({
  description: "Create a new Whitelisted Currency",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"properties":{"currency_code":{"description":"ISO 4217-compliant alpha currency code","type":"string"}},"type":"object"},"organization_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organizations/${args.organization_id}/whitelisted-currencies`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
disableOrganizationChannel: tool({
  description: "Disables a Channel for the specified Organization",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organization-channels/${args.id}/disable`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
fetchOrganizationCredentialSet: tool({
  description: "Retrieves a Organization Credential Set from ID",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"},"with":{"type":"array","items":{"type":"string","enum":["member","organization"]}}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organization-credential-sets/${args.id}?with=${encodeURIComponent(args.with)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
updateOrganizationCredentialSet: tool({
  description: "Update a specified Organization Credential Set",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Organization Credential Set Fillable","properties":{"activity_wall":{"description":"Indicates whether or not the Member has activity_wall access","type":"boolean"},"campaign_manager":{"description":"Indicates whether or not the Member has campaign_manager access","type":"boolean"},"global_admin":{"description":"Indicates whether or not the Member has global_admin access","type":"boolean"}},"type":"object"},"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organization-credential-sets/${args.id}`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
deleteOrganizationCredentialSet: tool({
  description: "Delete a specified Organization Credential Set",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organization-credential-sets/${args.id}`;
    const fetchArgs = {
      url,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
fetchOrganizationNotification: tool({
  description: "Retrieves a specific notification by id",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organization-notifications/${args.id}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
updateOrganizationNotification: tool({
  description: "Update nofication",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Organization Notification Fillable","properties":{"enabled":{"description":"Indicates if the Notification is active or not","type":"boolean"}},"type":"object"},"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organization-notifications/${args.id}`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
deleteOrganizationNotification: tool({
  description: "Delete a Organization Notification",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/organization-notifications/${args.id}`;
    const fetchArgs = {
      url,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listPromoCodeConfigurations: tool({
  description: "Retrieves a list of all Promo Code Configurations for the specified Promo Code",
  parameters: jsonSchema<any>({ type: "object", properties: {"promo_code_id":{"type":"integer"},"with":{"type":"array","items":{"type":"string","enum":["ticket_type"]}},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/promo-codes/${args.promo_code_id}/promo-code-configurations?with=${encodeURIComponent(args.with)}&page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listPromoCodeTicketTypes: tool({
  description: "List all Ticket Types configured to work with the specified Promo Code",
  parameters: jsonSchema<any>({ type: "object", properties: {"promo_code_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/promo-codes/${args.promo_code_id}/ticket-types?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createPromoCodeConfiguration: tool({
  description: "Create Promo Code Configuration",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Promo Code Configuration Fillable","properties":{"promo_code_id":{"description":"Primary identifier of associated Promo Code","type":"integer"},"ticket_type_id":{"description":"Primary identifier of associated Ticket Type","type":"integer"}},"type":"object"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/promo-code-configurations`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
deletePromoCodeConfiguration: tool({
  description: "Delete Promo Code Configuration",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/promo-code-configurations/${args.id}`;
    const fetchArgs = {
      url,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
fetchPromoCode: tool({
  description: "Fetch specified Promo Code",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/promo-codes/${args.id}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
updatePromoCode: tool({
  description: "Update a Promo Code",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Promo Code Fillable","properties":{"adjustment_amount":{"description":"Value to configure price adjustment when applied against an item. Can reflect either a percentage or flat amount based on associated adjustment_type","type":"integer"},"adjustment_type":{"description":"Specification of how adjustment_amount is applied","type":"string","enum":["percentage","amount"]},"code":{"description":"Value of the Promo Code to entered on checkout","type":"string","maxLength":25},"ends_at":{"description":"Date/time when the Promo Code can no longer be applied to purchases","type":"string","format":"date-time"},"is_active":{"description":"Indicates whether Promo Code is active or not regardless of availability or date range","type":"boolean"},"is_general":{"description":"Indicates whether Promo Code has a general designation, meaning it applies to all TicketTypes for its Campaign","type":"boolean"},"quantity":{"description":"Total number of items against which the Promo Code can be applied (null implies unlimited applications)","type":"integer"},"starts_at":{"description":"Date/time when record can start being applied to purchase","type":"string","format":"date-time"}},"type":"object"},"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/promo-codes/${args.id}`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listQuestionAnswers: tool({
  description: "Retrieves list of all Answers related to specified Question",
  parameters: jsonSchema<any>({ type: "object", properties: {"question_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/questions/${args.question_id}/answers?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
fetchQuestion: tool({
  description: "Fetch specified Question",
  parameters: jsonSchema<any>({ type: "object", properties: {"question_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/questions/${args.question_id}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
updateQuestion: tool({
  description: "Update a Question",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"QuestionFillable","properties":{"enum_options":{"description":"Enum question options. Required for and exclusive to enum question type.","type":["null","array"],"items":{"title":"QuestionEnumOptionFillable","properties":{"label":{"description":"QuestionEnumOption label","type":"string"}},"type":"object"}},"is_required":{"description":"If the Question is required or not","type":"boolean"},"label":{"description":"Question label","type":"string"},"location":{"description":"Question location, must be valid for campaign type. donation_page supported by all, team_creation supported by reg_w_fund and p2p, page_creation supported by p2p, campaign_registration supported by p2p and ticketed.","type":"string","enum":["donation_page","team_creation","page_creation","campaign_registration"]},"product_id":{"description":"Identifier of associated product, such as ticket","type":["null","integer"]},"tag":{"description":"Question tag, must be unique for location on a campaign","type":["null","string"],"enum":["address","address2","address_type","birthdate","blog","cellphone","city","company_name","country","email_address","email_type","emergency_first_name","emergency_last_name","emergency_phone","event_waiver","first_name","gender","pronoun","homephone","last_name","middle_name","postal_code","prefix","run_walk","shirt_size","state","state","suffix","text_opt_in","website"]},"type":{"description":"Type of the Question","type":"string","enum":["boolean","integer","currency","enum","text","string","date","yes_no"]},"weight":{"description":"Weight of the Question, used for display order","type":"integer"}},"type":"object"},"question_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/question/${args.question_id}`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
deleteQuestion: tool({
  description: "Delete Question",
  parameters: jsonSchema<any>({ type: "object", properties: {"question_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/question/${args.question_id}`;
    const fetchArgs = {
      url,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listRecurringDonationPlanTransactions: tool({
  description: "List Recurring Donation Plan Transactions",
  parameters: jsonSchema<any>({ type: "object", properties: {"recurring_donation_plan_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/recurring-donation-plans/${args.recurring_donation_plan_id}/transactions?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
reprocessRecurringDonationPlanTransaction: tool({
  description: "Reprocess a Transactions for a Recurring Donation Plan",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Transaction Fillable","properties":{"billing_address1":{"description":"Line one of Billing address","type":["null","string"]},"billing_address2":{"description":"Line two of Billing address","type":["null","string"]},"billing_city":{"description":"Billing city","type":["null","string"]},"billing_country":{"description":"Billing country. Must be a valid ISO 3166-1 alpha-2 country code","type":["null","string"]},"billing_first_name":{"description":" Billing first name","type":["null","string"]},"billing_last_name":{"description":"Billing last name","type":["null","string"]},"billing_postal_code":{"description":"Billing zip/postal code","type":["null","string"]},"billing_state":{"description":"Billing state/province","type":["null","string"],"maxLength":32},"browser_info":{"description":"Browser information","type":["null","string"]},"comment":{"description":"Organization comment","type":["null","string"]},"company_name":{"description":"Name of company this Transaction has ties to","type":["null","string"]},"hide_amount":{"description":"Whether purchaser indicated if Transaction amount should be hidden","type":["null","boolean"]},"is_anonymous":{"description":"Whether purchaser indicated if transaction should be anonymous","type":["null","boolean"]},"is_gift_aid":{"description":"Flag whether the donor opted into gift aid used by the UK or not. Can only be set if the organization allows it","type":["null","boolean"]},"is_reprocess":{"description":"If it is a reprocessed transaction or not","type":["null","boolean"]},"member_country":{"description":"Country of the Member","type":["null","string"]},"member_email_address":{"description":"Email address of purchaser Classy Member","type":["null","string"]},"member_name":{"description":" Name of purchaser Classy Member","type":["null","string"]},"member_phone":{"description":"Phone number of purchaser Classy Member","type":["null","string"]},"metadata":{"description":"An optional set of unstructured metadata to be stored with a Transaction","type":["null","string"]},"raw_currency_code":{"description":"Currency Code of the Transaction before normalization","type":["null","string"]},"status":{"description":"The status of the Transaction","type":["null","string"],"enum":["test","canceled","incomplete","success","refunded","cb_lost","cb_initiated","voided","pending","failed"]},"reprocess_attempt_info":{"title":"ReprocessAttemptInfoFillable","properties":{"original_transaction_id":{"description":"ID of the original Transaction","type":"integer"},"reprocess_transaction_id":{"description":"ID of Reprocess Transaction","type":"integer"},"initiated_by_id":{"description":"The ID of the member initiating the reprocess","type":"integer"},"pp_transaction_id":{"description":"Transaction ID for the payment provider (e.g. Classy Pay)","type":"string"},"state":{"description":"Reprocess status","type":"string","enum":["completed","pending","failed"]}},"type":"object"}},"type":"object"},"recurring_donation_plan_id":{"type":"integer"},"transaction_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/recurring-donation-plans/${args.recurring_donation_plan_id}/transactions/${args.transaction_id}/reprocess`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
fetchRecurringDonationPlan: tool({
  description: "Fetch specified Recurring Donation Plan",
  parameters: jsonSchema<any>({ type: "object", properties: {"recurring_donation_plan_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/recurring-donation-plans/${args.recurring_donation_plan_id}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listRegistrationAnswers: tool({
  description: "Retrieves list of all Answers related to specified Registration",
  parameters: jsonSchema<any>({ type: "object", properties: {"registration_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/registrations/${args.registration_id}/answers?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createRegistrationAnswer: tool({
  description: "Create an Answer for a Registration",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"required":["question_id"],"allOf":[{"title":"Answer Fillable","properties":{"answer":{"description":"Answer content","type":"string"}},"type":"object"},{"properties":{"question_id":{"description":"Primary identifier of associated Question","type":"integer"}},"type":"object"}]},"registration_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/registrations/${args.registration_id}/answers`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
fetchRegistration: tool({
  description: "Retrieves Registrations from ID",
  parameters: jsonSchema<any>({ type: "object", properties: {"registration_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/registrations/${args.registration_id}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
updateRegistration: tool({
  description: "Updates an existing Registration",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"RegistrationFillable","properties":{"first_name":{"description":"First name of who is registering","type":"string"},"last_name":{"description":"Last name of who is registering","type":"string"},"email":{"description":"Email address of who is registering","type":"string"},"phone":{"description":"Phone of who is registering","type":"string"},"cell":{"description":"Phone Cell number","type":"string","pattern":"^\\d{3}-\\d{3}-\\d{4}$"},"address1":{"description":"First address of Registration","type":["null","string"]},"address2":{"description":"Second address of Registration","type":["null","string"]},"city":{"description":"City field of Registration","type":"string"},"state":{"description":"State field of Registration","type":"string"},"status":{"description":"Attending status","type":"string","enum":["attending","not_attending","archived"]},"postal_code":{"description":"Postal code of who is registering","type":"string"},"country":{"description":"Country field of Registration","type":"string"},"company":{"description":"Name of the company","type":"string"},"website":{"description":"Website of registrant","type":"string"},"blog":{"description":"Blog of registrant","type":"string"},"gender":{"description":"First letter of the gender","type":"string"},"date_of_birth":{"description":"Date/time of birth of who is registering","type":"string","format":"date-time"},"tshirt_size":{"description":"Size of tshirt","type":"string"}},"type":"object"},"registration_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/registrations/${args.registration_id}`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
updateReprocessAttemptInfo: tool({
  description: "Update a Reprocess Attempt Info Record",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"allOf":[{"title":"ReprocessAttemptInfoFillable","properties":{"original_transaction_id":{"description":"ID of the original Transaction","type":"integer"},"reprocess_transaction_id":{"description":"ID of Reprocess Transaction","type":"integer"},"initiated_by_id":{"description":"The ID of the member initiating the reprocess","type":"integer"},"pp_transaction_id":{"description":"Transaction ID for the payment provider (e.g. Classy Pay)","type":"string"},"state":{"description":"Reprocess status","type":"string","enum":["completed","pending","failed"]}},"type":"object"}]},"reprocess_transaction_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/reprocess-attempt-info/${args.reprocess_transaction_id}`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listStoryComments: tool({
  description: "Retrieves a paginated list of Comments for a Story",
  parameters: jsonSchema<any>({ type: "object", properties: {"story_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/stories/${args.story_id}/comments?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createStoryComment: tool({
  description: "Create Comment for specified Story",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Comment Fillable","properties":{"body":{"description":"The content of the Comment","type":"string"}},"type":"object"},"story_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/stories/${args.story_id}/comments`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listStoryLikes: tool({
  description: "Retrieves a list of all Likes made for the specified Story",
  parameters: jsonSchema<any>({ type: "object", properties: {"story_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/stories/${args.story_id}/likes?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createStoryLike: tool({
  description: "Create a Like for the specified Story",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Like (Fillable Story)","type":"object","allOf":[{"title":"Like (Fillable)","properties":{"member_id":{"description":"Primary identifier of associated Member","type":"integer"},"likeable_id":{"description":"Primary identifier of the Entity for which the Like was created","type":["null","integer"]},"likeable_type":{"description":"Type of the Entity for which the Like was created","type":["null","string"]}},"type":"object"},{"properties":{"likeable_id":{"type":"integer"},"likeable_type":{"type":"string"}},"type":"object"}]},"story_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/stories/${args.story_id}/likes`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
updateStory: tool({
  description: "Update Story",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"properties":{"body":{"description":"Main content of Story","type":"string"},"status":{"description":"Indication whether Post is a draft or has been published","type":"string","enum":["draft","published"]},"title":{"description":"Title of Post","type":["null","string"]}},"type":"object"},"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/stories/${args.id}`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
deleteStory: tool({
  description: "Delete Story",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/stories/${args.id}`;
    const fetchArgs = {
      url,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
fetchSupporter: tool({
  description: "Retrieves Supporter from ID",
  parameters: jsonSchema<any>({ type: "object", properties: {"supporter_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/supporters/${args.supporter_id}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
deleteSupporter: tool({
  description: "Delete a Supporter",
  parameters: jsonSchema<any>({ type: "object", properties: {"supporter_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/supporters/${args.supporter_id}`;
    const fetchArgs = {
      url,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
updateSupporter: tool({
  description: "Updates an existing Supporter",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Supporter Fillable","properties":{"address1":{"description":"Supporter main address","type":["null","string"],"maxLength":512},"address2":{"description":"Secondary Supporter address","type":["null","string"],"maxLength":45},"city":{"description":"Supporter City","type":["null","string"],"maxLength":45},"country":{"description":"Supporter Country","type":["null","string"],"maxLength":2,"minLength":2},"email_address":{"description":"Supporter email address","type":["null","string"],"format":"email"},"first_name":{"description":"First name of the supporter","type":["null","string"],"maxLength":32},"gender":{"description":"Support gender","type":["null","string"],"maxLength":1,"minLength":1,"pattern":"/^[M,F,m,f]$/"},"last_name":{"description":"Supporter last name","type":["null","string"],"maxLength":32},"location":{"description":"Free text representing a location","type":["null","string"],"maxLength":45},"metadata":{"oneOf":[{"title":"Metadata","properties":{"foo":{"type":"string"}},"type":"object"}],"description":"Arbitrary JSON metadata"},"nickname":{"description":"Supporter nickname","type":["null","string"],"maxLength":32},"phone":{"description":"Supporter phone number","type":["null","string"],"maxLength":16},"postal_code":{"description":"Zip Code","type":["null","string"],"maxLength":50},"state":{"description":"State/province name","type":["null","string"],"maxLength":100}},"type":"object"},"supporter_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/supporter/${args.supporter_id}`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
updateTheme: tool({
  description: "Update existing Theme for a Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Theme Fillable","properties":{"campaign_id":{"description":"Primary identifier of Campaign","type":"integer"},"styles":{"description":"Theme properties like style, pages, type, etc","type":["null","object"]}},"type":"object"},"id":{"type":"string"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/themes/${args.id}`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
createTheme: tool({
  description: "Creates a new Theme for a Campaign",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Theme Fillable","properties":{"campaign_id":{"description":"Primary identifier of Campaign","type":"integer"},"styles":{"description":"Theme properties like style, pages, type, etc","type":["null","object"]}},"type":"object"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/themes`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listTicketTypePromoCodeConfigurations: tool({
  description: "Retrieves a list of all Promo Code Configurations for the specified Ticket Type",
  parameters: jsonSchema<any>({ type: "object", properties: {"ticket_type_id":{"type":"integer"},"with":{"type":"array","items":{"type":"string","enum":["promo_code"]}},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/ticket-types/${args.ticket_type_id}/promo-code-configurations?with=${encodeURIComponent(args.with)}&page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listTicketTypesPromoCodes: tool({
  description: "Retrieves a list of all Promo Codes made for the specified Ticket Type",
  parameters: jsonSchema<any>({ type: "object", properties: {"ticket_types_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/ticket-types/${args.ticket_types_id}/promo-codes?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
fetchTicketType: tool({
  description: "Fetch a single Ticket Type resource.",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/ticket-types/${args.id}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
updateTicketType: tool({
  description: "Update a single Ticket Type resource.",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"TicketTypeFillable","properties":{"commitment":{"description":"A Commitment defines an agreement by a Supporter to raise a specified amount, or meet a certain condition, within a specific timeframe when ticket having commitment is purchased.","properties":{"deadline":{"description":"Deadline for Commitment agreement","type":"string","format":"date-time"},"value":{"description":"Commitment amount","type":"number","format":"double","minimum":1}},"type":"object"},"description":{"description":"Description of Ticket Type","type":"string","maxLength":900},"ended_at":{"description":"Date when Ticket Type is no longer available","type":"string","format":"date-time"},"entries_per_ticket":{"description":"How many entries a Ticket of this type grants to a purchaser","type":"integer","minimum":1},"is_active":{"description":"Whether Ticket Type is available to purchase","type":"boolean","default":true},"max_per_transaction":{"description":"The most Tickets of this type that be purchased in a single transaction","type":"integer","minimum":1},"name":{"description":"The name of the TicketType","type":"string","maxLength":100},"org_percent":{"description":"Use deductible_percent","type":"number","format":"double","deprecated":true},"deductible_amount":{"description":"Amount of ticket price that is considered donation to campaign (May only specify deductible_percent OR deductible_amount)","type":"number","format":"double"},"deductible_percent":{"description":"Percentage of ticket price that is considered donation to campaign (May only specify deductible_percent OR deductible_amount)","type":"number","format":"double"},"price":{"description":"Price of a single Ticket of this type.","type":"number","format":"double","minimum":0},"quantity_available":{"description":"Quantity of Tickets available for purchase. Use 'null' for unlimited tickets.","type":["null","integer"],"default":null,"minimum":-1},"started_at":{"description":"Date when Ticket Type can start being purchased","type":"string","format":"date-time"},"weight":{"description":"Display order","type":"integer","minimum":0}},"type":"object"},"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/ticket-types/${args.id}`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listAcknowledgements: tool({
  description: "Retrieves a list of all Acknowledgements made for the specified Transaction",
  parameters: jsonSchema<any>({ type: "object", properties: {"transaction_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/transactions/${args.transaction_id}/acknowledgements?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createAcknowledgement: tool({
  description: "Create Acknowledgement for specified Transaction",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"AcknowledgementFillable","properties":{"fundraising_entity_id":{"description":"Primary identifier of associated Fundraising Entity","type":["null","integer"]},"fundraising_entity_type":{"description":"Type of associated Fundraising Entity","type":["null","string"],"enum":["organization","campaign","fundraisingPage","fundraisingTeam"]}},"type":"object"},"transaction_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/transactions/${args.transaction_id}/acknowledgements`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listTransactionAnswers: tool({
  description: "Retrieves list of all Answers related to specified Transaction",
  parameters: jsonSchema<any>({ type: "object", properties: {"transaction_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/transactions/${args.transaction_id}/answers?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createTransactionDedication: tool({
  description: "Create a Dedication",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"DedicationFillable","properties":{"type":{"description":"Description of Dedication's purpose","type":"string","enum":["honor","memory"]},"honoree_name":{"description":"Honoree's full name","type":"string"},"name":{"description":"Dedication contact full name","type":"string"},"email_address":{"description":"Email Address","type":"string"},"address":{"description":"Dedication contact address","type":"string"},"city":{"description":"Dedication contact city","type":"string"},"state":{"description":"Dedication contact state","type":"string","maxLength":50},"postal_code":{"description":"Dedication contact postal code","type":"string"},"country":{"description":"Dedication contact country","type":"string","maxLength":2},"is_gift_amount_msg_included":{"description":"Indicates whether the gift amount is to be displayed in communication","type":"boolean"},"ecard_message":{"description":"Message added to Ecard","type":"string"},"first_name":{"description":"Dedication contact first name","type":"string"},"last_name":{"description":"Dedication contact last name","type":"string"},"honoree_first_name":{"description":"Honoree's first name","type":"string"},"honoree_last_name":{"description":"Honoree's last name","type":"string"}},"type":"object"},"transaction_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/transactions/${args.transaction_id}/dedications`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
createHardCreditTransfer: tool({
  description: "Creates a Hard Credit Transfer for the specified Transaction, thereby re-attributing it to the new Fundraising Entity",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Hard Credit Transfer Fillable","properties":{"note":{"description":"Memo describing details of / reason for Transfer","type":"string","maxLength":255},"to":{"properties":{"type":{"description":"Type of page","type":"string","enum":["campaign","fundraising_page","fundraising_team"]},"id":{"description":"ID of the page","type":"integer"}},"type":"object"}},"type":"object"},"transaction_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/transactions/${args.transaction_id}/hard-credit-transfers`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listTransactionsRegistrations: tool({
  description: "Retrieves a list of all Registrations for a specific Transaction",
  parameters: jsonSchema<any>({ type: "object", properties: {"transaction_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/transactions/${args.transaction_id}/registrations?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
listUpdateComments: tool({
  description: "Retrieves a paginated list of Comments for a Update",
  parameters: jsonSchema<any>({ type: "object", properties: {"update_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/updates/${args.update_id}/comments?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createUpdateComment: tool({
  description: "Create Comment for specified Update",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Comment Fillable","properties":{"body":{"description":"The content of the Comment","type":"string"}},"type":"object"},"update_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/stories/${args.update_id}/comments`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
listUpdateLikes: tool({
  description: "Retrieves a list of all Likes made for the specified Update",
  parameters: jsonSchema<any>({ type: "object", properties: {"update_id":{"type":"integer"},"page":{"type":"integer"},"per_page":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/updates/${args.update_id}/likes?page=${encodeURIComponent(args.page)}&per_page=${encodeURIComponent(args.per_page)}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
createUpdateLike: tool({
  description: "Create a Like for the specified Update",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"title":"Like (Fillable Update)","type":"object","allOf":[{"title":"Like (Fillable)","properties":{"member_id":{"description":"Primary identifier of associated Member","type":"integer"},"likeable_id":{"description":"Primary identifier of the Entity for which the Like was created","type":["null","integer"]},"likeable_type":{"description":"Type of the Entity for which the Like was created","type":["null","string"]}},"type":"object"},{"properties":{"likeable_id":{"type":"integer"},"likeable_type":{"type":"string"}},"type":"object"}]},"update_id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/updates/${args.update_id}/likes`;
    const fetchArgs = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
fetchUpdate: tool({
  description: "Fetch Update",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/updates/${args.id}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
updateUpdate: tool({
  description: "Update Update",
  parameters: jsonSchema<any>({ type: "object", properties: {"requestBody":{"properties":{"body":{"description":"Main content of Update","type":"string"},"status":{"description":"Indication whether Post is a draft or has been published","type":"string","enum":["draft","published"]},"title":{"description":"Title of Post","type":["null","string"]},"visibility":{"description":"Visibility of Update (private Updates can only be seen by the Member associated\n    with record)","type":"string","enum":["private","public"]}},"type":"object"},"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/updates/${args.id}`;
    const fetchArgs = {
      url,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      body: JSON.stringify(args.requestBody),
    };
    return fetchArgs;
  }
}),
deleteUpdate: tool({
  description: "Delete Update",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/updates/${args.id}`;
    const fetchArgs = {
      url,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
fetchWhitelistedCurrency: tool({
  description: "Fetch specified Whitelisted Currency",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/whitelisted-currencies/${args.id}`;
    const fetchArgs = {
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}),
deleteWhitelistedCurrency: tool({
  description: "Delete specified Whitelisted Currency",
  parameters: jsonSchema<any>({ type: "object", properties: {"id":{"type":"integer"}}}),
  execute: async (args) => {
    const url = `https://api.classy.org/2.0/whitelisted-currencies/${args.id}`;
    const fetchArgs = {
      url,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as necessary (e.g., Authorization)
      },
      
    };
    return fetchArgs;
  }
}) }
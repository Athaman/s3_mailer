'use strict';

module.exports.s3_notification = async event => {
  // extract s3 data from event object 
  console.log("\n\n\n\n\n", event.Records);
  console.log("\n\n\n\n\n", event.Records[0].s3);

  //  generate an email using the data 

  // send email

  //  send a response
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

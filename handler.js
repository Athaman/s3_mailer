'use strict';

module.exports.s3_notification = async event => {
  // extract s3 data from event object 

  const uploadData = event.Records.map(record => {
    return {
      bucketName: record.s3.bucket.name,
      file: record.s3.object.key,
      fileSize: record.s3.object.size
    };
  })[0];
  //  generate an email using the data 
  console.log(uploadData);
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

'use strict';

const mailer = require('./mailer');

module.exports.s3_notification = async event => {
  // extract s3 data from event object 

  const uploadData = event.Records.map(record => {
    return {
      bucketName: record.s3.bucket.name,
      file: record.s3.object.key,
      fileSize: record.s3.object.size
    };
  })[0];
  
  const content = await mailer.generateContent(uploadData);
  const response = await mailer.sendEmail(content);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        response: response
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

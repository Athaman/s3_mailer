const momentTimeZone = require('moment-timezone');

module.exports = data => {
    return new Promise((resolve, reject) => {
        try {
            //  timestamp
            const timestamp = `${momentTimeZone
                .tz('Australia/Sydney')
                .format('MMM do, h:mm:ss a')} AEST.`;
            //  subject line
            const subject = `New upload to S3 Bucket: ${data.bucketName}`;
            //  text body
            const textBody = `
                Greetings!

                Someone uploaded ${data.file} (${data.fileSize} bytes) to your bucket "${data.bucketName}" on ${timestamp}.

                Congratulations.

                Sincerely,

                A serverless function
            `
            // html body
            const htmlBody = `
            <div style="max-width: 600px; margin: 20px auto">
              <h1>Greetings!</h1>

              <p style="line-height: 22px; font-size: 16px;">
              Someone uploaded <b>${data.file}</b> (${data.fileSize} bytes) to your bucket "${data.bucketName}" on ${timestamp}.
              <br />
              Congrats!
              <br />
              Sincerely,
              <br />
              A serverless function
              </p>
            `

            console.log('generated content.');
            resolve({
                subject,
                textBody,
                htmlBody
            });
        } catch (err) {
            console.error('Error generating email content.', err);

            reject(new Error(JSON.stringify(err)));
        }
    })
};
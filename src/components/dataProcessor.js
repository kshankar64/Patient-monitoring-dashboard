const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);
    const params = {
      TableName: process.env.PATIENT_TABLE,
      Item: {
        patientId: data.patientId,
        name: data.name,
        heartRate: data.heartRate,
        bloodPressure: data.bloodPressure,
        temperature: data.temperature,
        timestamp: new Date().toISOString()
      }
    };
    await dynamoDb.put(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Data processed successfully' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};

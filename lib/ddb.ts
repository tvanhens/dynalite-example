import * as AWS from 'aws-sdk';

const DocumentClient = AWS.DynamoDB.DocumentClient;

const config: AWS.DynamoDB.DocumentClient.DocumentClientOptions = {
  convertEmptyValues: true,
  ...(process.env.MOCK_DYNAMODB_ENDPOINT && {
    endpoint: process.env.MOCK_DYNAMODB_ENDPOINT,
    sslEnabled: false,
    region: "local"
  })
};

export default new DocumentClient(config);

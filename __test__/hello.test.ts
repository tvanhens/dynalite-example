import ddb from '../lib/ddb';

test('hello', async () => {
  await ddb.put({
    TableName: 'table',
    Item: {
      id: "world",
      stuff: "things"
    }
  }).promise();
});

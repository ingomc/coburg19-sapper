import data from './_data.js';

const contents = JSON.stringify(data);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}

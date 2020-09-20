export function safePathQuery({ variables, ...rest }) {
  if (variables && 'path' in variables) {
    const safePath = (variables.path || '')
      .split('?')[0]
      .split('#')[0]
      .replace(/\/$/, '');

    return {
      variables: {
        ...variables,
        path: safePath
      },
      ...rest
    };
  }
  

  return {
    variables,
    ...rest
  };
}


export async function simplyFetchFromGraph({
  uri = `https://api.crystallize.com/furniture/catalogue`,
  query,
  variables
}) {
  
  const body = JSON.stringify(safePathQuery({ query, variables }));

  const response = await fetch(uri, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();

}
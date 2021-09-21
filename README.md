Simple application to calculate and display area of geometric data. Try to upload the file `example.json` from the root directory and try it out.

## Local Setup

First, change the endpoint to point to localhost in the file `utils/constants.ts`:

```typescript
export const SERVICE_ENDPOINT = "http://localhost:3000";
```
Then install the dependencies and run the server

```bash
$ npm i
$ npm run dev
```

## Frontend
The frontend application is build using Next.js with React and Typescript. The main entry of the application is `pages/index.tsx` which is using various components from the `components/` directory. For a simpler prototyping of styles TailwindCSS was used.

## API
The API layer makes use of serverless functions. `next-connect` is being used to configure the API route with middleware, just as one would do with an ExpressJS server. Vercel finds files in the `pages/api` and deploys these API routes mapping them to `host/api/*`.
In this case the API endpoint is `https://polygon-area-calculator.vercel.app/api/upload`
You can try calling this enpoint, e.g.
```
curl --location --request POST 'https://polygon-area-calculator.vercel.app/api/upload' \
--form 'polygon=@"/path-to-data/example.json"'
```

## Tests

This project uses Jest and React Testing Library. A test example for an utility and a React component can be found in the folde `__tests__`. As a next step integration tests (e.g. using Cypress) could be introduced.
To run the tests simply call `npm run test`.

## Deployment on Vercel

This app was deployed on the[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

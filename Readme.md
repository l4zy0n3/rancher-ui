# Usage

1. Create a cypress.env.json file in the root of your project with the following content

```
{
  "username": "your-username",
  "password": "your-password"
}
```

2. Pass the baseurl variable to cypress

```bash
cypress run --env baseurl=<url>
```

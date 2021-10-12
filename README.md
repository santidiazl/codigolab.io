# Código Lab - Website

This repo contains the codebase for everything related to Código Lab's webpage.

## Running locally

1. Run `yarn install` to install dependencies
2. Run `yarn develop` to run the server locally, visit localhost:8000

## Gatsby Plugins

The current list of Gatsby plugins, subject to change:

- Google Tag Manager (GTM)
  - Callbell
  - Universal Google Analytics
- Google Analytics (GA)
- MailChimp - coming soon..

## Integrations

Current planned integrations, subject to change:

- Typeform/Wispform link to apply to next course batch
- Blog (Ghost?) - coming soon..

## Other

### Domain Hosting

- codigolab.io hosted on Dreamhost - deploys from commits to `develop`

### Netlify Integration

We use Netlify to deploy whenever the develop branch on this repo is updated, with both codigolab.io and codigolab.co DNS mappings pointing to Netfify. This means that upon a merge to develop, live changes will be seen on codigolab.io.

### Based on Gatsby Stellar Starter

This site is based off the Stellar site template, designed by HTML5 UP.

---

# Git Flow - Adding changes to update the site :

To add any changes, please open up a pull request against the develop branch by following the steps below:

1. If not already on `develop`, make sure you switch to the `develop` branch and that you are up to date with the latest changes:

```
git checkout develop
git pull
```

2. Create a new feature branch to work on:

```
git branch feature/my-changes
```

3. Run `yarn develop` and access your work in progress at `localhost:8000`
4. Make any changes you want (using VSCode for example)
5. Once you are satisfied with your changes, commit and push them to GitHub:

```
git add .
git commit -m "I updated some stuff"
git push
```

6. Now it is time to open up a Pull Request (PR). Navigate to the GitHub repository (here or https://github.com/codigolab/codigolab-website), go to Pull Requests tab and Create Pull Request. Make sure the base branch is `develop`. This is the branch you want to merge into.
7. Request @dankostiuk as reviewer. Have them review your changes and merge into `develop`.
8. See your changes live on https://www.codigolab.io

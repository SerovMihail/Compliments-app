yarn nx g @nrwl/workspace:run-commands deploy \
  --project back \
  --command "cd dist/apps/back &&
  cp ../../../apps/back/deploy/Dockerfile . &&
  heroku container:login &&
  heroku container:push web -a compliments-app-back &&
  heroku container:release web -a compliments-app-back"
